import React from 'react';
import './Logo.scss';

function Logo() {
    return (
        <section className="header__logo">
            <img className="header__logo__img" src="./assets/img/header/logo.png" alt="logo" />
            <section className="header__logo heading">
                <h1 className="heading--grand heading--white">Socialize</h1>
                <h3 className="heading--small heading--white heading--right">Find New Friends</h3>
            </section>
        </section>
    )
};

export default Logo;