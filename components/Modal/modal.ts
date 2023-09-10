class Modal {
  private modalElement: HTMLElement;
  private closeModalBtn: HTMLElement;

  constructor() {
    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal';
    this.modalElement.style.display = 'none';

    this.closeModalBtn = document.createElement('span');
    this.closeModalBtn.className = 'close-btn';
    this.closeModalBtn.innerText = '×';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = `
            <h2>Модальное окно</h2>
            <p>Содержимое модального окна здесь.</p>
        `;

    modalContent.appendChild(this.closeModalBtn);
    this.modalElement.appendChild(modalContent);

    document.body.appendChild(this.modalElement);

    this.closeModalBtn.addEventListener('click', () => {
      this.close();
    });

    window.addEventListener('click', (event) => {
      if (event.target === this.modalElement) {
        this.close();
      }
    });
  }

  open() {
    this.modalElement.style.display = 'block';
  }

  close() {
    this.modalElement.style.display = 'none';
  }
}

export default Modal;
