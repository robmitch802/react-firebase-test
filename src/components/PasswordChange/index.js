import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import { withFirebase } from '../Firebase'

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { passwordOne } = this.state;

        this.props.firebase 
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo || passwordOne === '';
        
        return (
            <div className="container" >
            <h2 className="top-margin">Reset Password Form</h2>
            <p>You are logged in as: { this.state.email }</p>

            <Form onSubmit={this.onSubmit} >
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
                    Reset My Password
                </Button>
                
                {error && <p>{error.message}</p>}

            </Form>
            </div>
        )
    }
}

export default withFirebase(PasswordChangeForm);