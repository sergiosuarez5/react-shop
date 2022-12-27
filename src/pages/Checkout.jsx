import React from "react";
import { Container,Row,Col, Form, FormGroup } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { useSelector } from "react-redux";


const Checkout = () => {

    const totalQty = useSelector(state=>state.cart.totalQuantity)
    const totalAmount = useSelector(state=>state.cart.totalAmount)

    return (
        <Helmet title="Finalizar Compra">
            <CommonSection title="Finalizar Compra"/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className="mb-4 fw-bold">Información de facturación</h6>
                        
                        <Form className="billing__form">
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Ingrese su nombre" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="email" placeholder="Ingrese su Email" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="number" placeholder="Ingrese su Número Celular" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Ingrese su Dirección" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Ingrese la Ciudad" />
                            </FormGroup>
                            <FormGroup className="form__group">
                                <input type="text" placeholder="Ingrese el Cod. Postal" />
                            </FormGroup>
                        </Form>
                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Total Und/s: <span>{totalQty} Unidades</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6>Envío: <br /> <span>Envío gratis</span><span>$0</span></h6>
                                <h4>Costo total: <span>${totalAmount} USD</span></h4>
                                <button className="buy__btn auth__btn w-100">
                                    Realizar pedido
                                </button>
                            </div>

                        </Col>
                        <Col lg='8'>

                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Checkout;