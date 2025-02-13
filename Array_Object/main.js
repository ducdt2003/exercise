// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
products.forEach(product => {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
});
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let total = products.reduce((sum, product) => sum + (product.price * product.count), 0);
console.log("Tổng tiền tất cả sản phẩm trong giỏ hàng: " + total);
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let appleProducts = products.filter(product => product.brand === "Apple");
console.log("Sản phẩm của Apple:");
appleProducts.forEach(product => console.log(product.name));
// 4. Tìm các sản phẩm có giá > 20000000
let expensiveProducts = products.filter(product => product.price > 20000000);
console.log("Sản phẩm có giá > 20,000,000:");
expensiveProducts.forEach(product => console.log(product.name));
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let proProducts = products.filter(product => product.name.toLowerCase().includes("pro"));
console.log("Sản phẩm có chữ 'pro' trong tên:");
proProducts.forEach(product => console.log(product.name));
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(product => product.brand !== "Samsung");
console.log("Giỏ hàng sau khi xóa các sản phẩm của Samsung:");
products.forEach(product => console.log(product.name));
// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);
console.log("Giỏ hàng sau khi sắp xếp theo giá tăng dần:");
products.forEach(product => console.log(product.name));
// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.count - a.count);
console.log("Giỏ hàng sau khi sắp xếp theo số lượng giảm dần:");
products.forEach(product => console.log(product.name));
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let randomProducts = [];
for (let i = 0; i < 2; i++) {
    let randomIndex = Math.floor(Math.random() * products.length);
    randomProducts.push(products[randomIndex]);
}
console.log("2 sản phẩm bất kỳ trong giỏ hàng:");
randomProducts.forEach(product => console.log(product.name));