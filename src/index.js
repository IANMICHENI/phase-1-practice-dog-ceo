console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

    // Challenge 1: Fetch and display dog images
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imgUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imgUrl;
                imgContainer.appendChild(imgElement);
            });
        });

    // Challenge 2: Fetch and display dog breeds
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const breedItem = document.createElement("li");
                breedItem.innerText = breed;
                breedList.appendChild(breedItem);
            });
        });

    // Challenge 3: Change font color on click
    breedList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = getRandomColor(); // Function to generate random color
        }
    });

    // Challenge 4: Filter breeds by selected letter in dropdown
    breedDropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const breedItems = breedList.getElementsByTagName("li");
        Array.from(breedItems).forEach(item => {
            if (item.innerText.startsWith(selectedLetter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
