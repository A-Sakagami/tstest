// script.js
// イベントリスナー
import { ModalManager } from "./modal.js";

document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('div[data-seat]'); // 座席を表すdivコンテナをすべて選択
    const modalManager = new ModalManager();  // モーダル管理クラスのインスタンス化

    // 座席をクリックしたら、選択式ポップアップを出す。
    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            // 選択した座席
            const seatNumber = seat.getAttribute('data-seat');
            // ユーザーが予約するか確認するモーダルを表示する
            if(seatNumber){
                modalManager.showModal(seatNumber);
            }
        });
    });

    // 予約取り消しリンクにイベントリスナー設置
    const cancelReserveSeat = document.querySelector('a[href=#cancelreserve]');
    cancelReserveSeat?.addEventListener('click', (event: Event) => {
        event.preventDefault(); // 以下カスタムアクション実行のため、リンクのデフォルトアクションを防止する
        resetReserveSeat();
    });
});


// 座席の予約を取り消す
function resetReserveSeat(){

}

// 座席の予約状況を確認する
function searchReserveSeat(seatId:string){

}