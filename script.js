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
  
  // Add animations on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
  
      if (elementPosition < screenPosition) {
        element.classList.add('animate__fadeIn');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);