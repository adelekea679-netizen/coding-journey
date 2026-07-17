"use strict";

// ==========================================
// PORTFOLIO LOADED
// ==========================================

console.log("Abraham Adeleke Portfolio Loaded Successfully!");
// ==========================================
// HEADER EFFECT ON SCROLL
// ==========================================

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =

            "0 12px 25px rgba(0,0,0,.12)";

        header.style.background =

            "rgba(255,255,255,.98)";

    }

    else{

        header.style.boxShadow =

            "0 10px 25px rgba(0,0,0,.08)";

        header.style.background =

            "rgba(255,255,255,.95)";

    }

});
// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(

    ".card, .portfolio-card, .tool, .skill-card"

);

function revealOnScroll(){

    revealElements.forEach(element => {

        const position =

            element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

// ================================
// FADE UP ANIMATION
// ================================

const fadeItems = document.querySelectorAll("section, .card, .portfolio-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fadeItems.forEach(item=>{

item.classList.add("fade-up");

observer.observe(item);

});

// ================================
// ANIMATE SKILL BARS
// ================================

const bars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar = entry.target;

bar.style.width = bar.dataset.width;

}

});

});

bars.forEach(bar=>{

skillObserver.observe(bar);

});

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition =

        "all .6s ease";

});

window.addEventListener(

    "scroll",

    revealOnScroll

);

revealOnScroll();
