// Function to open the modal and display the image
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var img = modal.querySelector('.modal-content');
    
    // Set the modal to visible
    modal.style.display = 'block';
    
    // Set the src of the image inside the modal to be the full-size image
    img.src = "img/Info.png"; // Full-size image path
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
}
