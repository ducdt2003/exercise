// Tạo mảng todos (mockup data)
const API_URL = "http://localhost:8000/todos";
let todos = [];

// Hiển thị danh sách todo ra ngoài giao diện
const ul = document.querySelector("ul");
const renderTodos = (todos) => {
    if (todos.length === 0) {
        ul.innerHTML = "<li>Danh sách công việc trống</li>";
        return;
    }

    let html = "";
    todos.forEach(todo => {
        html += `
            <li>
                <input 
                    type="checkbox" 
                    ${todo.status ? "checked" : ""}  
                    onchange="toggleStatus(${todo.id})" 
                />
                <span class=${todo.status ? "active" : ""}>${todo.name}</span> 
                <button onclick="editTodo(${todo.id})">Edit</button> 
                <button onclick="deleteTodo(${todo.id})">Delete</button> 
            </li>
        `;
    });
    ul.innerHTML = html;
}

// Lấy danh sách todo từ server
const getAllTodos = async () => {
    try {
        let res = await axios.get(API_URL);
        todos = res.data;
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
};

// Thêm công việc mới
const addTodo = async () => {
    const todoNameInput = document.getElementById("input-todo");  // Sửa đúng ID
    const newName = todoNameInput.value.trim();  // Lấy tên công việc từ ô nhập liệu và loại bỏ khoảng trắng thừa

    if (newName) {
        try {
            // Gửi yêu cầu thêm todo mới lên server
            const request = {
                name: newName,
                status: false  // Mặc định trạng thái công việc là chưa hoàn thành
            };

            const res = await axios.post(API_URL, request);  // Gửi yêu cầu POST tới server để tạo todo mới

            // Thêm todo mới vào danh sách todos ở client
            todos.push(res.data);  // Dữ liệu trả về từ server sẽ là todo mới
            renderTodos(todos);  // Cập nhật lại giao diện

            // Làm trống ô nhập liệu sau khi thêm công việc
            todoNameInput.value = "";  

            alert("Công việc đã được thêm thành công!");
        } catch (error) {
            console.log(error);
            alert("Có lỗi xảy ra khi thêm công việc, vui lòng thử lại!");
        }
    } else {
        alert("Vui lòng nhập tên công việc!");
    }
};

// Xóa todo theo ID
const deleteTodo = async (id) => {
    const isConfirm = window.confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (!isConfirm) return;

    try {
        await axios.delete(`${API_URL}/${id}`);
        const index = todos.findIndex((todo) => todo.id === id);
        todos.splice(index, 1);
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
};

// Thay đổi trạng thái todo (hoàn thành / chưa hoàn thành)
const toggleStatus = async (id) => {
    try {
        const todo = todos.find(todo => todo.id === id);
        const request = {
            name: todo.name,
            status: !todo.status
        };
        await axios.put(`${API_URL}/${id}`, request);
        todo.status = !todo.status;
        renderTodos(todos);
    } catch (error) {
        console.log(error);
    }
};

// Chỉnh sửa todo
const editTodo = async (id) => {
    const todo = todos.find(todo => todo.id === id);
    const newName = prompt("Chỉnh sửa tên công việc:", todo.name);

    if (newName && newName !== todo.name) {
        try {
            const request = {
                name: newName,
                status: todo.status
            };
            await axios.put(`${API_URL}/${id}`, request);
            todo.name = newName;
            renderTodos(todos);
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("Tên công việc không hợp lệ!");
    }
};

// Gọi hàm lấy tất cả todos khi trang được tải
getAllTodos();

// Thêm sự kiện cho nút "Add"
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTodo);
