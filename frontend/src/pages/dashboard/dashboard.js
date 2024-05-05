import React from 'react';
import './dashboard.css';
import Sidebar from '../SideBarSection/sidebar';
import Body from './Components/BodySection/Body';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='container'>
                <Body/>
            </div>
        </div>
    );
};

export default Dashboard;

