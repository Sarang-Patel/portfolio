const expnav = document.getElementById("exp-modal-container");
const expmenu = document.getElementById("exp-menu-group");
const expmodal = document.getElementById("exp-modal-menu-group");

expmenu.addEventListener('click', () => {
    expnav.classList.add("container-show");
    expnav.style.width = "100%";
})

expmodal.addEventListener('click', () => {
    expnav.classList.remove("container-show");
    expnav.style.width = "0%";

})