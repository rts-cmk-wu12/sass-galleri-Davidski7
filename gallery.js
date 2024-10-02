
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("modal-close");
const galleryImages = document.querySelectorAll(".gallery__image"); 
const modalOverlay = document.getElementById("modal-overlay");


galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex"; 
        modalContent.src = image.src; 
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


modalOverlay.addEventListener("click", () => {
    modal.style.display = "none"; 
});




  
  
  
 
    