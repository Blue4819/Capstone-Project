import React from 'react';
import './sidebar.css';
import { useNavigate, useLocation} from 'react-router-dom';

// import images
import logo from '../photos/logo.png';

// import icons
import { CiHome } from 'react-icons/ci';
import { TbMessageCirclePlus } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { GiWoodFrame } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoginPage = location.pathname ==='/login';
    const isSignupPage = location.pathname ==='/signup';
    if ( isLoginPage || isSignupPage) return null;

    const handleLogout = () => {
        // Delete the auth object from localStorage
        localStorage.removeItem('auth');
    
        // Redirect the user to the login page
        navigate('/login');
    };
      
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
                        <a href="/dashboard" className='menuLink'>
                            <CiHome className="icon"/>
                            <span className="smalltext"></span>
                            Home
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="/profile" className='menuLink'>
                            <FaPerson className="icon"/>
                            <span className="smalltext"></span>
                            Profile
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
                        <a href="/explore" className='menuLink'>
                            <MdOutlineExplore className="icon"/>
                            <span className="smalltext"></span>
                            Explore
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="/newposts" className='menuLink'>
                            <GiWoodFrame className="icon"/>
                            <span className="smalltext"></span>
                            Create
                        </a>
                    </li>

                    <li className="listitems">
                        <a href="/editprofile" className='menuLink'>
                            < IoSettingsOutline className="icon"/>
                            <span className="smalltext"></span>
                            Settings
                        </a>
                    </li>

                    <li className="listitems">
                        <button className='menuLink' onClick={handleLogout}>
                            <IoLogInOutline className="icon"/>
                            <span className="smalltext"></span>
                            Log Out
                        </button>
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

export default Sidebar;
