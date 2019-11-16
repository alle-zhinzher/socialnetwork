import * as React from 'react';
import { ProfileButtons } from './ProfileButtons/ProfileButtons';
import './Profile.scss';


export function Profile() {
    const buttonsInfo = [
        {
            img: "user",
            title: "My Friends",
        }, {
            img: "friends",
            title: "My Groups",
        }, {
            img: "photos",
            title: "My Photos",
        }, {
            img: "video",
            title: "My Videos",
        }, {
            img: "events",
            title: "My Events",
        }, {
            img: "sign-out",
            title: "Log Out",
        },
    ];
    const buttons = buttonsInfo.map(button =>
        <ProfileButtons
            img={'./assets/img/profile/' + button.img + '.svg'}
            title={button.title}
            key={button.title} />
    );
    return (
        <aside className="page__aside-left profile">
            <img className="profile__avatar"
                src="./assets/img/profile/hitler.jpg"
                alt="Avatar" />
            <h3 className="profile__username heading heading--middle heading--blue">
                {"Hitler"}
            </h3>
            {buttons}
        </aside>
    );
};
