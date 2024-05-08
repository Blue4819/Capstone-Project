import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './top.css';
import { BiSearch } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { FiSend } from "react-icons/fi";

const Top = () => {
    const [showComments, setShowComments] = useState(false);
    const [userData, setUserData] = useState(null);
    const [base64String, setBase64String] = useState('');
    const [posts, setPosts] = useState([]);
    const { id: paramsId } = useParams();
    const location = useLocation();
    const locationId = location.state?.data;
    const ID = paramsId || locationId;

    const fetchPosts = async () =>{
        
    };

    useEffect(() => {
        fetchUserData();
        //fetchPosts();
    }, []);

    const fetchUserData = async () => {
        try {
            const decoded = JSON.parse(localStorage.getItem('auth'));
            const { picturePath, username, age, gender, followed_activities, followed_locations } = decoded.token.user;
            if (picturePath && picturePath.data) {
                const placeholder = picturePath.data;
                setBase64String(placeholder.replace("Binary.createFromBase64('", "").replace("')", ""));
            }

            const response = await axios.get(`/user/own/${decoded.token.user._id}`);
            setUserData(response.data);
            console.log(userData);

            const res = await axios.get('/post/dashboard');
            console.log(res.data);
            setPosts(res.data);
            console.log(posts)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className='topSection'>
            <div className='headerSection flex'>
                <div className='title'>
                    <h1>Home Page</h1>
                    <p>Welcome back to Holidate!</p>
                </div>

                <div className='searchBar flex'>
                    <input type='text' placeholder='Search'/>
                    <BiSearch className='icon'/>
                </div>

                <div className="userDiv flex">
                    <div className="profile">
                        <a href="/profile">
                            <center>
                                {userData && (
                                    <>
                                        <img src={base64String} alt="Image" />
                                        <div className='profileInfo'>
                                            <a href="/profile" className="username">{userData.username}</a>
                                            <p className='location'>{userData.location}</p>
                                        </div>
                                    </>
                                )}
                            </center>
                        </a>
                    </div> 
                </div>
            </div>

            {/* Right Card Flex */}
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <div className="postDetails">
                        {userData && posts && (
                            <>
                                <div className='posts-container'>
                                {posts.map((postItem, index) => (
                                    <div className="card mb-4" key={postItem._id}>
                                    <a href={`/profile/${postItem.userId}`}>{postItem.username}</a>
                                    <a href={`/post/${postItem._id}`}>
                                    <img src={`data:${postItem.picture.contentType};base64,${postItem.picture.data}`} alt="Post Image" className='profilephoto' />
                                    <div className="card-body">
                                    <h5 className="card-title">{postItem.caption}</h5>
                                    <p className="card-text"><strong>Activity:</strong> {postItem.activity}</p>
                                    <p className="card-text"><strong>Location:</strong> {postItem.location}</p>
                                    </div>
                                    </a>
                                    </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {/* Border around post details */}
                        <div className="postBorder"></div>

                        <div className='actions flex'>
                        <button className='likeBtn'>
                            <BiLike className='icon'/> <span>Like</span>
                            </button>
                            <button className='sendBtn'>
                            <FiSend className='icon'/>  <span>Send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Top;
