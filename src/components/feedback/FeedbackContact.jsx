import React from 'react';
import './feedback-contact.style.css'
import { Form, InputGroup } from 'react-bootstrap';


const FeedbackContact = () => {
    return (
        <section id='FeedbackContact'>
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center feedback-contact-form-inputs">
                    <h1>Feedback</h1>
                    <p>Write to us and we will contact you</p>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Title"
                        type='text'
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                        type='Email'
                        placeholder="Email"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                        type='phone'
                        placeholder="Phone Number"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default FeedbackContact;