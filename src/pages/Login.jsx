import React, { useState} from "react";
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

import '../styles/login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return ( <Helmet title='Login'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className="m-auto text-align-center">
                            <h3 className="fw-bold fs-4 text-center">Ingresar</h3>
                            <Form className="auth__form">
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="Ingresa tu email" value={email} onChange={e=> setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="password" placeholder="Ingresa tu contraseña"value={password} onChange={e=> setPassword(e.target.value)} />
                                </FormGroup>

                                <button type="submit" className="buy__btn auth__btn">
                                    Ingresar
                                </button>
                                <p>
                                    ¿No tienes cuenta?{" "} 
                                    <Link to="/signup" >Crea una cuenta</Link>
                                </p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
    </Helmet>
        
    )
}

export default Login;