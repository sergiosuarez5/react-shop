import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import products from '../assets/data/products'

import Helmet from "../components/Helmet/Helmet";
import  "../styles/home.css";

import { Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock from "../components/UI/Clock";

import counterImg from '../assets/images/counter-timer-img.png'


const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])

    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item)=> item.category === "silla"
        );

        const filteredBestSalesProducts = products.filter(
            (item)=> item.category === "sofa"
        );

        const filteredMobileProducts = products.filter(
            (item)=> item.category === "mobile"
        );

        const filteredWirelessProducts = products.filter(
            (item)=> item.category === "wireless"
        );

        const filteredPopularProducts = products.filter(
            (item)=> item.category === "watch"
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    },[]);
    
    return (
    <Helmet title={"Inicio"}>
        <section className="hero__section">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <p className="hero__subtitle">¡Gracias! {year}</p>
                        <h2>¡Variedad de productos!</h2>
                        <p>Un buen artículo para tu día a día. <br /> ¡Realizamos envíos a todos los países! <br />¿Qué esperas?</p>
                        <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>¡Comprar Ahora!</Link></motion.button>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={heroImg} alt="" />
                    </div>
                    </Col>
            </Row>
        </Container>
        </section>

        <Services/>
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                    <h2 className="section__title">¡Excelentes Precios!</h2>
                    </Col>
                    <ProductsList data={trendingProducts} />
                </Row>
            </Container>
        </section>

        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">¡Más Vendido!</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts}/>
                </Row>
            </Container>
        </section>

        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='12' className="count__down-col">
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">¡Oferta Limitada!</h4>
                            <h3 className="text-white fs-5 mb-3">Sillón Edición Interior</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale: 1.2 }} className="buy__btn store__btn">
                            <Link to="/shop">Visitar Tienda</Link>
                        </motion.button>
                    </Col>
                    <Col lg='6' md='12' className="text-end counter__img">
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="new__arrivals">
            <Container>
                <Row>
                <Col lg="12" className="text-center mb-5">
                        <h2 className="section__title">¡Recién llegado!</h2>
                    </Col>
                    <ProductsList data={mobileProducts}/>
                    <ProductsList data={wirelessProducts}/>
                </Row>
            </Container>
        </section>

        <section className="popular__category">
        <Container>
                <Row>
                <Col lg="12" className="text-center mb-5">
                        <h2 className="section__title">¡Populares del momento!</h2>
                    </Col>
                    <ProductsList data={popularProducts}/>
                </Row>
            </Container>
        </section>

    </Helmet>
    );
};

export default Home;