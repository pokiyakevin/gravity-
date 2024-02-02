import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <section className='ng-cl'>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={require(`../images/logo.png`)}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to={"/"} className='pe-3 td'>Home</Link>
                                <Link to={"/contact"} className='pe-3 td'>Contact us</Link>
                                <Link to={"/about"} className='pe-3 td'>About Us</Link>
                                <Link to={"/blog"} className='pe-3 td'>BLOG</Link>
                                <Link to={"/portfolio"} className='pe-3 td'>PORTFOLIO</Link>
                                <Link to={"/shop"} className='pe-3 text td'>SHOP</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section >
        </>
    );
}

export default Header;