import * as React from 'react';
import { HeaderTop } from './layout/Header/HeaderTop';
import { MainPage } from './pages/MainPage/MainPage';
import './App.scss';

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeaderTop />
                <MainPage />
            </React.Fragment>
        );
    };
};
