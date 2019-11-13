import React from 'react'
import './NavTopButtons.scss'

function NavTopButtons(props) {
    return (
        <div className="nav__left__button wrapper wrapper--nav-button">
            <img className="nav__left__button__img" src={props.img} alt={props.alt} />
        </div>
    )
};

export default NavTopButtons;