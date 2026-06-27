// ====================================
// Royal Study Official
// Premium JavaScript
// ====================================

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Counter Animation
const counters = document.querySelectorAll(".stat-card h2");

const animateCounters = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText.replace(/\D/g, ""));
        let count = 0;

        const speed = Math.max(10, Math.floor(target / 100));

        const update = () => {

            if (count < target) {

                count += speed;

                if (count > target) count = target;

                if (counter.innerText.includes("%")) {
                    counter.innerText = count + "%";
                } else if (counter.innerText.includes("K")) {
                    counter.innerText = count + "K+";
                } else {
                    counter.innerText = count + "+";
                }

                requestAnimationFrame(update);

            }

        };

        update();

    });

};

animateCounters();

// Reveal Animation
const revealItems = document.querySelectorAll(
".feature-card,.review-card,.stat-card,.update-box,.cta"
);

const reveal = () => {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

};

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s";

});

window.addEventListener("scroll", reveal);
reveal();

// Button Hover Effect
document.querySelectorAll(".gold-btn,.join-btn,.outline-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// Current Year
const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML=`© ${new Date().getFullYear()} Royal Study Official. All Rights Reserved.`;

}

console.log("Royal Study Official Loaded Successfully");