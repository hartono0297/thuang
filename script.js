function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

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
        closeModalModal(modal, modalImage, body);
    });

    // Close modal when clicking outside of the image
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalModal(modal, modalImage, body);
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
    function closeModalModal(modal, modalImage, body) {
        modal.style.display = "none";
        modalImage.classList.remove('zoom'); // Remove zoom class on close
        modalImage.classList.remove('scrollable'); // Remove scrollable class
        body.classList.remove('modal-open'); // Re-enable background scroll
    }
});


