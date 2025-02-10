// script.js

// Handle the 'Yes' button click (show the second page)
document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('sorryPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
});

// Handle the 'No' button click (make it move around)
document.getElementById('noBtn').addEventListener('click', function() {
    moveButton();
});

// Function to move the "No" button randomly around the screen
function moveButton() {
    const btn = document.getElementById('noBtn');
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
}
