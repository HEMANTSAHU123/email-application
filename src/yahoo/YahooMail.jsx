import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, ListGroup } from 'react-bootstrap';
import { Envelope, Star, ClockHistory, FileEarmarkText, Archive, ExclamationTriangleFill, Trash, FolderPlus, ArrowRight } from 'react-bootstrap-icons';


const YahooMailClone = () => {
  return (
    <Container fluid className="vh-100 bg-light">
      <Row className="h-100">
      
        <Col md={3} className="bg-white p-3 border-end">
          <Navbar bg="white" className="mb-3">
            <Navbar.Brand>
             mail
            </Navbar.Brand>
          </Navbar>

          <Button variant="primary" className="w-100 mb-3">
            <Envelope className="me-2" />
            Compose
          </Button>

          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link active><Envelope className="me-2" /> Inbox <span className="badge bg-info rounded-pill">99+</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Star className="me-2" /> Starred</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><ClockHistory className="me-2" /> Snoozed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><FileEarmarkText className="me-2" /> Drafts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><ArrowRight className="me-2" /> Sent</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Archive className="me-2" /> Archive</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><ExclamationTriangleFill className="me-2" /> Spam</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Trash className="me-2" /> Deleted Items</Nav.Link>
            </Nav.Item>
          </Nav>

          <hr className="my-3" />

          <div>
            <h6>Views</h6>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link> Photos <span className="text-muted ms-auto" style={{ fontSize: '0.8rem' }}>Hide</span></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><FileEarmarkText className="me-2" /> Documents</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link> Subscriptions</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><FileEarmarkText className="me-2" /> Drafts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link><ArrowRight className="me-2" /> Travel</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <hr className="my-3" />

          <div>
            <h6>Folders</h6>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link><FolderPlus className="me-2" /> New folder</Nav.Link>
              </Nav.Item>
              {/* Add more folders here */}
            </Nav>
          </div>
        </Col>

        
        <Col md={9} className="p-3">
          <Navbar bg="light" className="mb-3">
            <Form inline className="w-100">
              <FormControl type="text" placeholder="Find messages, documents, photos or people" className="w-100 rounded-pill" />
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="#sort">Sort</Nav.Link>
            </Nav>
          </Navbar>

          <div>
            <h6>Today</h6>
            <ListGroup>
              <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Wakefit</div>
                  Lowest Price Ever on Mattress: Up to 49% off...
                </div>
                <small className="text-muted">Ad</small>
              </ListGroup.Item>
              <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Twitter</div>
                  "Ontario cuts electricity prices following COVID-19 shutdowns of busi..."
                </div>
                <small className="text-muted">8:04 am</small>
              </ListGroup.Item>
            
            </ListGroup>

            <h6 className="mt-3">Yesterday</h6>
            <ListGroup>
              <ListGroup.Item action className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Recruit.Net Job Alert</div>
                  20 new Frontend/ReactJs Developer jobs in Hyderabad, AP India.
                </div>
                <small className="text-muted">7:25 am</small>
              </ListGroup.Item>
             
            </ListGroup>

          
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default YahooMailClone;