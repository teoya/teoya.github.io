const hamburgerIcon = document.getElementById("hamburger-icon");  
const headerNav = document.getElementById("header-nav"); 
const logoNav = document.getElementById("logo-nav"); 

hamburgerIcon.addEventListener("click", () => {
    headerNav.classList.toggle("active"); 
});

logoNav.addEventListener("click", () => {
    window.location.href = "index.html";
})