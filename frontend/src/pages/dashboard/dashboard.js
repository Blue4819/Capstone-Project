import React from 'react'
import './dashboard.css'
import Sidebar from '../SideBarSection/sidebar'
import Body from './Components/BodySection/Body'

const Dashboard = () => {
    return(
        <div className='container'>
            <Sidebar/>
            <Body/>

        </div>
    )
}

export default Dashboard