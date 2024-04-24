// modal.ts
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
        // Confirm button listener
        this.confirmBtn.addEventListener('click', () => {
            this.hideModal();
            // Additional logic for confirming the reservation can be added here
        });

        // Cancel and close button listener
        this.cancelBtn.addEventListener('click', () => this.hideModal());
        this.closeSpan.addEventListener('click', () => this.hideModal());

        // Hide modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.hideModal();
            }
        });
    }

    public showModal(seatNumber: string): void {
        this.modalText.textContent = `Do you want to reserve seat ${seatNumber}?`;
        this.modal.style.display = 'block';
        this.modal.setAttribute('data-current-seat', seatNumber);
    }

    private hideModal(): void {
        this.modal.style.display = 'none';
    }
}
