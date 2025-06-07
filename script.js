      
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// 


document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.testimonial-track');
            const cards = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.dot');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            
            let currentIndex = 0;
            let cardWidth = cards[0].offsetWidth;
            let slidesToShow = 1;
            
            
            function updateSlidesToShow() {
                if (window.innerWidth >= 1024) {
                    slidesToShow = 3;
                } else if (window.innerWidth >= 768) {
                    slidesToShow = 2;
                } else {
                    slidesToShow = 1;
                }
                cardWidth = cards[0].offsetWidth;
                goToSlide(currentIndex);
            }
            
            // Initialize
            updateSlidesToShow();
            
            // Go to specific slide
            function goToSlide(index) {
                // Ensure index stays within bounds
                if (index < 0) {
                    index = cards.length - slidesToShow;
                } else if (index > cards.length - slidesToShow) {
                    index = 0;
                }
                
                currentIndex = index;
                const offset = -currentIndex * cardWidth;
                track.style.transform = `translateX(${offset}px)`;
                
                // Update dots
                dots.forEach(dot => dot.classList.remove('active'));
                dots[currentIndex].classList.add('active');
            }
            
            // Next slide
            function nextSlide() {
                goToSlide(currentIndex + 1);
            }
            
            // Previous slide
            function prevSlide() {
                goToSlide(currentIndex - 1);
            }
            
            // Event listeners
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Dot navigation
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    goToSlide(index);
                });
            });
            
            // Auto slide
            let autoSlide = setInterval(nextSlide, 5000);
            
            // Pause on hover
            const slider = document.querySelector('.testimonial-slider');
            slider.addEventListener('mouseenter', () => {
                clearInterval(autoSlide);
            });
            
            slider.addEventListener('mouseleave', () => {
                autoSlide = setInterval(nextSlide, 5000);
            });
            
            // Update on window resize
            window.addEventListener('resize', () => {
                updateSlidesToShow();
            });
        });






document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const logoTrack = document.querySelector('.logo-track');
    
    let scrollInterval;
    let isPaused = false;
    
    // Initialize auto-scroll
    function startAutoScroll() {
        scrollInterval = setInterval(() => {
            if (!isPaused) {
                const currentScroll = logoTrack.scrollLeft;
                const maxScroll = logoTrack.scrollWidth - logoTrack.clientWidth;
                
                if (currentScroll >= maxScroll - 10) {
                    logoTrack.scrollLeft = 0;
                } else {
                    logoTrack.scrollLeft += 1;
                }
            }
        }, 20);
    }
    
    // Start auto-scroll on page load
    startAutoScroll();
    
    // Manual navigation
    prevBtn.addEventListener('click', () => {
        logoTrack.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        logoTrack.scrollBy({ left: 200, behavior: 'smooth' });
    });
    
    // Pause/resume functionality
    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseBtn.innerHTML = isPaused ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
        isPaused = true;
        pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
    
    carousel.addEventListener('mouseleave', () => {
        isPaused = false;
        pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    document.querySelector('form').reset();
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
