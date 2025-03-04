document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.background = "#fff";
            nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            nav.style.padding = "10px 50px";
        } else {
            nav.style.background = "transparent";
            nav.style.boxShadow = "none";
            nav.style.padding = "15px 50px";
        }
    });
});