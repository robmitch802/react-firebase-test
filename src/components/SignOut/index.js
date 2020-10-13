import React from 'react';
import { Button } from 'react-bootstrap';

import { withFirebase } from '../Firebase';

// //const SignOutButton = ({firebase}) => (
//     <Button type="button" onClick={firebase.doSignOut} >
//         Sign Out
//     </Button>
// );

const SignOutLink = ({firebase}) => (
    <span onClick={firebase.doSignOut} >Sign Out</span>
)

export default withFirebase(SignOutLink);