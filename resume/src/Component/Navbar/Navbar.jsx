import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='nav-bg'>
            <div className='container'>
                <div className='Navbar'>
                    <div className="logos">
                        <h4>Fast CV</h4>
                    </div>

                    <div className="left_nav">

                        <Link className='navLinks' to="/">Home</Link>
                        <Link className='navLinks' to="/about">About Us</Link>
                        <Link className='navLink' to="/login">Login &nbsp; <i class="fa-sharp fa-solid fa-right-from-bracket"></i></Link>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar