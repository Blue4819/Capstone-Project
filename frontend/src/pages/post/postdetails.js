import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/post/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    // Handle delete functionality
    const res1 = await axios.post('/post/delete', ID);
    navigate("/dashboard");
    console.log('Delete post');
  };

  const handleLike = async () => {
    try {
      // Toggle like status of the post
      const response = await axios.patch(`/post/like/${ID}`, {uid: decoded.token.user._id});
      setPost(response.data);
      setIsLiked(!isLiked); // Update like status in the UI
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleComment = () => {
    // Handle comment functionality
    console.log('Comment on post');
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Call handleClose method on modalRef when close button is clicked
  const handleCloseButtonClick = () => {
    handleCloseModal();
  };

  return (
    <div>
      <h2>Post Details</h2>
      <p><strong>Caption:</strong> {post.caption}</p>
      <p><strong>Activity:</strong> {post.activity}</p>
      <p><strong>Location:</strong> {post.location}</p>
      <img src={post.pictureUrl} alt="Post" />
    </div>
  );
};

export default PostDetails;
