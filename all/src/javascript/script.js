const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length / 2;  // Abbiamo duplicato le immagini
const imageWidth = 100;  // Percentuale della larghezza di ogni immagine

let currentIndex = 0;

function updateCarousel() {
    if (currentIndex >= totalImages) {
        carouselImages.style.transition = 'none';  // Rimuove temporaneamente la transizione
        carouselImages.style.transform = `translateX(0)`;  // Torna alla prima immagine
        currentIndex = 0;
        setTimeout(() => {
            carouselImages.style.transition = 'transform 1s ease-in-out';
            currentIndex++;
            carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
        }, 20);
    } else {
        carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
    }
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
        carouselImages.style.transition = 'none';
        carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}%)`;
        setTimeout(() => {
            carouselImages.style.transition = 'transform 1s ease-in-out';
            currentIndex--;
            updateCarousel();
        }, 20);
    } else {
        updateCarousel();
    }
});

// Scorrimento automatico ogni 5 secondi (più lento)
setInterval(() => {
    currentIndex++;
    updateCarousel();
}, 5000);
