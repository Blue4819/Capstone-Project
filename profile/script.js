document.addEventListener('DOMContentLoaded', () => {
    // Hide related options initially
    const relatedOptions = document.getElementById('relatedOptions');
    relatedOptions.style.display = 'none';

    function handleInterestButtonClick(button) {
        if (selectedButtons.includes(button)) {
            // If button is already selected, remove it from the array and remove 'selected' class
            const index = selectedButtons.indexOf(button);
            selectedButtons.splice(index, 1);
            button.classList.remove('selected');
        } else {
            // If button is not selected, add it to the array and add 'selected' class
            selectedButtons.push(button);
            button.classList.add('selected');
        }
    }

    // Event listener for interest buttons
    const adventureSportsBtn = document.getElementById('adventureSportsBtn');
    const culturalExplorationBtn = document.getElementById('culturalExplorationBtn');
    const beachActivitiesBtn = document.getElementById('beachActivitiesBtn');

    adventureSportsBtn.addEventListener('click', () => {
        showRelatedOptions([
            'Trekking',
            'Rafting',
            'Rock Climbing',
            'Paragliding',
            'Bungee Jumping',
            'Skydiving'
        ]);
    });

    culturalExplorationBtn.addEventListener('click', () => {
        showRelatedOptions([
            'Historical Sites',
            'Museums',
            'Local Cuisine',
            'Festivals',
            'Art Galleries'
        ]);
    });

    beachActivitiesBtn.addEventListener('click', () => {
        showRelatedOptions([
            'Swimming',
            'Sunbathing',
            'Beach Volleyball',
            'Surfing',
            'Snorkeling',
            'Jet Skiing'
        ]);
    });

    // Function to show related options for a given set of interests
    function showRelatedOptions(options) {
        relatedOptions.innerHTML = '';
        options.forEach(option => {
            const relatedOptionBtn = document.createElement('button');
            relatedOptionBtn.classList.add('interestBtn');
            relatedOptionBtn.textContent = option;
            relatedOptions.appendChild(relatedOptionBtn);
            relatedOptionBtn.addEventListener('click', () => {
                // Do something when related option button is clicked
            });
        });
        relatedOptions.style.display = 'block';
    }

    // Location input functionality
    const locationsContainer = document.getElementById('locationsContainer');
    const locationInput = document.getElementById('locationInput');
    const addLocationBtn = document.getElementById('addLocationBtn');
    const locationsList = document.getElementById('locationsList');

    addLocationBtn.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            const locationBtn = document.createElement('button');
            locationBtn.textContent = location;
            locationBtn.classList.add('locationBtn');
            locationBtn.addEventListener('click', () => {
                // Do something when location button is clicked
            });
            locationsList.appendChild(locationBtn);
            locationInput.value = ''; // Clear the input field
        }
    });
});
