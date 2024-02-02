import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import Header from '../Header/Header';
function Portfolio() {
    return (
        <>
            <Header />
            <section className='my-5'>
                <Container>
                    <Row>
                        <Col>
                            <div className='menu'>
                                <button>All</button>
                                <button>Branding</button>
                                <button>Design</button>
                                <button>Graphic</button>
                                <button>codding</button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='my-5'>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div className='por-box'>
                                <div className='prt-img'>
                                    <img src={require(`../images/por-1.jpg`)} className='w-100'></img>
                                </div>
                                <div className='text-center p-4'>
                                    <h5>Branding Work</h5>
                                    <p>Identity, Design</p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>

            </section>
        </>
    );
}

export default Portfolio;