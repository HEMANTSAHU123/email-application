import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Paperclip, TypeBold, TypeItalic, TypeUnderline, Link } from 'react-bootstrap-icons';
import { AiOutlineGif } from "react-icons/ai";
import { CiLink } from "react-icons/ci";
import { MdEmojiEmotions } from "react-icons/md";

const EmailScreen = () => {
  const [data, setData] = useState({
    email: 'test@gmail',
    body: 'test mail',
    textarea: 'this is a test mail',
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = () => {
    console.log('Sending email:', data);
    alert('Email sent (mock functionality)');
  };

  return (
    <Container className="email-container">
      <Row>
        <Col>
          <div className="email-header">
            <Form.Group as={Row} className="mb-2" controlId="formEmailTo">
              <Form.Label column sm="2">
                To:
              </Form.Label>
              <Col sm="10" className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  name='email'
                  placeholder='test@gmail'
                  value={data.email}
                  onChange={handleForm}
                  className="me-3"
                />
                <div className="d-flex">
                  <p className="mb-0 me-2">Cc</p>
                  <p className="mb-0 me-2">Bcc</p>
                  <p className="mb-0">X</p>
                </div>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmailSubject">
              <Form.Label column sm="2">
                Subject:
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name='body'
                  placeholder='test mail'
                  value={data.body}
                  onChange={handleForm}
                />
              </Col>
            </Form.Group>
          </div>

          <div className="email-body">
            <Form.Control
              as="textarea"
              name='textarea'
              placeholder="this is a test mail"
              value={data.textarea}
              onChange={handleForm}
              style={{ height: '400px' }}
            />
          </div>

          <div className="email-footer mt-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button variant="primary" onClick={handleSend} className="me-2">
                Send 
              </Button>
              <AiOutlineGif size={24} className="me-2" />
              <CiLink size={24} className="me-2" />
              <MdEmojiEmotions size={24} />
            </div>
            <div className="formatting-options">
              <Button variant="outline-secondary" size="sm" className="me-1">
                <Paperclip />
              </Button>
             
             <Link to='/yahoomail'> <Button variant="outline-secondary" size="sm" className="me-1">
                <Link />
              </Button></Link>
              <Button variant="outline-secondary" size="sm" className="me-1">
                <TypeBold style={{ fontWeight: 'bold' }} />
              </Button>
              <Button variant="outline-secondary" size="sm" className="me-1">
                <TypeItalic style={{ fontStyle: 'italic' }} />
              </Button>
              <Button variant="outline-secondary" size="sm" className="me-1">
                <TypeUnderline style={{ textDecoration: 'underline' }} />
              </Button>
              <Button variant="outline-secondary" size="sm" className="me-1">
                Aa
              </Button>
              <Button variant="outline-secondary" size="sm">
                ...
              </Button>
            </div>
            <div>
              <Button variant="danger" size="sm">
                <span role="img" aria-label="delete">🗑️</span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmailScreen;