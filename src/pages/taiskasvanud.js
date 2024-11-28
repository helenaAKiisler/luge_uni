//soovituste slaidide koodipõhi:https://youtu.be/749ta0nvj8s?si=HDEuLijWbn9plrot
const  slides = document.querySelectorAll(".slide img");
let slideIndex = 0;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }
    
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove("displaySlide");
        if (i == slideIndex) slide.classList.add("displaySlide")
    });
}
function eelmineslide(){
    slideIndex--;
    showSlide(slideIndex);
}
function jargmineslide(){
    slideIndex++;
    showSlide(slideIndex);
}