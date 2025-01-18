function calculateFuctorial(n){
    if( n < 0){
        return "so khong duong";
    }
    let number = 1;
    for (let i = 1; i <= n; i++){
        number *= i;
    }
    return number;
}

console.log(calculateFuctorial(5));
