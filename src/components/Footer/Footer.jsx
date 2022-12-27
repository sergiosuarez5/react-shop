import React from "react";
import './footer.css'
import { Container, Row , Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear()
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' className="mb-4" md='6'>
                    <div className="logo">
                    <i class="ri-shield-check-fill text-info fs-3"></i><h1 className="text-white">S'Outlet</h1><h5>©.</h5>
                    </div>
                    <p className="footer__text mt-4">
                        Un buen artículo para tu día a día.
                    </p>
                </Col>

                <Col lg='3' md='3' className="mb-4">
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">
                            Categorías Top
                        </h4>
                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Mobiles</Link>
                            </ListGroupItem>
                        </ListGroup>

                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Sofas Modernos</Link>
                            </ListGroupItem>
                        </ListGroup>

                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Sillas Interior</Link>
                            </ListGroupItem>
                        </ListGroup>
                        
                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='2' md='3' className="mb-4">
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">
                            Enlaces útiles
                        </h4>
                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/shop'>Catálogo</Link>
                            </ListGroupItem>
                        </ListGroup>

                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/cart'>Carrito</Link>
                            </ListGroupItem>
                        </ListGroup>

                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/login'>Ingresar</Link>
                            </ListGroupItem>
                        </ListGroup>
                        
                        <ListGroup className="mb-0">
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='#'>Políticas</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='3' md='4'>
                <div className="footer__quick-links">
                        <h4 className="quick__links-title">
                            Contacto
                        </h4>
                        <ListGroup className="footer__contact">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-map-pin-line"></i></span>
                                <p>BA,Argentina.</p>
                            </ListGroupItem>
                        

                        
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-phone-line"></i></span>
                                <p>+54-24068870</p>
                            </ListGroupItem>
                        

                        
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <span><i class="ri-mail-line"></i></span>
                                <p>s-outlet@e-commerce.com</p>
                            </ListGroupItem>
                        </ListGroup>
                        
                    </div>
                </Col>
                

                <Col lg='12' >
                    <p className="footer__copywright text-center">
                        Copywright {year} <i class="ri-code-box-line"></i>. <br /> All rights reserved.
                    </p>
                </Col>
            </Row>
        </Container>
        </footer>

};

export default Footer;