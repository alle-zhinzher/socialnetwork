import React, { Component, Fragment } from 'react';
import Header from './layout/Header/Header';
import Aside from './layout/Aside';
import Profile from './layout/Profile';
import Wall from './layout/Wall';
import './App.scss';

class App extends Component {
    render() {
        return (
            <section className="wrapper wrapper--main">
                <Header />
                <Profile />
                <Wall />
                <Aside />
            </section>
        )
    }
}

export default App;