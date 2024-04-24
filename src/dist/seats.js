"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// script.js
// イベントリスナー
const modal_1 = require("./modal");
document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('div[data-seat]'); // 座席を表すdivコンテナをすべて選択
    const modalManager = new modal_1.ModalManager(); // モーダル管理クラスのインスタンス化
    // 座席をクリックしたら、選択式ポップアップを出す。
    seats.forEach(seat => {
        seat.addEventListener('click', function () {
            // 選択した座席
            const seatNumber = this.getAttribute('data-seat');
            // ユーザーが予約するか確認するモーダルを表示する
            if (seatNumber) {
                modalManager.showModal(seatNumber);
            }
        });
    });
});
// 座席を予約する
function reserveSeat(seatNumber) {
    const banner = document.getElementById(`banner`);
    if (banner) {
        banner.innerHTML = `
            <p>${seatNumber}番の席を予約しました。</p>
            <button onclick="hideBanner()">OK</button>
        `;
        banner.style.display = "block";
    }
}
//バナー表示を消す
function hideBanner() {
    const banner = document.getElementById(`banner`);
    if (banner) {
        banner.style.display = "none";
    }
}
// 座席の予約を取り消す
function resetReserveSeat(seatIdSet, employeeId) {
}
// 座席の予約状況を確認する
function searchReserveSeat(seatIdSet) {
}
//# sourceMappingURL=seats.js.map