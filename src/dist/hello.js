"use strict";
function hello() {
    console.log("hello");
}
hello();
var User = /** @class */ (function () {
    function User(familyName, givenName, age) {
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
    return User;
}());
var user = new User('山田', '太郎', 29); // 名前と年齢は適当に
var contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = user.familyName + " " + user.givenName;
}
