import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import './Header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div class="header-container">
            <Navbar/>
            <MainHeader/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;