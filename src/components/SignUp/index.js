import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE
        };
    };

    onSubmit = event => {

    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (

            <Form onSubmit={this.onSubmit} >
                <Form.Group controlId="username" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={this.onChange} 
                        placeholder="Full Name" 
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Enter email" 
                    />
                    <Form.Text className="text-muted" >
                        We'll never share your email. 
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="text"
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password Verify</Form.Label>
                    <Form.Control 
                        type="text"
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button disabled={isInvalid} variant="primary" type="submit" >
                    Sign Up
                </Button>
                
                {error && <p>{error.message}</p>}

            </Form>
        );
    }
};

const SignUpLink = () => (
    <p>Don't have an account? <Link to={ROUTES.SIGN_UP} >Sign Up</Link></p>
);

export default SignUpPage;

export { SignupForm, SignUpLink };