// Select the image element
const img = document.getElementById('Mainphoto');

// Change to the illustrated version on hover
img.addEventListener('mouseover', () => {
    img.src = 'hover_image2.png'; 
});

// Change back to the original when the mouse leaves
img.addEventListener('mouseout', () => {
    img.src = 'hover_image1.png';
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    // If the form is not valid (fields are empty)
    if (!contactForm.checkValidity()) {
        event.preventDefault(); // Stop the form from submitting
        event.stopPropagation();
    } else {
        // If valid, you can do something here (like an alert)
        alert("Thanks for visiting! Your message was sent.");
    }   

    // Add Bootstrap's validation styles
    contactForm.classList.add('was-validated');
}, false);

const likeBtn1 = document.getElementById('likeBtn1');

likeBtn1.addEventListener('click', () => {
    // Check if it's already liked
    if (!likeBtn1.classList.contains('liked')) {
        likeBtn1.innerText = "❤️ Liked";
        likeBtn1.classList.add('liked');
    } else {
        likeBtn1.innerText = "♡ Like";
        likeBtn1.classList.remove('liked');
    }
});
const likeBtn2 = document.getElementById('likeBtn2');

likeBtn2.addEventListener('click', () => {
    // Check if it's already liked
    if (!likeBtn2.classList.contains('liked')) {
        likeBtn2.innerText = "❤️ Liked";
        likeBtn2.classList.add('liked');
    } else {
        likeBtn2.innerText = "♡ Like";
        likeBtn2.classList.remove('liked');
    }
});const likeBtn3 = document.getElementById('likeBtn3');

likeBtn3.addEventListener('click', () => {
    // Check if it's already liked
    if (!likeBtn3.classList.contains('liked')) {
        likeBtn3.innerText = "❤️ Liked";
        likeBtn3.classList.add('liked');
    } else {
        likeBtn3.innerText = "♡ Like";
        likeBtn3.classList.remove('liked');
    }
});