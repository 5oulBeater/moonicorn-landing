document.addEventListener('DOMContentLoaded', function() {
    // Copy contract address to clipboard
    const copyButton = document.getElementById('copyAddress');
    const contractAddress = document.getElementById('contractAddress');
    
    if (copyButton && contractAddress) {
        copyButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a temporary textarea to copy from
            const textarea = document.createElement('textarea');
            textarea.value = contractAddress.textContent;
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                // Copy the text
                document.execCommand('copy');
                
                // Change button text temporarily
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                copyButton.style.backgroundColor = '#4CAF50';
                
                // Revert button text after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.backgroundColor = '';
                }, 2000);
                
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            
            // Clean up
            document.body.removeChild(textarea);
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.tokenomics-item, .about, .tokenomics');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    document.querySelectorAll('.tokenomics-item, .about, .tokenomics').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add floating particles effect
    const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.left = `${posX}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;
        
        // Random color from gradient
        const colors = ['#ff6bff', '#00f7ff', '#a855f7'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000);
    };
    
    // Create particles at regular intervals
    setInterval(createParticle, 300);
});
