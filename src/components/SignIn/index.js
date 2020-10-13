import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Form, Button } from 'react-bootstrap';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <div className="container top-margin">
        <h1>Sign In</h1>
        <SignInForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase 
            .doSignInWithEmailAndPassword(email,password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
                console.log("You are logged in")
            })
            .catch(error => {
                this.setState({ error });
            });
            event.preventDefault();
        };
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
        <div className="container" >
            <Form onSubmit={this.onSubmit} >
                <Form.Group controlId="email" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={this.onChange} 
                        placeholder="Email" 
                    />
                </Form.Group>
                <Form.Group controlId="password" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button disabled={isInvalid} type="submit" >
                    Sign In
                </Button>
                {error && <p>{error.message}</p>}
                <SignUpLink />
            </Form>
        </div>
    )
  }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };