// Smooth scroll for the logo when clicked
document.querySelector('.logo a').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const target = document.querySelector(this.getAttribute('href')); // Get the target section (home)
    target.scrollIntoView({
        behavior: 'smooth', // Smooth scroll effect
        block: 'start', // Aligns the top of the target element with the top of the visible area
    });
});
//NAVBAR
function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    const hamburger = document.querySelector('.hamburger');
    
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

  window.addEventListener('scroll', function () {
   
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger'); // Add hamburger for color change on shrink
    const portfolioSection = document.getElementById('services'); // Ensure this is the correct ID    
  

    // Get the top of the portfolio section relative to the document
    const portfolioTop = portfolioSection.offsetTop;

    // Get the current scroll position
    const scrollPosition = window.scrollY;    
    // Add 'shrink' class when the scroll position reaches or passes the portfolio section
    if (scrollPosition >= portfolioTop - window.innerHeight * 0.1) {
        navbar.classList.add('shrink');
        navLinks.classList.add('shrink');
        hamburger.classList.add('shrink'); // Apply shrink class to hamburger to change color
    } else {
        navbar.classList.remove('shrink');
        navLinks.classList.remove('shrink');
        hamburger.classList.remove('shrink'); // Remove shrink class from hamburger
    }
});

//END NAVBAR

// Button left and right for carousel 
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("portfolioContainer");
    const scrollAmount = 1500;

   // Scroll buttons functionality
   document.getElementById("scrollLeft").addEventListener("click", function () {
    const isAtStart = scrollContainer.scrollLeft === 0; // Check if at the start
    if (isAtStart) {
        // Scroll to the end if at the start
        scrollContainer.scrollTo({
            left: scrollContainer.scrollWidth,
            behavior: "smooth"
        });
    } else {
        // Scroll left
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    }
})
document.getElementById("scrollRight").addEventListener("click", function () {
    const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth; // Check if at the end
    if (isAtEnd) {
        // Scroll to the start if at the end
        scrollContainer.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        // Scroll right
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    }
});

   //// Modal functionality
   //const modal = document.getElementById("imageModal");
   //const modalImage = document.getElementById("modalImage");
   //const closeModal = document.getElementById("closeModal");
   //const body = document.body
   //// Open modal on image click
   //document.querySelectorAll('.portfolio-item').forEach(item => {
   //    item.addEventListener('click', function () {
   //        const largeImgUrl = this.dataset.largeImg;
   //        modalImage.src = largeImgUrl;
   //        modal.style.display = "flex"; // Use flex to center the modal
   //        body.classList.add('modal-open'); // Disable background scroll
   //    });
   //})
   //// Close modal
   //closeModal.addEventListener('click', function () {
   //    closeModalHandler(modal, modalImage, body);
   //})
   //// Close modal when clicking outside of the image
   //modal.addEventListener('click', function (event) {
   //    if (event.target === modal) {
   //        closeModalHandler(modal, modalImage, body);
   //    }
   //})
   //// Zoom functionality
   //modalImage.addEventListener('click', function () {
   //    this.classList.toggle('zoom'); // Toggle zoom class
   //    this.classList.toggle('scrollable'); // Enable scrolling when zoome
   //    // Reset image position on zoom
   //    if (this.classList.contains('zoom')) {
   //        this.style.transformOrigin = 'center center'; // Ensure the zoom is centered
   //        this.scrollIntoView({ behavior: "smooth", block: "center" }); // Center the zoomed image in the modal
   //    }
   //})
  //// Function to close modal
   // function closeModalHandler(modal, modalImage, body) {
   //     modal.style.display = "none";
   //     modalImage.classList.remove('zoom'); // Remove zoom class on close
   //     modalImage.classList.remove('scrollable'); // Remove scrollable class
   //     body.classList.remove('modal-open'); // Re-enable background scroll
   // }

  

});
// END Button left and right for carousel 

 // Open modal and show gallery when image is clicked
 const carouselItems = document.querySelectorAll('.carousel-item');
 const modal = document.getElementById('image-modal');
 const closeBtn = document.querySelector('.close');
 const modalGallery = document.getElementById('modal-gallery');
 const zoomedModal = document.getElementById('zoomed-modal');
 const zoomedImage = document.getElementById('zoomed-image');
 
 // Image data for modal galleries
 const galleries = {
     1: ["Images/gambar/img1/img1.1.jpg", "Images/gambar/img1/img1.2.jpg", "Images/gambar/img1/img1.3.jpg", "Images/gambar/img1/img1.4.jpg", "Images/gambar/img1/img1.5.jpg", "Images/gambar/img1/img1.6.jpg","Images/gambar/img1/img1.7.jpg"],
     2: ["Images/coming_soon.png", "Images/coming_soon.png","Images/coming_soon.png","Images/coming_soon.png","Images/coming_soon.png","Images/coming_soon.png"],
     3: ["Images/coming_soon.png", "Images/coming_soon.png","Images/coming_soon.png","Images/coming_soon.png","Images/coming_soon.png","Images/coming_soon.png"]
 };
 
 // Open modal and show gallery when image is clicked
 carouselItems.forEach(item => {
     item.addEventListener('click', function() {
         const id = this.getAttribute('data-id');
         showGallery(id);
     });
 });
 
 function showGallery(id) {
     // Clear the current gallery
     modalGallery.innerHTML = '';
     
     // Get the gallery images for the clicked image
     const images = galleries[id];
     
     images.forEach(imgSrc => {
         const imgElement = document.createElement('img');
         imgElement.src = imgSrc;
         imgElement.alt = 'Gallery Image';
         modalGallery.appendChild(imgElement);
         
         // Add click event to zoom in
         imgElement.addEventListener('click', function() {
             zoomImage(imgElement.src);
         });
     });
     
     // Show the modal
     modal.style.display = 'flex';
   
 }

 // Zoom functionality when an image is clicked
