// profile.js
document.addEventListener('DOMContentLoaded', () => {
    const profileId = 'your-profile-id'; // Replace with the actual profile ID

    fetch(`/api/profile/${profileId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(profileData => {
            // Update profile information on the page
            document.getElementById('profilePicPreview').src = 'profile-pic.jpg'; // Placeholder path
            document.getElementById('name').textContent = profileData.name || 'Name';
            document.getElementById('age').textContent = profileData.age || 'Age';
            document.getElementById('gender').textContent = profileData.gender || 'Gender';

            const interestsList = document.getElementById('interestsList');
            interestsList.innerHTML = ''; // Clear previous content
            profileData.interests.forEach(interest => {
                const li = document.createElement('li');
                li.textContent = interest;
                interestsList.appendChild(li);
            });

            const locationsList = document.getElementById('locationsList');
            locationsList.innerHTML = ''; // Clear previous content
            profileData.locations.forEach(location => {
                const li = document.createElement('li');
                li.textContent = location;
                locationsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
        });
});
