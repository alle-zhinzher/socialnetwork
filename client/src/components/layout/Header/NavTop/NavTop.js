import React from 'react';
import NavTopLinks from './NavTopLinks/NavTopLinks';
import NavTopAccount from './NavTopAccount/NavTopAccount';
import './NavTop.scss';

function NavTop() {
    return (
        <nav className="nav">
            <NavTopLinks />
            <NavTopAccount />
        </nav>
    )
};

export default NavTop;