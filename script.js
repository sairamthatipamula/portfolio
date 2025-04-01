// Function to toggle certificate content
function toggleCertificate(id) {
  const certificateItem = document.querySelector(`#certificate-content-${id}`).parentElement;
  certificateItem.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Enhanced animations on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate__animated:not(.animate__fadeIn)');
  elements.forEach((element, index) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      // Add staggered delay classes based on element position
      const delayClass = `delay-${(index % 4) + 1}`;
      element.classList.add(delayClass);
      
      // Determine animation type based on element classes
      if (element.classList.contains('project-item') || element.classList.contains('training-item')) {
        element.classList.add('animate__scaleIn');
      } else if (element.classList.contains('animate__slideInLeft')) {
        element.classList.add('animate__slideInLeft');
      } else if (element.classList.contains('animate__slideInRight')) {
        element.classList.add('animate__slideInRight');
      } else {
        element.classList.add('animate__fadeIn');
      }
    }
  });
};

// Add subtle parallax effect to header
const parallaxHeader = () => {
  const header = document.querySelector('header');
  if (header) {
    const scrollPosition = window.pageYOffset;
    header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  }
};

// Initialize animations
window.addEventListener('scroll', () => {
  animateOnScroll();
  parallaxHeader();
});

// Run animations on page load
window.addEventListener('load', () => {
  animateOnScroll();
  
  // Add bounce animation to download button
  const downloadBtn = document.querySelector('.download-btn');
  if (downloadBtn) {
    downloadBtn.classList.add('animate__bounce');
  }
});
