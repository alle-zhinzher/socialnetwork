import React, { Component, Fragment } from 'react';
import Header from './layout/Header';
import Aside from './layout/Aside';
import Profile from './layout/Profile';
import Wall from './layout/Wall';
import './App.scss';

class App extends Component {
    render() {
        return (
            <main className="wrapper wrapper--main">
                <Header />
                <Profile />
                <Wall />
                <Aside />
            </main>
        )
    }
}

export default App;