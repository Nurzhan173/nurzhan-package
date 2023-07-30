class Modal {
  constructor() {
    function closeModal() {
      modal.style.display = 'none';
    }

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
    const cross = document.createElement("span");
    const modalContent = document.createElement("div");

    modal.id = "modal";
    modal.className = "modal";

    cross.className="close";
    cross.textContent = "x";

    modalContent.id = "modal-content";
    modalContent.className = "modal-content";

    modal.appendChild(cross);
    modal.appendChild(modalContent);

    return modal;
  }
}

module.exports = Modal;
