let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = "-100px"; // hide
    } else {
        nav.style.top = "20px"; // show
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
