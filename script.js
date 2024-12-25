const nav = document.getElementById("modal-container");
const menu = document.getElementById("menu-group");
const modal = document.getElementById("modal-menu-group")


menu.addEventListener('click', () => {
    nav.classList.add("container-show");
    nav.style.width = "100%";
})

modal.addEventListener('click', () => {
    nav.classList.remove("container-show");
    nav.style.width = "0%";

})

