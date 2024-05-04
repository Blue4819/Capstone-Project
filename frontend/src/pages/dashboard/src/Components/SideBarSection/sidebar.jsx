import React from 'react';
import './sidebar.css';

// import images
import logo from '../../Assests/logo.png';

// import icons
import { CiHome } from 'react-icons/ci';
import { TbMessageCirclePlus } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { GiWoodFrame } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";


const sidebar = () => {
    return (
        <div className='sideBar grid'>
            <div className='logoDiv flex'>
                <img src={logo} alt="logo" />
            </div>

            <div className="menuDiv">
                <h2 className="divTitle">
                MENU
                </h2>

                <ul className="menulists grid">

                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            <CiHome className="icon"/>
                            <span className="smalltext"></span>
                            Home
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            <TbMessageCirclePlus className="icon"/>
                            <span className="smalltext"></span>
                            Messages
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            < IoSearch className="icon"/>
                            <span className="smalltext"></span>
                            Search
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            <MdOutlineExplore className="icon"/>
                            <span className="smalltext"></span>
                            Explore
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            <GiWoodFrame className="icon"/>
                            <span className="smalltext"></span>
                            Create
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            < IoSettingsOutline className="icon"/>
                            <span className="smalltext"></span>
                            Settings
                        </a>
                    </li>


                    <li className="listitems">
                        <a href="#" className='menuLink'>
                            < IoLogInOutline className="icon"/>
                            <span className="smalltext"></span>
                            Log Out
                        </a>
                    </li>
                </ul>
            </div>

            <div className='sideBarCard'>
                <BsQuestionCircle className="icon"/>
                <div className='cardContent'>
                <div className='circle1'></div>
                <div className='circle2'></div>

                <h3 className='helpContent'>Help Center</h3>
                <p>Having trouble, please contact for more questions.</p>

                <button className='btn'>Go to help center </button>
                </div>     
            </div>




        </div>
    );
}

export default sidebar;
