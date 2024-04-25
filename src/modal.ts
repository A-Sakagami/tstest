// modal.js
// 独自のモーダル設定
import { reserveSeat } from "./seats.js";

export class ModalManager {
    private modal: HTMLElement;
    private modalText: HTMLElement;
    private confirmBtn: HTMLElement;
    private cancelBtn: HTMLElement;
    private closeSpan: HTMLElement;

    constructor() {
        this.modal = document.getElementById('confirmModal') as HTMLElement;
        this.modalText = document.getElementById('modalText') as HTMLElement;
        this.confirmBtn = document.getElementById('confirmBtn') as HTMLElement;
        this.cancelBtn = document.getElementById('cancelBtn') as HTMLElement;
        this.closeSpan = document.querySelector('.close') as HTMLElement;

        this.setupListeners();
    }

    private setupListeners(): void {
        // OKボタンのリスナー
        this.confirmBtn.addEventListener('click', () => {
            const seatNumber = this.modal.getAttribute('data-seat');
            // Nullチェックで型安全を保証する
            if(seatNumber){
                this.confirmReservation(seatNumber);
            }else{
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

    public confirmReservation(seatNumber: string): void {
        reserveSeat(seatNumber);  // ここで外部の関数を呼び出す
    }

    public showModal(seatNumber: string): void {
        this.modalText.textContent = ` ${seatNumber} 番の座席を予約しますか?`;
        this.modal.style.display = 'block';
        this.modal.setAttribute('data-current-seat', seatNumber);
    }

    private hideModal(): void {
        this.modal.style.display = 'none';
    }
}
