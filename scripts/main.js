// SIDEBAR
const sidebar = document.querySelector(".sidebar");
const show_sidebar = document.getElementById("show_sidebar");
const close_sidebar = document.getElementById("close_sidebar");

show_sidebar.addEventListener("click", function () {
    sidebar.classList.add("active");
})

close_sidebar.addEventListener("click", function () {
    sidebar.classList.remove("active");
})

// TOPBAR
const menu = document.querySelector(".menu");
const open = document.getElementById("open");
const close = document.getElementById("close");
const topNavLi = document.querySelectorAll(".top-nav-li")

open.addEventListener("click", function () {
    menu.classList.add("show_menu");
    open.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click", function () {
    menu.classList.remove("show_menu");
    open.style.display = "block";
    close.style.display = "none";
})

topNavLi.forEach(li => {
    li.addEventListener("click", function () {
        menu.classList.remove("show_menu");
        open.style.display = "block";
        close.style.display = "none";
    })
})

// PLAN SCRIPT
const plans_list = document.querySelectorAll(".plans_title ul li");
const plans_container = document.querySelectorAll(".plans_container");

plans_container.forEach((container) => {
    container.style.display = "none";
})

plans_container[0].style.display = "flex";

plans_list.forEach((list, index) => {
    list.addEventListener("click", () => {
        plans_container.forEach((container) => {
            container.style.display = "none";
        })
        plans_container[index].style.display = "flex";
    })
})





