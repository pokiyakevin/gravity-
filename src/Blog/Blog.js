import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
function Blog() {
    return (
        <>
            <Header />
            <section className='my-5'>
                <Container>
                    <Row>
                        <Col xs md="6" xl="4" className='my-3'>
                            <div className='blog-img'>
                                <p className='blog-date pt-3 pe-3'>30 August 2020</p>
                                <div className='blog-txt px-3'>
                                    <p className='blg-ti'>WebSite Design</p>
                                    <h3>Exclusive interview</h3>
                                    <p className='blg-ti'>I am alone, and feel the charm of existence ...</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="4" className='my-3'>
                            <div>
                                <div className='blog-img'>
                                    <p className='blog-date pt-3 pe-3'>30 August 2020</p>
                                    <div className='blog-txt px-3'>
                                        <p className='blg-ti'>WebSite Design</p>
                                        <h3>Exclusive interview</h3>
                                        <p className='blg-ti'>I am alone, and feel the charm of existence ...</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12"  md="6" xl="4" className='my-3'>
                            <div className='blog-img'>
                                <p className='blog-date pt-3 pe-3'>30 August 2020</p>
                                <div className='blog-txt px-3'>
                                    <p className='blg-ti'>WebSite Design</p>
                                    <h3>Exclusive interview</h3>
                                    <p className='blg-ti'>I am alone, and feel the charm of existence ...</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12"  md="6" xl="4" className='my-3'>
                            <div className='blog-img'>
                                <p className='blog-date pt-3 pe-3'>30 August 2020</p>
                                <div className='blog-txt px-3'>
                                    <p className='blg-ti'>WebSite Design</p>
                                    <h3>Exclusive interview</h3>
                                    <p className='blg-ti'>I am alone, and feel the charm of existence ...</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12"  md="6" xl="4" className='my-3'>
                            <div className='blog-img'>
                                <p className='blog-date pt-3 pe-3'>30 August 2020</p>
                                <div className='blog-txt px-3'>
                                    <p className='blg-ti'>WebSite Design</p>
                                    <h3>Exclusive interview</h3>
                                    <p className='blg-ti'>I am alone, and feel the charm of existence ...</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12"  md="6" xl="4" className='my-3'>
                            <div className='blog-img'>
                                <p className='blog-date pt-3 pe-3'>30 August 2020</p>
                                <div className='blog-txt px-3'>
                                    <p className='blg-ti'>WebSite Design</p>
                                    <h3>Exclusive interview</h3>
                                    <p className='blg-ti'>I am alone, and feel the charm of existence ...</p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
 

        </>
    );
}

export default Blog;