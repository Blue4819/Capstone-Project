var cropper = null;

function previewImage(event) {
    var postImage = event.target.files[0];

    if (postImage) {
        var reader = new FileReader();
        reader.onload = function(event) {
            // Show preview box with image and caption
            displayPreviewBox(event.target.result);

            // Initialize cropper
            cropper = new Cropper(imageElement, {
                aspectRatio: 1, // Square aspect ratio
                crop(event) {
                    // Update cropped image
                    updateCroppedImage();
                },
            });
        }
        reader.readAsDataURL(postImage);
    }
}

function cropAndPost() {
    var postContent = document.getElementById('postContent').value;
    
    if (postContent.trim() === '') {
        alert('Please enter some content for your post.');
        return;
    }

    if (!cropper) {
        alert('Please select an image for your post.');
        return;
    }

    // Get cropped canvas
    var canvas = cropper.getCroppedCanvas();

    // Convert canvas to data URL
    var croppedImage = canvas.toDataURL();

    // Pass the cropped image to the display function
    displayPost(croppedImage, postContent);
}

function displayPreviewBox(imageSrc) {
    var previewBox = document.createElement('div');
    previewBox.classList.add('post-container');

    var imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = 'Selected Image';

    var captionElement = document.createElement('p');
    captionElement.textContent = document.getElementById('postContent').value;

    previewBox.appendChild(imageElement);
    previewBox.appendChild(captionElement);

    // Append the preview box to the container
    document.getElementById('previewContainer').appendChild(previewBox);
}

function updateCroppedImage() {
    // Get cropped canvas
    var canvas = cropper.getCroppedCanvas();

    // Update cropped image
    croppedImage = canvas.toDataURL();
}

function displayPost(imageSrc, caption) {
    var container = document.createElement('div');
    container.classList.add('post-container');

    var imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = 'Posted Image';

    var captionElement = document.createElement('p');
    captionElement.textContent = caption;

    container.appendChild(imageElement);
    container.appendChild(captionElement);

    // Append the new post preview
    document.getElementById('postPreviews').appendChild(container);
}
