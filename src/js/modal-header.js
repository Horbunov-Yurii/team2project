(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-header-open]"),
      closeModalBtn: document.querySelector("[modal-header-close]"),
      modal: document.querySelector("[header-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();