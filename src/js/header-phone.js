(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-header-open]"),
        closeModalBtn: document.querySelector("[data-modal-header-close]"),
        modal: document.querySelector("[data-header-modal]"),
    };

    refs.openModalBtn.addEventListener("click", () => toggleModal(refs.modal));
    refs.closeModalBtn.addEventListener("click", () => toggleModal(refs.modal));

    function toggleModal(modal) {
        modal.classList.toggle("is-hidden");
    }
})();
