import React from 'react';
import { withFirebase } from '../Firebase';



const Home = () => (
    <div className="container top-margin">
        <h1>Home</h1>
        <p>This is the home page</p>
    </div>
);

export default withFirebase(Home);