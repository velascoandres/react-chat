import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ChatPage } from '../pages/ChatPage';
import { AuthRouter } from './AuthRouter';

import '../css/login-register.css';
import { AuthContext } from '../auth/AuthContext';


export const AppRouter: React.FC = () => {

    const { auth, verifyToken } = useContext(AuthContext);
    const { logged, checking } = auth;

    useEffect(() => {
        verifyToken();
    }, [verifyToken]);

    if (checking) {
        return <h1>Please wait...</h1>
    }

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
