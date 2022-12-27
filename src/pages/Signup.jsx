import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadUrl } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase/firebase.config";
import { storage } from "../firebase/firebase.config";
import { db } from "../firebase/firebase.config";

import { toast } from "react-toastify";

import "../styles/login.css";
import { useNavigate } from "react-router-dom";
export { async } from "@firebase/util";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const signup = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    toast.error(error.message);
                },
                () => {
                    getDownloadUrl(uploadTask.snapshot.ref).then(async (downloadUrl) => {
                        // update user profile
                        await updateProfile(user, {
                            displayName: username,
                            photoURL: downloadUrl,
                        });

                        // store user data in firestore database
                        await setDoc(doc(db, "users", user.uid), {
                            uid: user.uid,
                            displayName: username,
                            email,
                            photoURL: downloadUrl,
                        });
                    });
                }
            );

            setLoading(false)
            toast.success('Cuenta creada')
            navigate('/login')
        } catch (error) {
            setLoading(false)
            toast.error("Algo salió mal");
        }
    };

    return (
        <Helmet title="Signup">
            <section>
                <Container>
                    <Row>
                        {
                            Loading? <Col lg='12' className="text-center"><h5 className="fw-bold">Cargando.....</h5></Col> :
                            <Col lg="6" className="m-auto text-align-center">
                            <h3 className="fw-bold fs-4 text-center">Regístrate</h3>
                            <Form className="auth__form" onSubmit={signup}>
                                <FormGroup className="form__group">
                                    <FormGroup className="form__group">
                                        <input
                                            type="text"
                                            placeholder="Ingrese Nombre de Usuario"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </FormGroup>
                                    <input
                                        type="email"
                                        placeholder="Ingresa su email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Ingrese su contraseña"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input
                                        type="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </FormGroup>
                                <button type="submit" className="buy__btn auth__btn">
                                    Crear cuenta
                                </button>
                                <p>
                                    ¿Ya tiene una cuenta?{" "}
                                    <Link to="/login">Crear una cuenta.</Link>
                                </p>
                            </Form>
                        </Col>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Signup;
