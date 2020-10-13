import React from 'react';
import { withAuthorization } from '../Session';


const HomePage = () => (
    <div className="container top-margin">
        <h1>Home</h1>
        <p>This is the home page, accessible by every signed in user...</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);