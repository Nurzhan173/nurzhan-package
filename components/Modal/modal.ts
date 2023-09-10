
/* eslint-disable */

/* eslint-disable */

/**
 * @module Skeleton
 */

/**
 * Функция, складывающая два числа.
 *
 * @param {function} onclick - onClick
 * @param {number} b - Второе число.
 * @returns {number} Сумма двух чисел.
 */


class Modal {

  modalElement;
  closeModalBtn;

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

module.exports = Modal;
