import img1 from '../images/i-1.png';
import { Container, Row, Col } from 'react-bootstrap';

function Element() {
    return (
        <>
            <section className='my-5'>
                <Container>
                    <Row className='my-3'>
                        <Col>
                            <h2 className='text-center my-2 pg-txt'>350+ Different Pages</h2>
                            <p className='text-center w-75 m-auto c-gray fs-5 mb-2'>These professionally designed demos below are built to give you a boosted start for your project.
                                Every demo can easily be modified and adopted for any kind of project.</p>
                        </Col>
                    </Row>
                    <Row className='my-4 justify-content-center align-items-center'>
                        <Col xs="6" md="4" lg="3" className='py-3'>
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3">
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3">
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3">
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3" className='py-4'>
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3">
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3">
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="6" md="4" lg="3">
                            <div>
                                <div className='w-100 m-auto box p-2'>
                                    <img src={img1} className='img-center py-1'></img>
                                    <p className='text-center fw-bold'>HOME PAGES</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default Element;