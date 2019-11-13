import React from 'react';
import NavTopUser from '../NavTopUser/NavTopUser';
import NavTopButtons from '../NavTopButtons/NavTopButtons';
import './NavTopAccount.scss';

function NavTopAccount() {
    const images = ['user-settings', 'sign-out']
    const buttons = images.map(img =>
        <NavTopButtons
            key={img}
            img={'assets/img/header/' + img + '.svg'}
            alt={img}
        />)
    return (
        <section className="nav__right">
            <NavTopUser
                img="assets/img/profile/hitler.jpg"
                username="Hitler"
            />
            {buttons}
        </section>
    )
};

export default NavTopAccount;