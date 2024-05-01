document.addEventListener('DOMContentLoaded', () => {
    // Hide related options initially
    const relatedOptions = document.getElementById('relatedOptions');
    relatedOptions.style.display = 'none';

    // Event listener for image upload
    const profilePicInput = document.getElementById('profilePic');
    const profilePicBase64Input = document.getElementById('profilePicBase64');

    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result.split(',')[1];
                profilePicBase64Input.value = base64String;
                document.getElementById('profilePicPreview').src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    

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
