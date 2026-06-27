// Royal Study Official

document.addEventListener("DOMContentLoaded", () => {

    // Navbar Shadow
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");

        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(212,175,55,.35)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // Button Animation
    document.querySelectorAll(".gold-btn,.btn").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });

});