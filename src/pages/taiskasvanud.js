//soovituste slaidide koodipõhi:https://youtu.be/749ta0nvj8s?si=HDEuLijWbn9plrot

document.addEventListener("DOMContentLoaded", function() {
    const modalIds = ['romantiline', 'krimi', 'ulme', 'tosielu', 'eneseabi', 'oudus'];
    
    modalIds.forEach(modalId => {
        let modal = document.getElementById(modalId);
        let slides = modal.querySelectorAll(".slide img");
        let slideIndex = 0; // Iga modaal saab oma indeksi

        // Alglaadimine (esimesel avamisel kuvab esimese slaidi)
        const initializeSlider = () => {
            slides.forEach(slide => slide.classList.remove("displaySlide"));
            if (slides.length > 0) {
                slides[slideIndex].classList.add("displaySlide");
            }
        };

        // Slaidide kuvamine
        const showSlide = (index) => {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            }

            slides.forEach((slide, i) => {
                slide.classList.remove("displaySlide");
                if (i === slideIndex) slide.classList.add("displaySlide");
            });
        };

        // Eelmine slaid
        const eelmineslide = () => {
            slideIndex--;
            showSlide(slideIndex);
        };

        // Järgmine slaid
        const jargmineslide = () => {
            slideIndex++;
            showSlide(slideIndex);
        };

        // Modaalide avamine
        const openModal = () => {
            modal.style.display = "block"; // Ava modaal
            initializeSlider(); // Alustame slaidi
        };

        // Modaalide sulgemine
        const closeModal = () => {
            modal.style.display = "none"; // Peida modaal
        };

        // Aknast välja minek (rist)
        const closeButton = modal.querySelector(".rist");
        closeButton.addEventListener("click", closeModal);

        // Eelmine ja järgmine nupp
        const previousButton = modal.querySelector(".eelmine");
        const nextButton = modal.querySelector(".jargmine");
        previousButton.addEventListener("click", eelmineslide);
        nextButton.addEventListener("click", jargmineslide);

        // Täiendavad käsitlejad, et saaks modaalide aknaid avada
        const links = document.querySelectorAll(`a[href="#${modalId}"]`);
        links.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault(); // Väldi lehe ümbersuunamist
                openModal();
            });
        });
    });
});
