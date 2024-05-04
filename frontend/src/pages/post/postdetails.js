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

  if (!post) {
    return <div>Loading...</div>;
  }

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
