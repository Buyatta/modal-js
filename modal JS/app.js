const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal-btn");



closeBtn.addEventListener('click', function () {
   
    modalOverlay.classList.remove('open-modal')
})
modal.addEventListener("click", function () {
    modalOverlay.classList.add("open-modal")
});
