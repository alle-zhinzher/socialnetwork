import * as React from 'react';
import { NavTopLinks } from './NavTopLinks/NavTopLinks';
import { NavTopAccount } from './NavTopAccount/NavTopAccount';
import './NavTop.scss';

function NavTop() {
    return (
        <nav className="header__nav nav">
            <NavTopLinks />
            <NavTopAccount />
        </nav>
    );
};

export { NavTop }