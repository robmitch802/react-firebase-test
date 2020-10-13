import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Modal } from 'react-bootstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <div>
        <PasswordForgetModal />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
    show: false,
    setShow: false,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    };
    
    handleClose = () => {
        setShow(false)
    };
    
    handleShow = () => {
        const { setShow } = this.state;
        setShow(true);
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
        const { email, error, show, setShow } = this.state;

        const isInvalid = email === '';
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closebutton >
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body ></Modal.Body>
                <div className="container">
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
                    </Form.Group>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose} >
                        Cancel
                    </Button>
                    <Button disabled={isInvalid} variant="primary" type="submit" >
                        Submit
                    </Button>

                    {error && <p>{error.message} </p>}
                    </Modal.Footer>

                </Form>
                </div>
            </Modal>


        )
    }
}

export default PasswordForget;