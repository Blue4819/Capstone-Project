function uploadPost() {
    var postContent = document.getElementById('postContent').value;
    var postImage = document.getElementById('postImage').files[0];
    
    if (postContent.trim() === '') {
      alert('Please enter some content for your post.');
      return;
    }
  
    // Here you would handle the upload of the post content and image, e.g., via AJAX
    
    // For demonstration purposes, let's log the post content and image file to the console
    console.log('Post Content:', postContent);
    console.log('Post Image:', postImage);
    
    // You can add AJAX code here to send the post data to your server
  }
  