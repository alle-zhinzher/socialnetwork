import * as React from 'react';
import './NavTopUser.scss';

function NavTopUser(props: any) {
    return (
        <section className="nav__right__user user-section">
            <img className="user-section__img"
                src={props.img}
                alt={props.img + 'alt'} />
            <p className="user-section__username heading heading--middle heading--white">
                {props.username}
            </p>
        </section>
    )
};

export { NavTopUser }