import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';

const SignOutButton = ({firebase}) => (
    <Button type="button" onClick={firebase.doSignOut} >
        Sign Out
    </Button>
);

const SignOutLink = ({firebase}) => {
    <Link onClick={firebase.doSignOut} >Sign Out</Link>
}

export default withFirebase(SignOutButton, SignOutLink);