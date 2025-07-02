const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Auto-sliding Projects
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
const slideCount = slides.length;
const slideWidth = slides[0].clientWidth;

// Set initial position
slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

// Auto slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlider();
    updateIndicators();
    resetInterval();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
    updateIndicators();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
    updateIndicators();
}

function updateSlider() {
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Pause on hover
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
    resetInterval();
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();