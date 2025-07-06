let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    document.getElementById('slide-counter').textContent = `${currentSlide + 1} / ${totalSlides}`;
    // Actualizar barra de progreso
    const progress = ((currentSlide) / (totalSlides - 1)) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Navegación por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
    } else if (e.key === 'Home') {
        e.preventDefault();
        showSlide(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        showSlide(totalSlides - 1);
    }
});

// Inicializar contador y barra de progreso
const progressBar = document.getElementById('progress-bar');
document.getElementById('slide-counter').textContent = `1 / ${totalSlides}`;
progressBar.style.width = `0%`;

// Efectos de hover mejorados
document.querySelectorAll('.content-card, .financial-card, .investment-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animación de métricas al cargar
function animateMetrics() {
    const metrics = document.querySelectorAll('.visitor-metric, .percentage');
    metrics.forEach((metric, index) => {
        metric.style.opacity = '0';
        metric.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            metric.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            metric.style.opacity = '1';
            metric.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Ejecutar animaciones al cargar
window.addEventListener('load', animateMetrics);