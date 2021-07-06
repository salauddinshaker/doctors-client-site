import React from 'react';
import './Navbar.css';
const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-md navbar-light ">
         
                <ul class="navbar-nav m-auto ">
                    <li class="nav-item">
                        <a class="nav-link " href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Dental Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Reviews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Contact Us</a>
                    </li>
                </ul>
           
        </nav>
    );
};

export default Navbar;