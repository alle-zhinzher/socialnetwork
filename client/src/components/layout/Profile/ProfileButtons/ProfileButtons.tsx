import * as React from 'react';
import './ProfileButtons.scss';

function ProfileButtons(props: any) {
    return (
        <button className="profile__button">
            <img className="profile__button__icon" src={props.img} alt={props.img} />
            <span
                className="profile__button__title heading heading--small heading--blue">
                {props.title}
            </span>
        </button>
    );
};

export { ProfileButtons };