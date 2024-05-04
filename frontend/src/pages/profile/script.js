document.addEventListener('DOMContentLoaded', () => {
    // Location input functionality
    const addLocationBtn = document.getElementById('addLocationBtn');

    addLocationBtn.addEventListener('click', () => {
        const locationInput = document.getElementById('locationInput');
        const location = locationInput.value.trim();
        if (location) {
            const locationText = document.createElement('span');
            locationText.textContent = location;
            locationsList.appendChild(locationText);
            locationInput.value = ''; // Clear the input field
        }
    });
});
