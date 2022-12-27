import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import "../styles/product-details.css"
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductsList"

const ProductDetails = () => {

    const [tab, setTab] = useState('desc')
    const [setRating] = useState(null)
    const { id } = useParams();
    const product = products.find((item) => item.id === id);

    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

    const relatedProducts = products.filter(item=> item.category===category)

    return (
        <Helmet title={productName}>
            <CommonSection />

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                    <div>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-half-s-fill"></i></span>
                                    </div>
                                    <p>(<span>{avgRating}</span> Valoraciones)</p>
                                </div>

                                <span className="product__price">${price}</span><br />
                                <span>    Categoria: {category}</span>
                                <p className="mt-3">{shortDesc}</p>

                                <motion.button className="buy__btn" whileTap={{ scale: 1.2 }}>
                                    Agregar producto
                                </motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc' ? 'active__tab' : ""}`} onClick={() => setTab('desc')}> Descripción </h6>
                                <h6 className={`${tab === 'rev' ? 'active__tab' : ""}`} onClick={() => setTab('rev')}>Reseñas ({reviews.length})</h6>
                            </div>
                            {tab === 'desc' ? <div className="tab__content mb-5">
                                <p>{description}</p>
                            </div> : (
                                <div className="product__review mt-5">
                                    <div className="review__wrapper">
                                        <ul>
                                            {reviews?.map((item, index) => (
                                                <li kew={index} className="mb-4">
                                                    <h6>Pablo Swheller</h6>
                                                    <span>{item.rating} ( media)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))
                                            }
                                        </ul>

                                        <div className="review__form">
                                            <form action="">
                                                <h4>¡Deja tu experiencia!</h4>
                                                <div className="form__group">
                                                    <input type="text" placeholder="Ingresa tu nombre" />
                                                </div>

                                                <div className="form__group d-flex align-items-center gap-5">
                                                    <span onClick={()=> setRating(1)}><i class="ri-star-s-fill"></i></span>
                                                    <span onClick={()=> setRating(2)}><i class="ri-star-s-fill"></i></span>
                                                    <span onClick={()=> setRating(3)}><i class="ri-star-s-fill"></i></span>
                                                    <span onClick={()=> setRating(4)}><i class="ri-star-s-fill"></i></span>
                                                    <span onClick={()=> setRating(5)}><i class="ri-star-half-s-line"></i></span>
                                                </div>

                                                <div className="form__group">
                                                    <textarea rows={4} type="text" placeholder="Escribir mensaje" />
                                                </div>
                                                <button type="submit" className="buy__btn">Enviar</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Col>

                        <Col lg='12' className="mt-5">
                            <h2 className="related__title">También te puede interesar</h2>
                        </Col>

                        <ProductsList data={relatedProducts}/>
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
}

export default ProductDetails;