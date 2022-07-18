//const contentsNumber = document.getElementById('number');

function euc(num1:number,num2:number) {
    let n = num1;
    let m = num2;
    if (n <= m) {
        let exchange = m;
        n = m;
        m = exchange;
    }
    let mod : number;
    while (m > 0) {
        mod = n % m;
        n = m;
        m = mod;
    }
    return `${num1}と${num2}の最大公約数は${n}です。`;
}

console.log(euc(36,16));