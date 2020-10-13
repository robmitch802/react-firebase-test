import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HomePage from '../Home';
import PasswordForgetPage from '../PasswordForget';
import SignInPage from '../SignIn';
import { withAuthentication } from '../Session';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
    <div>
        <Navigation />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        
    </div>
    
    </Router>
)

export default withAuthentication(App);