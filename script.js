/* =========================
   MENÚ HAMBURGUESA
========================= */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuToggle.textContent = "✖";
    }else{
        menuToggle.textContent = "☰";
    }

});


/* =========================
   BANNER AUTOMÁTICO
========================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active-dot");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active-dot");

}

setInterval(changeSlide, 5000);