"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
function hello() {
    console.log("hello");
}
hello();
const user = new User_1.User("taro", "uamada", 29); // 名前と年齢は適当に
const contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}
//# sourceMappingURL=hello.js.map