function hello() {
    console.log("hello");
}
hello();

//人オブジェクト
class User {
    public age: number;
    public familyName: string;
    public givenName: string;
    constructor (familyName: string, givenName: string, age: number) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
}

const user = new User("taro", "uamada", 29); // 名前と年齢は適当に

const contentsElem = document.getElementById('contents');

if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

