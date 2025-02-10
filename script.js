// Moving 'No' button on click
document.getElementById("noBtn").addEventListener("click", function() {
    var noBtn = document.getElementById("noBtn");
    var maxWidth = window.innerWidth - noBtn.offsetWidth;
    var maxHeight = window.innerHeight - noBtn.offsetHeight;

    var randomX = Math.random() * maxWidth;
    var randomY = Math.random() * maxHeight;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Wait for the 'No' button click before moving to second page
    setTimeout(function() {
        // Hide the first page
        document.getElementById("sorryPage").style.display = "none";
        
        // Show the second page
        document.getElementById("secondPage").style.display = "flex";
    }, 500); // Delay for the button to move around before switching to the second page
});

// Show cat GIF and "Thanks" message when 'Yes' is clicked on second page
document.getElementById("yesSecondPage").addEventListener("click", function() {
    var catGifPopup = document.getElementById("catGifPopup");
    catGifPopup.style.display = "flex";
});
