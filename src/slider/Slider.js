import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

function Slider() {
    return (
        <>
            <section>
                <div className='bg-img'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='bg-txt position-relative'>
                                    <h3>GRAVITY TEMPLATE</h3>
                                    <p>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of creative professionals</p>
                                    <div className='d-flex bg-btn'>
                                        <button>Discover more</button>
                                        <button>Discover more</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>

    );
}

export default Slider;