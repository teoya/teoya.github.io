const hamburgerIcon = document.getElementById("hamburger-icon");  
const headerNav = document.getElementById("header-nav"); 
const logoNav = document.getElementById("logo-nav"); 
const transitionElement = document.querySelector('.transition-element');

hamburgerIcon.addEventListener("click", () => {
    headerNav.classList.toggle("active"); 
});

logoNav.addEventListener("click", () => {
    transitionElement.classList.add('is-active');

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
})

addEventListener("resize", () => {
    headerNav.classList.remove("active"); 
});