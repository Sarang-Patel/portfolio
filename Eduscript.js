

const edunav = document.getElementById("edu-modal-container");
const edumenu = document.getElementById("edu-menu-group");
const edumodal = document.getElementById("edu-modal-menu-group")


edumenu.addEventListener('click', () => {
    edunav.classList.add("container-show");
    edunav.style.width = "100%";
})

edumodal.addEventListener('click', () => {
    edunav.classList.remove("container-show");
    edunav.style.width = "0%";

})