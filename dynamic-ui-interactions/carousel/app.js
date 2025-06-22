let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetTimer();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetTimer();
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.className = dot.className.replace(' active', ''));

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";
    
    slideTimer = setTimeout(() => {
        showSlides(slideIndex += 1);
    }, 5000);
}

function resetTimer() {
    clearTimeout(slideTimer);
}