// 1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)

let text = document.getElementById("text").innerHTML;
            // Tách đoạn văn thành các từ
            // /\s+/ được dùng để tách chuỗi tại một hoặc nhiều ký tự trắng liên tiếp (space, tab, xuống dòng, v.v.).
            let words = text.split(/\s+/); // (" ")

            // Duyệt qua từng từ và kiểm tra độ dài
            for (let i = 0; i < words.length; i++) {
                // Nếu từ có độ dài >= 5 ký tự, thêm thẻ <span> với background yellow
                if (words[i].length >= 5) {
                    words[i] = "<span style='background-color: yellow'>" + words[i] + "</span>";
                }
            }
            // Nối lại các từ thành chuỗi và cập nhật nội dung của đoạn văn
            document.getElementById("text").innerHTML = words.join(" ");
        // document.getElementById("text").innerHTML = words.join(" ");
// var text = document.getElementById("text").innerHTML;

// 2.Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p

let element = document.getElementById("text");
let link = document.createElement("a");
link.href = "https://google.com";
link.textContent = "google";

element.insertAdjacentElement('afterend', link);


// 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
let pElement = document.getElementById("text");

            // Lấy nội dung của thẻ p và tách thành các từ
            let text1 = pElement.textContent || pElement.innerText;

            // Tách chuỗi thành mảng các từ, bỏ qua khoảng trắng thừa
            let words1 = text.trim().split(/\s+/);

            // Đếm số từ
            let wordCount = words.length;

            // Lấy thẻ div để hiển thị kết quả
            let divElement = document.getElementById("wordCount");

            // Hiển thị số từ vào thẻ div
            divElement.textContent = "Số từ trong đoạn văn: " + wordCount;