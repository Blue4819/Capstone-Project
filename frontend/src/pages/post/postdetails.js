import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './postdetails.css';
import Sidebar from '../SideBarSection/sidebar'

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id: paramsId } = useParams();
  const location = useLocation();
  const locationId = location.state?.data;
  const ID = paramsId || locationId;
  const [base64String, setBase64String] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/post/view/${ID}`);
        const { data } = response;
        setPost(data);
        setLoading(false);
        const placeholder = data.picture.data;
        setBase64String(placeholder.replace("Binary.createFromBase64('", "").replace("')", ""));
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    

    if (ID) {
      fetchPost();
    }
  }, [ID]);

  return (
    <div className="container">
      <Sidebar className="sidebar" />
    <div className="container py-5">
      <h1 className="mb-4">Post Details</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {post && post.picture && ( // Check if post and post.picture exist
        <div className="card mb-4">
          <img src={`data:${post.picture.contentType};base64,${base64String}`} alt="Image" />
          <div className="card-body">
            <h5 className="card-title">{post.caption}</h5>
            <p className="card-text"><strong>Activity:</strong> {post.activity}</p>
            <p className="card-text"><strong>Location:</strong> {post.location}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default PostDetails;
