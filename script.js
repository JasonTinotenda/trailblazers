document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function() {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        toggleButton.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });     
});

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
let autoplayInterval;

// Show the current slide
function showSlide(index) {
  const offset = -index * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Start autoplay
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Stop autoplay
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Pause autoplay on hover and resume on mouse leave
slider.addEventListener('mouseenter', stopAutoplay);
slider.addEventListener('mouseleave', startAutoplay);

// Swipe gesture support
let startX;
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  if (!startX) return;

  const moveX = e.touches[0].clientX;
  const diffX = startX - moveX;

  if (diffX > 50) {
    nextSlide();
    startX = null;
  } else if (diffX < -50) {
    prevSlide();
    startX = null;
  }
});

// Initialize slider
showSlide(currentIndex);
startAutoplay();
 