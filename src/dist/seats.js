// script.js
// イベントリスナー
import { ModalManager } from "./modal.js";
document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('div[data-seat]'); // 座席を表すdivコンテナをすべて選択
    const modalManager = new ModalManager(); // モーダル管理クラスのインスタンス化
    // 座席をクリックしたら、選択式ポップアップを出す。
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // 選択した座席
            const seatNumber = seat.getAttribute('data-seat');
            // ユーザーが予約するか確認するモーダルを表示する
            if (seatNumber) {
                modalManager.showModal(seatNumber);
            }
        });
    });
    // 予約取り消しリンクにイベントリスナー設置
    const cancelReserveSeat = document.querySelector('a[href=#cancelreserve]');
    cancelReserveSeat === null || cancelReserveSeat === void 0 ? void 0 : cancelReserveSeat.addEventListener('click', (event) => {
        event.preventDefault(); // 以下カスタムアクション実行のため、リンクのデフォルトアクションを防止する
        resetReserveSeat();
    });
    // 予約状況確認リンクにイベントリスナーを設定
    const checkReservationLink = document.querySelector('a[href="#logout"]');
    checkReservationLink === null || checkReservationLink === void 0 ? void 0 : checkReservationLink.addEventListener('click', (event) => {
        event.preventDefault(); // リンクのデフォルトアクションを防止
        logout(); // 予約状況確認関数を実行
    });
});
// 予約取り消し関数
function resetReserveSeat() {
    console.log("予約を取り消すかどうかのモーダルを出す");
}
// ログアウト
function logout() {
    console.log("ログアウトして、login.htmlに遷移するか確認するモーダルを出す");
}
//# sourceMappingURL=seats.js.map