// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Show the newsletter popup after 5 seconds
    setTimeout(function () {
        document.getElementById('newsletter-popup').style.display = 'block';
    }, 5000); // 5000 milliseconds = 5 seconds

    // Close the popup when the 'close' button is clicked
    document.getElementById('close-popup').addEventListener('click', function () {
        document.getElementById('newsletter-popup').style.display = 'none';
    });

    // Optionally, close the popup when clicking outside of it
    window.addEventListener('click', function (event) {
        const popup = document.getElementById('newsletter-popup');
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
