import React from 'react';
import './feedback-contact.style.css'
import { Form, InputGroup } from 'react-bootstrap';
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        x:-100,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.15}
    })
  }

const FeedbackContact = () => {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            id='FeedbackContact'
        >
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center feedback-contact-form-inputs">
                    <motion.h1 custom={1} variants={textAnimation}>Feedback</motion.h1>
                    <motion.p custom={2} variants={textAnimation}>Write to us and we will contact you</motion.p>
                    <motion.div custom={3} variants={textAnimation}>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Title"
                            type='text'
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </motion.div>
                    <motion.div custom={4} variants={textAnimation}>
                        <InputGroup className="mb-3">
                            <Form.Control
                            type='Email'
                            placeholder="Email"
                            aria-label="Username"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </motion.div>
                    <motion.div custom={5} variants={textAnimation}>
                        <InputGroup className="mb-3">
                            <Form.Control
                            type='phone'
                            placeholder="Phone Number"
                            aria-label="Username"
                            aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </motion.div>
                    <motion.div custom={6} variants={textAnimation}>
                        <InputGroup className="mb-3">
                            <Form.Control as="textarea" aria-label="With textarea" />
                        </InputGroup>
                    </motion.div>
                    <motion.div custom={7} variants={textAnimation}>
                        <button className='btn btn-primary'>Send</button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default FeedbackContact;