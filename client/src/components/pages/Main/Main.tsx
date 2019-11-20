import * as React from 'react';
import { Aside } from '../../layout/Aside/Aside';
import { Profile } from '../../layout/Profile/Profile';
import { Wall } from '../../layout/Wall/Wall';
import './Main.scss'

class Main extends React.Component {
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

export { Main };