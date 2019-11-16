import * as React from 'react';
import { NavTop } from './NavTop/NavTop';
import { NavBottom } from './NavBottom/NavBottom';
import { Logo } from './Logo/Logo';
import './Header.scss';

function HeaderTop() {
    return (
        <header className="header">
            <NavTop />
            <Logo />
            <NavBottom />
        </header>
    );
};
export { HeaderTop };

