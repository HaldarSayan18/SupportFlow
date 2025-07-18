import React from 'react'
import '../App.css';
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineNotificationsActive } from "react-icons/md";

const HomeNavbar = () => {
    return (
        <div className='navbar-section'>
            <p>Home</p>
            <div className='navbar-sub-section'>
                <MdOutlineNotificationsActive style={{
                    borderRadius: "1rem",
                    height: "25px",
                    width: "25px",
                }} />
                <p>Namaste ADMIN</p>
                <GrUserAdmin style={{
                    border: "1px solid blue",
                    borderRadius: "1rem",
                    // padding:"1rem",
                    color: "black",
                    backgroundColor: "white",
                    height: "40px",
                    width: "40px",
                    padding: "0.4rem",
                }} />
            </div>
        </div>
    )
}

export default HomeNavbar