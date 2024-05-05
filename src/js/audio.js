let audio = document.getElementById("my-audio");

    // Get the toggle button element
    let toggleButton = document.getElementById("volume");

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