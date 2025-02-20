// Mảng todos (mockup data) - Đây là mảng chứa các công việc mẫu (dữ liệu giả)
// Mỗi công việc có 3 thuộc tính: id, name (tên công việc), status (trạng thái hoàn thành)
let todos = [
    { id: 1, name: "Đi chơi với bạn", status: true },   // Công việc này đã hoàn thành (status: true)
    { id: 2, name: "Đá bóng", status: false },           // Công việc này chưa hoàn thành (status: false)
    { id: 3, name: "Làm bài tập JS", status: true },     // Công việc này đã hoàn thành
];

// Hiển thị danh sách todo ra ngoài giao diện
const ul = document.querySelector("ul");  // Lấy thẻ <ul> trong HTML để hiển thị danh sách công việc
// Hàm renderTodos dùng để hiển thị mảng todos lên giao diện
const renderTodos = (todos) => {
    // Nếu mảng todos trống, hiển thị thông báo "Danh sách công việc trống"
    if (todos.length === 0) {
        ul.innerHTML = "<li>Danh sách công việc trống</li>";
        return;
    }

    let html = "";  // Chuỗi HTML chứa các phần tử <li> cho mỗi công việc
    // Duyệt qua từng công việc trong mảng todos
    todos.forEach(todo => {
        // Tạo chuỗi HTML cho mỗi công việc


        // Nếu công việc đã hoàn thành, checkbox sẽ được checked
        // Khi checkbox thay đổi, gọi hàm toggleStatus với id công việc
        // Nếu công việc hoàn thành, thêm class "active" để thay đổi kiểu hiển thị
        // Nút Edit sẽ gọi hàm editTodo với id công việc
        // Nút Delete sẽ gọi hàm deleteTodo với id công việc
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
    ul.innerHTML = html;  // Cập nhật nội dung thẻ <ul> với danh sách công việc
}









// bài tập về nha 

// Chức năng thêm công việc mới
const btnAdd = document.getElementById("btn-add");  // Lấy nút "Add" trong HTML
const inputTodo = document.getElementById("input-todo");  // Lấy input để nhập tên công việc mới

btnAdd.addEventListener("click", () => {
    const todoName = inputTodo.value.trim();  // Lấy giá trị từ ô input và loại bỏ khoảng trắng ở đầu và cuối
    if (todoName === "") {  // Nếu tên công việc rỗng, yêu cầu người dùng nhập tên
        alert("Tên công việc không được để trống");
        return;
    }

    const newTodo = {
        id: todos.length + 1,  // Tạo id mới dựa trên độ dài mảng todos hiện tại
        name: todoName,  // Gán tên công việc người dùng nhập
        status: false  // Mặc định trạng thái công việc là chưa hoàn thành
    };
    
    todos.push(newTodo);  // Thêm công việc mới vào mảng todos
    inputTodo.value = "";  // Xóa giá trị trong ô input
    renderTodos(todos);  // Cập nhật lại danh sách công việc trên giao diện
});


// Chức năng chỉnh sửa tiêu đề công việc
const editTodo = (id) => {
    // Tìm công việc trong mảng todos dựa trên id
    const todo = todos.find(todo => todo.id === id);
    // Hiển thị hộp thoại để người dùng nhập tên công việc mới
    const newName = window.prompt("Chỉnh sửa tiêu đề công việc", todo.name);
    if (newName && newName.trim() !== "") {  // Kiểm tra nếu người dùng nhập tên mới không rỗng
        todo.name = newName.trim();  // Cập nhật tên công việc
        renderTodos(todos);  // Cập nhật lại danh sách công việc trên giao diện
    }
};













// Chức năng xóa công việc
const deleteTodo = (id) => {
    // Hiển thị hộp thoại xác nhận việc xóa công việc
    const isConfirm = window.confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (!isConfirm) return;  // Nếu người dùng không xác nhận xóa, thoát hàm

    // Tìm công việc trong mảng todos dựa trên id
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);  // Xóa công việc khỏi mảng todos
    renderTodos(todos);  // Cập nhật lại danh sách công việc trên giao diện
};

// Chức năng thay đổi trạng thái công việc (hoàn thành / chưa hoàn thành)
const toggleStatus = (id) => {
    // Tìm công việc trong mảng todos dựa trên id
    const todo = todos.find(todo => todo.id === id);
    // Đổi trạng thái công việc (nếu đang hoàn thành thì chuyển sang chưa hoàn thành và ngược lại)
    todo.status = !todo.status;
    renderTodos(todos);  // Cập nhật lại danh sách công việc trên giao diện
};

// Hiển thị danh sách todo lúc đầu khi trang được tải
renderTodos(todos);
