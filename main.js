// Exemplo: Mensagem no console ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!");
});

// Remova ou comente este bloco
/*
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 3000);
}

startCarousel();
*/

// Evento para o botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Vai para a próxima imagem
    updateCarousel();
});

// Evento para o botão "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Volta para a imagem anterior
    updateCarousel();
});