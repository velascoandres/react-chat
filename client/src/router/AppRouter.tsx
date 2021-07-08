import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

import '../css/login-register.css';


export const AppRouter: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={ChatPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}
