import React from 'react'
import '../App.css';
import HomeNavbar from '../components/HomeNavbar';
import { TbLayoutDashboard } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Home = () => {
    return (
        <div className='home-container'>
            <div className='dashboard-container'>
                <div className="dashboard-icon-text">
                    <TbLayoutDashboard className='dashboard-icons' />
                    <p>Dashboard</p>
                </div>
                <div className="dashboard-icon-text">
                    <IoTicketOutline className='dashboard-icons' />
                    <p>My Tickets</p>
                </div>
                <div className="dashboard-icon-text">
                    <CgProfile className='dashboard-icons' />
                    <p>My Profile</p>
                </div>
                <div className="dashboard-icon-text">
                    <RiLogoutCircleRLine className='dashboard-icons' />
                    <p>Log out</p>
                </div>
            </div>
            <div className='home-section-container'>
                <HomeNavbar />
            </div>
        </div>
    )
}

export default Home