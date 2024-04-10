//最大公約数・ユークリッドの互除法。
function euc(num1:string,num2:string) :void{

    const resultElement = document.getElementById('result') as HTMLElement;
    const errorElement = document.getElementById('error') as HTMLElement;

    //エラーハンドリング　正規表現で数字以外入力時にerrorコンテナに結果を送る
    if (!num1.match(/^\d+$/) || !num2.match(/^\d+$/)) {
        errorElement.textContent = 'エラー：数値を入力してください。';
        return;
    }

    let n :number = parseInt(num1,10)
    let m :number = parseInt(num2,10)

    if (n <= m) {
        let exchange = m;
        m = n;
        n = exchange;
    }
        
    let mod : number;
    while (m > 0) {
        mod = n % m;
        n = m;
        m = mod;
    }
    resultElement.textContent = `${num1}と${num2}の最大公約数は${n}です。`;
}
