// modal.js
// 独自のモーダル設定
import { reserveSeat } from "./seats.js";
export class ModalManager {
    constructor() {
        this.modal = document.getElementById('confirmModal');
        this.modalText = document.getElementById('modalText');
        this.confirmBtn = document.getElementById('confirmBtn');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.closeSpan = document.querySelector('.close');
        this.setupListeners();
    }
    setupListeners() {
        // OKボタンのリスナー
        this.confirmBtn.addEventListener('click', () => {
            const seatNumber = this.modal.getAttribute('data-seat');
            // Nullチェックで型安全を保証する
            if (seatNumber) {
                this.confirmReservation(seatNumber);
            }
            else {
                console.error('座席番号が不正です。');
            }
            this.hideModal();
        });
        // ×ボタン、キャンセルボタンで何もせず閉じる
        this.cancelBtn.addEventListener('click', () => this.hideModal());
        this.closeSpan.addEventListener('click', () => this.hideModal());
        // モーダル外クリックで何もせず閉じる
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.hideModal();
            }
        });
    }
    confirmReservation(seatNumber) {
        reserveSeat(seatNumber); // ここで外部の関数を呼び出す
    }
    showModal(seatNumber) {
        this.modalText.textContent = ` ${seatNumber} 番の座席を予約しますか?`;
        this.modal.style.display = 'block';
        this.modal.setAttribute('data-current-seat', seatNumber);
    }
    hideModal() {
        this.modal.style.display = 'none';
    }
}
//# sourceMappingURL=modal.js.map