// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


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
    
// Keeping Score!
const buttons = document.querySelectorAll('.button');
const scoreDisplay = document.getElementById('score');

let score = 0;
let sequenceIndex = 0;
let sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let clickedButtons = new Set();

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonNumber = parseInt(button.id.slice(-1));
    if (buttonNumber === sequence[sequenceIndex]) {
      score++;
      scoreDisplay.textContent = score;
      sequenceIndex++
      clickedButtons.add(buttonNumber);
      button.classList.add('clicked');
      if (sequenceIndex === sequence.length - 1) {
        let text = 'NEXT &rarr;';
        let link = '<a href="finish.html" class="finish">' + text + '</a>';
        document.getElementById("title").innerHTML = "Your final score: " + score;
        document.getElementById("one").innerHTML = link;
      }
    } else {
      score--;
      scoreDisplay.textContent = score;
    }

    if (buttonNumber === 1) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("broth");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "block";
            }
            
            document.getElementById("one").innerHTML = 'the spice';
        }
    }

    if (buttonNumber === 2) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("spice");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the rice cakes';
        }
    }

    if (buttonNumber === 3) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("dduk");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the fish cakes';
        }
    }

    if (buttonNumber === 4) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("deng");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the onion';
        }
    }

    if (buttonNumber === 5) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("onion");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the sesame oil';
        }
    }

    if (buttonNumber === 6) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("oil");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the sesame seeds';
        }
    }

    if (buttonNumber === 7) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("seeds");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the scallions';
        }
    }

    if (buttonNumber === 8) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("pa");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display= "block";
            }
            
            document.getElementById("one").innerHTML = 'the egg!';
        }
    }

    if (buttonNumber === 9) {
        console.log('Button', buttonNumber, 'clicked');
        console.log('Index:', sequenceIndex);
        console.log('Sequence:', sequence);
        console.log('combined:', sequence[sequenceIndex]);
        console.log('Button Number:', buttonNumber);
        if (buttonNumber !== (sequence[sequenceIndex] - 1)) {
            console.log('Button clicked out of order');
            button.disabled = true;
            setTimeout(() => {
                console.log('Re-enabling after 1 second');
                button.disabled = false;
            }, 1000)
        } else {
            console.log('it works');
            let x = document.getElementById("egg");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display= "block";
            }
        }
    }
  });
});