import * as React from 'react';
import { NavTopButtons } from '../NavTopButtons/NavTopButtons';
import { NavTopSearch } from '../NavTopSearch/NavTopSearch';
import './NavTopLinks.scss';

function NavTopLinks() {
    const images = ['home', 'earth', 'friends', 'messages'];
    const buttons = images.map(img =>
        <NavTopButtons
            key={img}
            img={'assets/img/header/' + img + '.svg'}
            alt={img}
        />);
    return (
        <section className="nav__left">
            {buttons}
            <NavTopSearch />
        </section>
    );
};

export { NavTopLinks }