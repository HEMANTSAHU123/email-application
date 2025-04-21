import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Paperclip, TypeBold, TypeItalic, TypeUnderline } from 'react-bootstrap-icons';
import { AiOutlineGif } from "react-icons/ai";
import { CiLink } from "react-icons/ci";
import { MdEmojiEmotions } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { fetchemail ,saveDataToFirebase} from '../Store/EmailAuth';
import { useNavigate } from 'react-router-dom';

const EmailScreen = () => {
  const [data, setData] = useState({
    email: '',
    body: '',
    textarea: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.email);

  useEffect(() => {
    dispatch(fetchemail());
  }, [dispatch]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = async () => {
    if (!data.email || !data.body) {
      alert('Please fill in all required fields');
      return;
    }
    try {
     
   const result= await dispatch(saveDataToFirebase({
        ...data,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        read: false
      })).unwrap();
if(result){
      setData({
        email: '',
        body: '',
        textarea: '',
      });

      alert('Email sent successfully!');
      navigate("/yahooemail");
    }
    } catch (err) {
      console.error('Failed to send email:', err);
     
    }
  };

  return (
    <Container className="email-container">
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div className="text-center">Sending email...</div>}

      <Row>
        <Col>
          <div className="email-header">
            <Form.Group as={Row} className="mb-2" controlId="formEmailTo">
              <Form.Label column sm="2">
                To:
              </Form.Label>
              <Col sm="10" className="d-flex align-items-center">
                <Form.Control
                  type="email"
                  name='email'
                  placeholder='recipient@example.com'
                  value={data.email}
                  onChange={handleForm}
                  className="me-3"
                  required
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
                  placeholder='Email subject'
                  value={data.body}
                  onChange={handleForm}
                  required
                />
              </Col>
            </Form.Group>
          </div>

          <div className="email-body">
            <Form.Control
              as="textarea"
              name='textarea'
              placeholder="Write your email here..."
              value={data.textarea}
              onChange={handleForm}
              style={{ height: '400px' }}
              required
            />
          </div>

          <div className="email-footer mt-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button
                variant="primary"
                onClick={handleSend}
                className="me-2"
               
              >
                {loading ? 'Sending...' : 'Send'}
              </Button>
              <AiOutlineGif size={24} className="me-2" />
              <CiLink size={24} className="me-2" />
              <MdEmojiEmotions size={24} />
            </div>
            <div className="formatting-options">
              <Button variant="outline-secondary" size="sm" className="me-1">
                <Paperclip />
              </Button>
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
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  setData({
                    email: '',
                    body: '',
                    textarea: '',
                  });
                }}
              >
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