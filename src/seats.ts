// script.js
// イベントリスナー
import { ModalManager } from "./modal.js";

document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll<HTMLDivElement>('div[data-seat]'); // 座席を表すdivコンテナをすべて選択
    const modalManager = new ModalManager();  // モーダル管理クラスのインスタンス化

    // 座席をクリックしたら、選択式ポップアップを出す。
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
            // 選択した座席
            const seatNumber = this.getAttribute('data-seat');
            // ユーザーが予約するか確認するモーダルを表示する
            if(seatNumber){
                modalManager.showModal(seatNumber);
            }
        });
    });

    
});

// 座席を予約する
export function reserveSeat(seatNumber:string): void {
    const banner = document.getElementById(`banner`);
    if(banner){
        banner.innerHTML = `
            <p>${seatNumber}番の席を予約しました。</p>
            <button onclick="hideBanner()">OK</button>
        `;
        banner.style.display = "block";
    }
}

// 座席の予約を取り消す
function resetReserveSeat(seatIdSet:string[], employeeId:string){

}

// 座席の予約状況を確認する
function searchReserveSeat(seatIdSet:string[]){

}