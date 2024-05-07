import React from 'react';
import './body.css';
import Top from './TopSection/top';

const Body = () => {
    return (
        <div className='mainContent'>
            <Top />
            <div className='bottom flex'>
                {/* Add any additional content for the bottom section here */}
            </div>
        </div>
    );
}

export default Body;