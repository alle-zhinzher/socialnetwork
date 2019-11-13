import React from 'react';
import NavBottomButton from './NavBottomButton/NavBottomButton';
import './NavBottom.scss';

function NavBottom() {
    const buttonTitles = ['Friends', 'News', 'Posts', 'Tutorials', 'Videos', 'FAQ']
    const buttons = buttonTitles.map(title => <NavBottomButton title={title} />)
    return (
        <section className="header__nav-buttom nav-buttom">
            {buttons}
        </section>
    )
};

export default NavBottom;