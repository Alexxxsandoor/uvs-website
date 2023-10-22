import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Feedback from 'react-bootstrap/esm/Feedback';

const ModalPopup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="btn btn-primary" onClick={handleShow}>
          Get Started
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h1>Feedback</h1>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Sand
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ModalPopup;