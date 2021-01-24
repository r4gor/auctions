import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Lobby from './components/Lobby/Lobby';

const App = () => (
    <Router>
        <Switch>
            <Route path="/:room" exact component={Lobby} />
            <Route path="/" exact component={Join} />
        </Switch>
    </Router>
);

export default App;