import React from 'react';
import NavTop from './NavTop/NavTop';
import NavBottom from './NavBottom/NavBottom';
import Logo from './Logo/Logo';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <NavTop />
            <Logo />
            <NavBottom />
        </header>
    )
}

export default Header;
