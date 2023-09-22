import './modal.css';

/**
 * @module Modal
 */

/**
 * Component Modal.
 *
 * @param {{title: string, content: string}} modal
 */


class Modal {

  /**
   * title
   * @type {string}
   */
  title;

  /**
   * content
   * @type {string}
   */
  content;

  /**
   * modal wrapper
   * @type {HTMLElement}
   */
  modalElement;

  /**
   * close button
   * @type {HTMLElement}
   */
  closeModalBtn;


  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;

    const titleElement = document.createElement('h2');
    titleElement.innerText = this.title;

    const contentElement = document.createElement('p');
    contentElement.innerText = this.content;

    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal';
    this.modalElement.style.display = 'none';

    this.closeModalBtn = document.createElement('span');
    this.closeModalBtn.className = 'close-btn';
    this.closeModalBtn.innerText = '×';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.appendChild(titleElement);
    modalContent.appendChild(contentElement);
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
