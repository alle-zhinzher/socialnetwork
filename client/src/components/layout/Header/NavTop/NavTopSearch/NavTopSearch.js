import React from 'react';
import './NavTopSearch.scss';

function NavTopSearch() {
    return (
        <form className="nav__left__form form form__nav">
            <input className="form__nav__input" type="text"></input>
            <button className="form__nav__button button button--search" type="submit">
                <img className="form__nav__button__img" src="./assets/img/header/search.svg" alt="search" />
            </button>
        </form>
    )
};

export default NavTopSearch;