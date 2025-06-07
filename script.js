// Generate confetti particles
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#f4d03f', '#ff8c42', '#e74c3c', '#3498db', '#2ecc71'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(particle);
    }
}

// Add hover effects to interactive elements
function addInteractivity() {
    const promoBadge = document.querySelector('.promo-badge');
    const ctaButton = document.querySelector('.cta-button');
    
    // Add click effect to promo badge
    promoBadge.addEventListener('click', function() {
        this.style.transform = 'rotate(0deg) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'rotate(12deg) scale(1)';
        }, 200);
    });
    
    // Add ripple effect to CTA button
    ctaButton.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Add floating animation to balloons with random delays
function animateBalloons() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = (index * 0.5) + 's';
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createConfetti();
    addInteractivity();
    animateBalloons();
});

// Add some dynamic effects
setInterval(() => {
    const confettiParticles = document.querySelectorAll('.confetti-particle');
    confettiParticles.forEach(particle => {
        if (Math.random() > 0.7) {
            particle.style.opacity = Math.random();
        }
    });
}, 2000);