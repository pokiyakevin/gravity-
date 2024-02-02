import { Container, Row, Col } from 'react-bootstrap';
function Gravity() {
    return (
        <>
            <section className='my-5'>
                <Container>
                    <Row>
                        <Col>
                            <h3 className='text-center gw-heading'>Gravity World</h3>
                            <p className='text-center w-75 m-auto fs-5 c-gray'>Gravity is simply the best choice for your new website. Every demo can be modified and adopted.
                                Start Creating Beautiful Websites With Gravity Unique & Creative Layouts.</p>
                        </Col>
                    </Row>
                    <div className='gw-img'>
                        <img src={require(`../images/gw-img.png`)} className='w-100'></img>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Gravity;