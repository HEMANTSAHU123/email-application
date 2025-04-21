import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
 Container,
 Row,
 Col,
 Navbar,
 Nav,
 Button,
 ListGroup,
 Form,
 FormControl,
} from "react-bootstrap";
import {
 Envelope as MailIcon,
 Star,
 ClockHistory,
 FileEarmarkText,
 ArrowRight,
 Archive,
 ExclamationTriangleFill,
 Trash,
 FolderPlus,
 Search as SearchIcon,
 Newspaper as NewsIcon,
 CurrencyDollar,
 PersonFill,
 HeartFill,
 CloudSunFill,
 ThreeDots as MoreIcon,
 ArrowsMove as MoveIcon,
 SortDown,
 House,
 Gear,
 File,
 Calendar,
 QuestionCircle,
} from "react-bootstrap-icons";
import {
 fetchemail,
 
 setCurrentEmail,
 deleteEmail,
 markAsRead,
} from "../Store/EmailAuth";

const YahooMailClone = () => {
 const dispatch = useDispatch();
 const { emails, currentEmail, loading, error } = useSelector(
 (state) => state.email
 );
 const user = useSelector((state) => state.auth.user);

 const [composeFormOpen, setComposeFormOpen] = useState(false); 
 const [composeEmailData, setComposeEmailData] = useState({ 
 email: "",
 body: "",
 textarea: "",
 });

 useEffect(() => {
 if (user?.uid) {
 dispatch(fetchemail());
 }
 }, [dispatch, user]);

 const handleEmailClick = (email) => {
 dispatch(setCurrentEmail(email));
 if (!email.read) {
 dispatch(markAsRead(email.id));
 }
 };

 const handleDeleteEmail = (emailId) => {
 dispatch(deleteEmail(emailId));
 };

 const formatTimestamp = (timestamp) => {
 if (!timestamp) return "No Date";

 const date = new Date(timestamp);
 const options = {
 weekday: "short",
 year: "numeric",
 month: "short",
 day: "numeric",
 hour: "numeric",
 minute: "numeric",
 };
 return date.toLocaleString("en-US", options);
 };

 const handleCompose = () => {
 setComposeFormOpen(!composeFormOpen); 
 };

 const handleSend = () => { 
   
   setComposeEmailData({ email: "", body: "", textarea: "" }); 
   setComposeFormOpen(false);
 };

 const handleInputChange = (e) => { 
   setComposeEmailData({
     ...composeEmailData,
     [e.target.name]: e.target.value,
   });
 };


 if (loading) {
 return <div>Loading emails...</div>;
 }

 if (error) {
 return <div>Error: {error}</div>;
 }

 return (
 <>
 <Navbar
 bg="primary"
 variant="light"
 className="mb-3 justify-content-center"
 style={{ justifyContent: "space-between", alignItems: "center" }}
 >
 <Nav
 className="me-auto"
 style={{ width: "100%", justifyContent: "space-between" }}
 >
 <Nav.Link>
 <House className="me-2" />
 home
 </Nav.Link>
 <Nav.Link>
 <MailIcon className="me-2" />
 mail
 </Nav.Link>
 <Nav.Link>
 <SearchIcon className="me-2" />
 search
 </Nav.Link>
 <Nav.Link>
 <NewsIcon className="me-2" />
 news
 </Nav.Link>
 <Nav.Link>
 <CurrencyDollar className="me-2" />
 finance
 </Nav.Link>
 <Nav.Link>
 <PersonFill className="me-2" />
 woman
 </Nav.Link>
 <Nav.Link>
 <HeartFill className="me-2" />
 life
 </Nav.Link>
 <Nav.Link>
 <CloudSunFill className="me-2" />
 weather
 </Nav.Link>
 <Nav.Link>
 <MoreIcon className="me-2" />
 more
 </Nav.Link>
 </Nav>
 </Navbar>

 <Navbar style={{ backgroundColor: "blue" }}>
 <Navbar.Brand
 className="me-auto"
 style={{
 paddingLeft: "130px",
 fontWeight: "bold",
 }}
 >
 Yahoo/Mail
 </Navbar.Brand>
 <Form inline className="w-100">
 <div
 className="d-flex align-items-center"
 style={{ paddingLeft: "20px" }}
 >
 <FormControl
 type="text"
 placeholder="Find messages, documents, photos or people"
 className="w-50"
 SearchIcon
 />

 <div
 className="ms-2 p-2 rounded"
 style={{
 backgroundColor: "blue",
 color: "white",
 cursor: "pointer",
 }}
 >
 <SearchIcon />
 </div>
 <div
 style={{
 display: "flex",
 paddingLeft: "170px",
 alignItems: "center",
 justifyContent: "space-between",
 }}
 >
 <Nav.Link>
 <PersonFill className="me-2" />
 Hemant
 </Nav.Link>
 <Nav.Link>
 <House className="me-2" />
 Home
 </Nav.Link>
 </div>
 </div>
 </Form>
 </Navbar>

 <Container fluid className="vh-100">
 <Row className="h-100">
 <Col md={3} className="bg-white p-3 border-end">
 <Button variant="primary" className="w-100 mb-3" onClick={handleCompose}>
 <MailIcon className="me-2" />
 Compose
 </Button>

 {composeFormOpen && ( // Show form conditionally
 <Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
 <Form.Label>To</Form.Label>
 <Form.Control
 type="email"
 placeholder="Enter email"
 name="email"
 value={composeEmailData.email}
 onChange={handleInputChange}
 />
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicSubject">
 <Form.Label>Subject</Form.Label>
 <Form.Control
 type="text"
 placeholder="Subject"
 name="body"
 value={composeEmailData.body}
 onChange={handleInputChange}
 />
 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicBody">
 <Form.Label>Message</Form.Label>
 <Form.Control
 as="textarea"
 rows={3}
 name="textarea"
 value={composeEmailData.textarea}
 onChange={handleInputChange}
 />
 </Form.Group>
 <Button variant="primary" onClick={handleSend}>
 Send
 </Button>
 </Form>
 )}

 <Nav className="flex-column">
 <Nav.Item>
 <Nav.Link active>
 <MailIcon className="me-2" /> Inbox{" "}
 <span className="badge bg-info rounded-pill">{emails.length}</span>
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <Star className="me-2" /> Starred
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <ClockHistory className="me-2" /> Snoozed
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <FileEarmarkText className="me-2" /> Drafts
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <ArrowRight className="me-2" /> Sent
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <Archive className="me-2" /> Archive
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <ExclamationTriangleFill className="me-2" /> Spam
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <Trash className="me-2" /> Deleted Items
 </Nav.Link>
 </Nav.Item>
 </Nav>

 <hr className="my-3" />

 <div>
 <h6>Views</h6>
 <Nav className="flex-column">
 <Nav.Item>
 <Nav.Link>
 Photos
 <span className="text-muted ms-auto" style={{ fontSize: "0.8rem" }}>
 hide
 </span>
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <FileEarmarkText className="me-2" /> Documents
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link> Subscriptions</Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <FileEarmarkText className="me-2" />
 Deals
 </Nav.Link>
 </Nav.Item>
 <Nav.Item>
 <Nav.Link>
 <ArrowRight className="me-2" /> Travel
 </Nav.Link>
 </Nav.Item>
 </Nav>
 </div>

 <hr className="my-3" />

 <div>
 <h6>Folders</h6>
 <Nav className="flex-column">
 <Nav.Item>
 <Nav.Link>
 <FolderPlus className="me-2" /> New folder
 </Nav.Link>
 </Nav.Item>
 </Nav>
 </div>
 </Col>

 <Col md={6} className="p-3">
 <Nav className="mb-3">
 <Nav.Link>
 <Archive className="me-2" />
 Archive
 </Nav.Link>
 <Nav.Link>
 <MoveIcon className="me-2" />
 move
 </Nav.Link>
 {currentEmail && (
 <Nav.Link onClick={() => handleDeleteEmail(currentEmail.id)}>
 <Trash className="me-2" />
 delete
 </Nav.Link>
 )}
 <Nav.Link>spam</Nav.Link>
 <Nav.Link>
 <SortDown className="me-2" />
 Sort
 </Nav.Link>
 </Nav>

 <div>
 <h6>Today</h6>
 <ListGroup>
 <h6 className="mt-3">Sent Emails</h6>
 <ListGroup>
 {emails.map((email, index) => (
 <ListGroup.Item
 key={index}
 action
 active={currentEmail?.id === email.id}
 onClick={() => handleEmailClick(email)}
 className="d-flex justify-content-between align-items-start   zIndex: 1000"
 >
 <div className="ms-2 me-auto">
 <div className="fw-bold">To: {email.email}</div>
 <div>Subject: {email.body}</div>
 <div>{email.textarea}</div>
 </div>
 <small className="text-muted">
 {email.timestamp ? formatTimestamp(email.timestamp) : "No Date"}
 </small>
 </ListGroup.Item>
 ))}
 </ListGroup>
 </ListGroup>


 <ListGroup>
 <ListGroup.Item
 action
 className="d-flex justify-content-between align-items-start"
 >
 <div className="ms-2 me-auto">
 <div className="fw-bold"></div>
 </div>

 </ListGroup.Item>
 </ListGroup>
 </div>
 </Col>

 <Col md={3} className="bg-white p-3 border-start">
 <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
 <Nav.Link> <Calendar className="me-2"/></Nav.Link>
 <Nav.Link> <QuestionCircle className="me-2"/> </Nav.Link>
 <Nav.Link> <File className="me-2"/></Nav.Link>
 <Nav.Link>setting<Gear className="me-2"/></Nav.Link>
 </div>

 {currentEmail && (
 <div className="mt-3">
 <h5>Email Details</h5>
 <div>
 <strong>To:</strong> {currentEmail.email}
 </div>
 <div>
 <strong>Subject:</strong> {currentEmail.body}
 </div>
 <div className="mt-2">
 <p>{currentEmail.textarea}</p>
 </div>
 <Button
 variant="danger"
 onClick={() => handleDeleteEmail(currentEmail.id)}
 >
 <Trash className="me-2" />
 Delete Email
 </Button>

 </div>
 )}
 </Col>
 </Row>
 </Container>
 </>
 );
};

export default YahooMailClone;
