function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
        // Toggle the class for showing the nav links
        menu.classList.toggle('open');
     // Toggle the class for changing the hamburger to an X
     hamburger.classList.toggle('open');
}
// Close the menu when a nav link is clicked
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.navbar ul');
        const hamburger = document.querySelector('.hamburger');

        // Remove 'open' class to close the menu and reset the hamburger icon
        menu.classList.remove('open');
        hamburger.classList.remove('open');
    });
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    // Add 'shrink' class when scrolling down more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
        navLinks.classList.add('shrink'); // Add class to shrink nav links
    } else {
        navbar.classList.remove('shrink');
        navLinks.classList.remove('shrink'); // Remove class to restore nav links
    }
});

  
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("portfolioContainer");
    const scrollAmount = 300;

    // Scroll buttons functionality
    document.getElementById("scrollLeft").addEventListener("click", function () {
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    document.getElementById("scrollRight").addEventListener("click", function () {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    // Modal functionality
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");
    const body = document.body;

    // Open modal on image click
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function () {
            const largeImgUrl = this.dataset.largeImg;
            modalImage.src = largeImgUrl;
            modal.style.display = "flex"; // Use flex to center the modal
            body.classList.add('modal-open'); // Disable background scroll
        });
    });

    // Close modal
    closeModal.addEventListener('click', function () {
        closeModalHandler(modal, modalImage, body);
    });

    // Close modal when clicking outside of the image
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalHandler(modal, modalImage, body);
        }
    });

    // Zoom functionality
    modalImage.addEventListener('click', function () {
        this.classList.toggle('zoom'); // Toggle zoom class
        this.classList.toggle('scrollable'); // Enable scrolling when zoomed

        // Reset image position on zoom
        if (this.classList.contains('zoom')) {
            this.style.transformOrigin = 'center center'; // Ensure the zoom is centered
            this.scrollIntoView({ behavior: "smooth", block: "center" }); // Center the zoomed image in the modal
        }
    });

    // Function to close modal
    function closeModalHandler(modal, modalImage, body) {
        modal.style.display = "none";
        modalImage.classList.remove('zoom'); // Remove zoom class on close
        modalImage.classList.remove('scrollable'); // Remove scrollable class
        body.classList.remove('modal-open'); // Re-enable background scroll
    }
});
