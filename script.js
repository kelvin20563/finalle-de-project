
// Collapsible FAQ functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Customer Reviews Carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.reviews-track');
    const cards = document.querySelectorAll('.review-card');
    const dotsContainer = document.querySelector('.review-dots');
    const prevBtn = document.querySelector('.review-prev');
    const nextBtn = document.querySelector('.review-next');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('review-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.review-dot');
    
    // Update carousel position
    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth;
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex >= cardCount) currentIndex = 0;
        if (currentIndex < 0) currentIndex = cardCount - 1;
        updateCarousel();
    }
    
    // Navigation
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= cardCount) currentIndex = 0;
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = cardCount - 1;
        updateCarousel();
    });
    
    // Auto-advance
    let autoSlide = setInterval(() => {
        currentIndex++;
        if (currentIndex >= cardCount) currentIndex = 0;
        updateCarousel();
    }, 5000);
    
    // Pause auto-advance on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            currentIndex++;
            if (currentIndex >= cardCount) currentIndex = 0;
            updateCarousel();
        }, 5000);
    });
    
    // Responsive adjustments
    window.addEventListener('resize', updateCarousel);
});
