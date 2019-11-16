import * as React from 'react';
import { Aside } from '../../layout/Aside/Aside';
import { Profile } from '../../layout/Profile/Profile';
import { Wall } from '../../layout/Wall/Wall';
import './MainPage.scss'

class MainPage extends React.Component {
    render() {
        return (
            <section className="page page--main">
                <Profile />
                <Wall />
                <Aside />
            </section>
        )
    }
};

export { MainPage };