import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HeaderTop } from './layout/Header/HeaderTop';
import { Account } from './pages/Account/Account';
import { Dialogs } from './pages/Dialogs/Dialogs';
import { Events } from './pages/Events/Events';
import { Friends } from './pages/Friends/Friends';
import { Main } from './pages/Main/Main';

import './App.scss';

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <HeaderTop />
                <Switch>
                    <Route path="/me" component={Account} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/friends" component={Friends} />
                    <Route path="/events" component={Events} />
                    <Route path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        );
    };
};
