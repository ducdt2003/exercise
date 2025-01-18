    // reverse dao nguoc mang cac ky tu
    // join('') nối các phần tử trong mảng thành một chuỗi liên tục mà không có ký tự phân cách.
    // split(''): Chuyển chuỗi thành một mảng các ký tự.

    function reverseString(str){
        return str.split('').reverse().join('');
    }
    console.log(reverseString("hello"))