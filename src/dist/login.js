"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault(); // フォームのデフォルト送信をキャンセル
        const userId = document.getElementById('userId').value;
        const password = document.getElementById('password').value;
        try {
            const isValid = yield verifyCredentials(userId, password);
            if (isValid) {
                window.location.href = 'seats.html'; // 認証成功時のページ遷移
            }
            else {
                alert('IDまたはパスワードが正しくありません。'); // 認証失敗時のアラート
            }
        }
        catch (error) {
            console.error('ログイン処理中にエラーが発生しました:', error);
        }
    }));
    function verifyCredentials(userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // 本来はサーバーにリクエストを送り、認証を行います
            // 以下はダミーの実装です
            return userId === 'hogehoge' && password === 'asdf1234';
        });
    }
});
//# sourceMappingURL=login.js.map