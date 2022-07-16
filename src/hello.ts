function hello(){
    console.log("hello");
}
hello();

const user = new User("taro","uamada",29); // 名前と年齢は適当に

const contentsElem = document.getElementById('contents');

if(!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}