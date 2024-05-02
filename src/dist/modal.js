// modal.js
// 独自のモーダル設定
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
    // モーダル表示
    showModal(seatNumber) {
        this.modalText.textContent = ` ${seatNumber} 番の座席を予約しますか?`;
        this.modal.style.display = 'block';
        this.modal.setAttribute('data-seat', seatNumber);
    }
    // 座席を予約した後のバナー表示
    confirmReservation(seatNumber) {
        const banner = document.querySelector(`banner`);
        const message = document.getElementById('reservation-message');
        if (banner && message) {
            message.innerHTML = `${seatNumber}番の席を予約しました。`;
            banner.style.display = "block";
            // クローズボタンにイベントリスナーを追加
            const closeButton = document.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                banner.style.display = "none";
            });
        }
    }
    // モーダルを閉じる
    hideModal() {
        this.modal.style.display = 'none';
    }
}
//# sourceMappingURL=modal.js.map