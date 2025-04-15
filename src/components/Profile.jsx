import React from 'react'
import { Navbar, Container, Row, Col, Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Row className="w-100 align-items-center">
            <Col xs={12} md={6} className="text-left">
              <p style={{ color: 'black', fontStyle: 'italic' }}>Welcome  to expanse tracker</p>
              <Link  to='/email' ><button>click here</button></Link>
            </Col>
          
          </Row>
        </Container>
      </Navbar>
      <hr style={{ margin: '0' }} />
    </div>
  )
}

export default Profile
