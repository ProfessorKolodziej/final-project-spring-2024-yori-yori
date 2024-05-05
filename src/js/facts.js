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


document.addEventListener("DOMContentLoaded", function() {
    // Define arrays for different categories of facts
    var facts = {
        recommendation: [
        "Tteokbokki (of course!)",
        "Bibimbap",
        "Samgyeopsal (pork belly AKA Kbbq)",
        "Chimaek (Korean fried chicken and beer",
        "Soondubu (soft tofu stew)",
        "Jjajangmyeon (Black bean noodles)",
        "Kimchi Stew",
        "Kalguksu (Wheat flour noodle soup)",
        "Seolleongtang (Ox Bone Soup",
        "Galbi (Marinated ribs)",
        "Naengmyeon (Cold buckwheat noodles"
        ],
        food: [
        "Miyeok Guk (미역국) is a seaweed soup that is traditionally eaten to celebrate birthdays.",
        "Korea is one of the world's largest consumers of garlic",
        "Gochujang (고추장) is a red pepper paste used in many Korean dishes, like bibimbap and tteokbokki.",
        "Traditional meals are nutritously and colorfully balanced, as food is regarded with a lot of medicinal value.",
        "The main components of Korean cuisine are rice, vegetables, seafood, and meats.",
        "Most traditional meals are served with a variety of side dishes—AKA banchan (반찬)."
        ],
        culture: [
        "Hanbok (한복) is the Korean traditional dress made with smooth and flowing lines.",
        "Chuseok is the Korean mid-autumn harvest festival, and is celebrated for 3 days on the 15th day of the 8th month of the lunar calendar.",
        "Soju is Korea's national drink and is also the world's most popular alcoholic beverage.",
        "Food is one of the biggest aspects of Korean culture. So much so that asking 'Have you eaten yet?' is almost synonymous with asking 'How are you?'",
        "Blood type is seen to be a major indicator of someone's personality.",
        "K-Pop is a mix of styles from pop, R&B, hip-hop, electronic, and more. Some popular bands include Exo, Seventeen, Girls Generation, NewJeans, and Stray Kids."
        ],
        history: [
        "Wang Kon unified the country under the name Koryo in 936  A.D.",
        "Japan occupied and controlled Korea from 1910 to 1945 through WW1 & WW2",
        "The peninsula is divided at the 38th Parallel, with the Republic of Korea in the south and the Democratic People's Republic of Korea in the north.",
        "With the threat of Soviet forces occupying Korea, the country was divided into a communist north and a democratic south",
        "King Sejong (1418-1450) created Hangul, the Korean alphabet, among other great legacies",
        "The Great Admiral Yi Sun Shin koreated the Geobukseon warship, aka 'Turtle Ship', were used from the early 15th century up until the 19th century.",
        "Taejo was the founder and first monarch of the Joseon dynasty",
        "Hwarang, which translates to Flowering Knights, were the elite noble warriers selected from the royal court."
        ]
    };
    
    // Function to generate a random fact from a specific category
    function generateFact(category) {
        var randomIndex = Math.floor(Math.random() * facts[category].length);
        return facts[category][randomIndex];
    }
    
    // Function to display the fact
    function displayFact(event) {
        var category = event.target.dataset.category;
        var factDisplayId = category + 'FactDisplay';
        var factDisplay = document.getElementById(factDisplayId);
        factDisplay.textContent = generateFact(category);
    }
    
    // Add event listeners to the buttons
    var factButtons = document.querySelectorAll('.factBtn');
    factButtons.forEach(function(button) {
        button.addEventListener('click', displayFact);
    });
});