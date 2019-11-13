import React from 'react';
import './NavBottomButton.scss';

function NavBottomButton(props) {
    return (
        <span className="nav-buttom__item heading heading--middle heading--white">
            {props.title}
        </span>
    )
};

export default NavBottomButton;