// Function to zoom in the image and show the modal
// Hide the zoomed modal on page load
window.onload = function() {
    const zoomedModal = document.getElementById('zoomed-modal');
    zoomedModal.style.display = 'none';  // Ensure modal is hidden when the page loads
}

// Function to zoom in the image and show the modal
function zoomImage(src) {
    const zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.src = src;
    
    // Display the zoomed image modal
    const zoomedModal = document.getElementById('zoomed-modal');
    zoomedModal.style.display = 'flex';  // Show the modal when an image is clicked
}

// Close the zoomed image modal when clicked
document.getElementById('zoomed-modal').addEventListener('click', function() {
    this.style.display = 'none';  // Hide the modal when clicked
});


 // Close the zoomed modal when clicked
 zoomedModal.addEventListener('click', () => {
     zoomedModal.style.display = 'none';
 });
 
 // Close the modal
 closeBtn.addEventListener('click', () => {
     modal.style.display = 'none';
 });
 
 // Close the modal if clicked outside of the content
 window.addEventListener('click', (event) => {
     if (event.target === modal) {
         modal.style.display = 'none';
     }
 });


const track = document.getElementById("portfolioContainerInner");

// Set initial percentage if it's not set in HTML
if (!track.dataset.percentage) {
    track.dataset.percentage = "0";
}

// Track mouse down position for desktop
window.onmousedown = (e) => {
  if (window.innerWidth < 768) return; // Disable on mobile
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = () => {
  if (window.innerWidth < 768) return; // Disable on mobile
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage || "0";
};

window.onmousemove = e => {
  if (window.innerWidth < 768 || track.dataset.mouseDownAt === "0") return; // Disable on mobile

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  // Log values for debugging
  //console.log("Mouse Down At:", track.dataset.mouseDownAt);
  //console.log("Prev Percentage:", track.dataset.prevPercentage);
  //console.log("Next Percentage Unconstrained:", nextPercentageUnconstrained);
  //console.log("Next Percentage:", nextPercentage);

  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -0%)`
  }, { duration: 1200, fill: "forwards" });

  for(const image of track.getElementsByClassName("portfolio-item")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
};

//// Touch event handling for mobile
//let touchStartX = 0;
//
//window.addEventListener('touchstart', (e) => {
//  if (window.innerWidth >= 768) return; // Only handle touch on mobile
//
//  touchStartX = e.touches[0].clientX;
//  track.dataset.prevPercentage = track.dataset.percentage || "0"; // Store previous percentage
//});
//
//window.addEventListener('touchmove', (e) => {
//  if (window.innerWidth >= 768) return; // Only handle touch on mobile
//
//  const touchDelta = touchStartX - e.touches[0].clientX;
//  const maxDelta = window.innerWidth / 2;
//
//  const percentage = (touchDelta / maxDelta) * -100;
//  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
//  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
//
//  // Update dataset percentage
//  track.dataset.percentage = nextPercentage;
//
//  track.animate({
//    transform: `translate(${nextPercentage}%, -50%)`
//  }, { duration: 1200, fill: "forwards" });
//
//
//});



