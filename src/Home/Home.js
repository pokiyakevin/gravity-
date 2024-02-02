// import About from '../About/About';  
import Slider from '../slider/Slider';
import Gravity from '../Gravity-World/Gravity';
import Element from '../Elemants/Element';
import Telement from '../1000+Element/Telement';
import Included from '../Included/Included';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import '../App.css';
import img1 from '../images/i-1.png';
import Header from '../Header/Header';
import { FaFacebookF } from "react-icons/fa";
function Home() {
  return (
    <>
      {/* <div>
        <h1>This is the home page</h1>
        <Link to="about">about Us</Link>
        <Link to="contact"></Link>
      </div> */}

      {/* Routing */}
      {/* header section start */}

      <Header />

      {/* header section end */}

      {/* images section start */}

      <Slider />

      {/* images section end */}

      {/* Gravity World start */}

      <Gravity />

      {/* Gravity World end */}
      <hr></hr>
      {/* 350+ section start */}

      <Element />

      {/* 350+ section end */}
      <hr></hr>

      {/* 1000+ Elements start */}

      <Telement />

      {/* 1000+ Elements end */}

      <hr></hr>

      {/* Included in Gravity start */}

      <Included />

      {/* Included in Gravity end */}

      <hr></hr>

      {/* MAKE IT YOURS start */}

      <section>
        <div className='make-bg py-5'>
          <Container>
            <h3 className='text-center make-h3'>MAKE IT YOURS</h3>
            <p className='text-center w-75 m-auto fs-4'>Start Creating Beautiful Websites With Gravity Unique & Creative Layouts.Purchase Gravity for $59 only & Build websites like a Lego.</p>
            <div className='my-3'>
              <button className='make-btn m-auto'>PURCHASE NOW</button>
            </div>
          </Container>
        </div>
      </section>

      {/* MAKE IT YOURS end */}

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
      );
}

      export default Home;