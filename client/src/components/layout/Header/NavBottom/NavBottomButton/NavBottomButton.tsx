import * as React from 'react';
import './NavBottomButton.scss';

function NavBottomButton(props: any) {
    return (
        <span className="nav-buttom__item heading heading--middle heading--white">
            {props.title}
        </span>
    );
};

export { NavBottomButton };