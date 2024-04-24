"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalManager = void 0;
// modal.ts
class ModalManager {
    constructor() {
        this.modal = document.getElementById('confirmModal');
        this.modalText = document.getElementById('modalText');
        this.confirmBtn = document.getElementById('confirmBtn');
        this.cancelBtn = document.getElementById('cancelBtn');
        this.closeSpan = document.querySelector('.close');
        this.setupListeners();
    }
    setupListeners() {
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
    showModal(seatNumber) {
        this.modalText.textContent = `Do you want to reserve seat ${seatNumber}?`;
        this.modal.style.display = 'block';
        this.modal.setAttribute('data-current-seat', seatNumber);
    }
    hideModal() {
        this.modal.style.display = 'none';
    }
}
exports.ModalManager = ModalManager;
//# sourceMappingURL=modal.js.map