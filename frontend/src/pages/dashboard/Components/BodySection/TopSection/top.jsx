import React, { useState, useEffect } from 'react';
import './top.css';
import { BiSearch } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import axios from 'axios';

const Top = () => {
    const [showComments, setShowComments] = useState(false);
    const [userData, setUserData] = useState(null);
    const [base64String, setBase64String] = useState('');
    const [dataType, setDataType] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const decoded = JSON.parse(localStorage.getItem('auth'));
                const response = await axios.get(`/user/own/${decoded.token.user._id}`);
                setUserData(response.data);

                setDataType(response.picturePath.contentType)
                const placeholder = response.picturePath.data;
                setBase64String(placeholder.replace("Binary.createFromBase64('", "").replace("')", ""));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const handleCommentClick = () => {
        setShowComments(!showComments);
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
                                        <img src={`data:${dataType};base64,${base64String}`} alt="Image" />
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
                        {/* Username and caption */}
                        {userData && userData.posts && userData.posts.length > 0 && (
                            <>
                                <a href="/profile" className="username">{userData.posts[0].username}</a>
                                <p className="caption">{userData.posts[0].caption}</p>
                                <div className='mediaContent'>
                                    {/* Conditionally render video or image */}
                                    {userData.posts[0].mediaType === 'video' ? (
                                        <video src={userData.posts[0].media} autoPlay loop muted></video>
                                    ) : (
                                        <img src={userData.posts[0].media} alt='post'/>
                                    )}
                                </div>
                            </>
                        )}
                        {/* Border around post details */}
                        <div className="postBorder"></div>
                    </div>

                    <div className='actions flex'>
                        <button className='likeBtn'>
                            <BiLike className='icon'/> <span></span>
                        </button>
                        <button className='commentBtn' onClick={handleCommentClick}>
                            <GoComment className='icon'/> <span></span>
                        </button>
                        <button className='sendBtn'>
                            <FiSend className='icon'/> 
                        </button>
                    </div>
                    {/* Comment section */}
                    {showComments && (
                        <div className="commentsSection">
                            {/* Comments content */}
                            <input type='comment' placeholder='Comments go here'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Top;
