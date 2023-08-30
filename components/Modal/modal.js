/* eslint-disable */

/**
 * @module Modal
 */

/**
 * Функция, складывающая два числа.
 *
 * @param {function} onclick - onClick
 * @param {number} b - Второе число.
 * @returns {number} Сумма двух чисел.
 */

class Modal {
  constructor() {
    // function closeModal() {
    //   modal.style.display = 'none';
    // }

    window.onclick = function(event) {
      if (event.target === modal) {
        window.modal.style.display = 'none';
      }
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        modal.style.display = 'none';
      }
    });
  }

  render() {
    const modal = document.createElement("div");
    const closeButton = document.createElement("span");
    const modalContent = document.createElement("div");

    modal.id = "modal";
    modal.className = "modal";

    closeButton.className="close";
    closeButton.textContent = "x";
    closeButton.addEventListener("click", () => {
      window.modal.style.display = 'none';
    })

    modalContent.id = "modal-content";
    modalContent.className = "modal-content";

    modal.appendChild(closeButton);
    modal.appendChild(modalContent);

    return modal;
  }
}

module.exports = Modal;
