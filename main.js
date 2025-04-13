const menuBtn = document.getElementById("menu-btn");
const navLinkes = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinkes.classList.toggle("open")

    const isOpen = navLinkes.classList.contains("open")
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
    );
})

navLinkes.addEventListener("click", (e) => {
    navLinkes.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-img img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header-btns", {
    ...scrollRevealOption,
    delay: 2000,
});