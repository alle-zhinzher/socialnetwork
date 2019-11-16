import * as React from 'react'
import './NavTopButtons.scss'

function NavTopButtons(props: any) {
    return (
        <div className="nav__left__button wrapper wrapper--nav-button">
            <img className="nav__left__button__img" src={props.img} alt={props.alt} />
        </div>
    );
};

export { NavTopButtons }