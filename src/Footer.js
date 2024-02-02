import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import '../App.css';
import Header from '../Header/Header';
import { FaFacebookF } from "react-icons/fa";
function Footer() {
    return(
        <>
                {/* footer start */}

      <section className='bg-color py-5'>
        <Container>
          <Row>
            <Col>
              <img src={require(`../images/logo.png`)}></img>
              <p className='fo-color pt-3'>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of professionals.</p>
              <p className='fo-color'>These professionally designed demos below are built to give you a boosted start for your project. Build Your websites like a lego.</p>
            </Col>
            <Col className='mx-2'>
              <h3 className='t-border'>LATEST POSTS</h3>
              <div className='fo-color border-bottom la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color border-bottom la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
            </Col>
            <Col className='mx-2'>
              <h3 className='t-border'>LATEST POSTS</h3>
              <div className='fo-color border-bottom la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color border-bottom la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
            </Col>
            <Col className='mx-2'>
              <h3 className='t-border'>LATEST POSTS</h3>
              <div className='fo-color border-bottom la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color border-bottom la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
              <div className='fo-color la-ma'>
                <p>1000+ Unique Elements</p>
                <p>Mar 25, 2021</p>
              </div>
            </Col>
          </Row>
        </Container >
      </section>
      <div className='bg-dark'>
        <Container>
          <Row>
            <Col>
              <div className=' d-flex justify-content-between align-items-center'>
                <div className='pt-3'>
                  <p>© 2021 - All Rights Reserved</p>
                </div>
                <div className='f-soc fo-color'>
                  <FaFacebookF></FaFacebookF>
                  <FaFacebookF></FaFacebookF>
                  <FaFacebookF></FaFacebookF>
                </div>
              </div>
            </Col>
          </Row>
        </Container>  

        </div>

        {/* footer end */}
        </>
    )
}

export default Footer;