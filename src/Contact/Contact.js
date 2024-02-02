import Header from "../Header/Header";
import { Container, Row, Col, Form } from "react-bootstrap";
import { IoMapOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
function Contact() {
    return (
        <>
            <Header />
            <section className="my-5">
                <Container>
                    <Row className="my-5">
                        <Col sm="12" lg="4">
                            <div className="text-center c-box">
                                <p className="c-icon"><IoMapOutline></IoMapOutline></p>
                                <p>ADDRESS</p>
                                <p>221B Baker Street, UK</p>
                            </div>
                        </Col>
                        <Col sm="12" lg="4">
                            <div className="text-center c-box">
                                <p className="c-icon"><FaPhoneAlt></FaPhoneAlt></p>
                                <p>PHONE</p>
                                <p>+1 888 888 8888</p>
                            </div>
                        </Col>
                        <Col sm="12" lg="4">
                            <div className="text-center c-box">
                                <p className="c-icon"><RiMailLine></RiMailLine></p>
                                <p>E-MAIL</p>
                                <p>info@yoursite.com</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <div className="w-75 m-auto">
                        <Row>
                            <Col className="text-center">
                                <h2>CONTACT US</h2>
                                <p className="c-dif  m-auto">I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine ...</p>
                            </Col>
                        </Row>
                        <Form className="my-3">
                            <Row>
                                <Col sm="12" lg="6" className="mb-sm-4">
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col sm="12" lg="6" className="mb-sm-4">
                                    <Form.Control placeholder="Enter your E-mail" />
                                </Col>
                            </Row>
                            <Row className="my-lg-4">
                                <Col sm="12" lg="6" className="mb-sm-4">
                                    <Form.Control placeholder="Enter your Subject" />
                                </Col>
                                <Col sm="12" lg="6" className="mb-sm-4">
                                    <Form.Control placeholder="Enter your Phone" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label></Form.Label>
                                        <Form.Control as="textarea" placeholder="Enter your message" rows={3} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                        <Row className="mb-5">
                            <Col>
                                <button className="c-btn">SEND MESSAGE</button>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <div className="w-100 c-map">
                    <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"></iframe>
                </div>


            </section>
        </>
    );
}

export default Contact;