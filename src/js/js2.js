var audio = document.getElementById("my-audio");

    // Get the toggle button element
    var toggleButton = document.getElementById("volume");

    // Function to toggle mute/unmute
    function toggleMute() {
        if (audio.muted) {
            audio.muted = false;
            toggleButton.textContent = "MUTE";

        } else {
            audio.muted = true;
            toggleButton.textContent = "UNMUTE";
        }
    }

    // Add click event listener to the toggle button
    toggleButton.addEventListener("click", toggleMute);


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-button').addEventListener('click', downloadImage);
    });

function downloadImage() {
    var link = document.createElement('a');
    link.href = 'src/images/finished-pot1.png'; // Replace with actual image URL
    link.download = 'finished-pot1.png'; // Optional: specify download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }


function usingButton() {
    console.log('it works');
    const x = document.getElementById("show-this");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }

    var y = document.getElementById("hide-this");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}