import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <div>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    };
    

    onSubmit = event => {
        const { email } = this.state;

        this.props.withFirebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';
        return (
                <div className="container">
                <h2 className="top-margin">Forgot Password Form</h2>
                <Form onSubmit = {this.onSubmit} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Email address"
                        />
                    <Form.Text className="text-muted" >
                        Enter your account email, and we'll send you a reminder email. 
                    </Form.Text>
                    </Form.Group>

                    <Button disabled={isInvalid} variant="primary" type="submit" >
                        Submit
                    </Button>

                    {error && <p>{error.message} </p>}

                </Form>
                </div>
        );
    }
}

const PasswordForgetLink = () => (
    <p><Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link></p>
)
    


export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };