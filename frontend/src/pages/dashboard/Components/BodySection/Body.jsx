import React from 'react';
import './body.css';
import Top from './TopSection/top';
import { BiSearch, BiLike } from "react-icons/bi";

const Body = () => {
    return (
        <div className='mainContent'>
            <Top />
            <div className='bottom flex'>
                <button className='likeBtn' >
                    <BiLike className='icon'/> <span></span>
                    </button>
                </div>
            </div>
    );
}
export default Body;
