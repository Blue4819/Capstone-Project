import React, { useState } from 'react';
import './top.css';
import { BiSearch } from "react-icons/bi";
import profile from '../../../Assests/IMG_3059.jpg'; // Update the path to match your folder structure
import video from '../../../Assests/topp.mp4';
import photo from '../../../Assests/Rectangle 27.png';
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { FiSend } from "react-icons/fi";

const Top = () => {
    const [showComments, setShowComments] = useState(false);

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    return (
        <div className='topSection'>
            <div className='headerSection flex'>
                <div className='title'>
                    <h1>Home Page</h1>
                    <p> Welcome back to Holidate!</p>
                </div>

                <div className='searchBar flex'>
                    <input type='text' placeholder='Search'/>
                    <BiSearch className='icon'/>
                </div>

                <div className="userDiv flex">
                    <div className="profile">
                        <a href="/profile">
                            <center>
                            <img src={profile} alt="Profile" className="profilePhoto"/>
                            <div className='profileInfo'>
                                 <a href="/profile" className="username">Aanya Tripathi</a>
                                  <p className='location'>New Delhi</p>
                            </div>
                            </center>
                        </a>
                    </div> 
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <div className="postDetails">
                        {/* Username and caption */}
                        <a href="/profile" className="username">Megha Singh</a>
                        <p className="caption">Trekking and waterfalls!</p>
                        <div className='mediaContent'>
                            <video src={video} autoPlay loop muted></video>
                        </div>
                        {/* Border around post details */}
                        <div className="postBorder"></div>
                    </div>

                    <div className='actions flex'>
                        <button className='likeBtn'>
                            <BiLike className='icon'/> <span>like</span>
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

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <div className="postDetails">
                        {/* Username and caption */}
                        <a href="/profile" className="username">Prachi Bharti</a>
                        <p className="caption">Fun day!</p>
                        <div className='mediaContent'>
                            <img src={photo} alt='post'></img>
                        </div>
                        {/* Border around post details */}
                        <div className="postBorder"></div>
                    </div>

                    <div className='actions flex'>
                        <button className='likeBtn'>
                            <BiLike className='icon'/> <span>like</span>
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