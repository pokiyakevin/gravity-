import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import { FaShoppingCart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
function Shop() {
    return (
        <>
            <Header />
            <section className="my-5">
                <Container>
                    <Row>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-1.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Woman Dresses</p>
                                        <p className="s">Start from <span>$59.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-2.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Hooded Jeans</p>
                                        <p className="s">Start from<span>$39.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-1.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Woman Dresses</p>
                                        <p className="s">Start from <span>$59.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-2.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Hooded Jeans</p>
                                        <p className="s">Start from<span>$39.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-1.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Woman Dresses</p>
                                        <p className="s">Start from <span>$59.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-2.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Hooded Jeans</p>
                                        <p className="s">Start from<span>$39.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-1.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Woman Dresses</p>
                                        <p className="s">Start from <span>$59.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs="12" md="6" xl="3" className="my-3">
                            <div className="shop-box">
                                <div className="sh-img">
                                    <img src={require(`../images/shop-2.jpg`)} className="w-100"></img>
                                </div>
                                <div className="sh-txt d-flex justify-content-between align-items-center">
                                    <div className="sh-txt">
                                        <p>Hooded Jeans</p>
                                        <p className="s">Start from<span>$39.00</span></p>
                                    </div>
                                    <div className="sh-social">
                                        <FaShoppingCart className="mx-4"></FaShoppingCart>
                                        <FcLike></FcLike>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Shop;