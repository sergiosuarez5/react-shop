import React, {useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList"

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=>{

        const filterValue = e.target.value
        if(filterValue==='sofa'){
            const filteredProducts = products.filter(item=> item.category==='sofa')

            setProductsData(filteredProducts);
        };

        if(filterValue==='mobile'){
            const filteredProducts = products.filter(item=> item.category==='mobile')

            setProductsData(filteredProducts);
        }
        if(filterValue==='silla'){
            const filteredProducts = products.filter(item=> item.category==='silla')

            setProductsData(filteredProducts);
        }
        if(filterValue==='watch'){
            const filteredProducts = products.filter(item=> item.category==='watch')

            setProductsData(filteredProducts);
        }
        if(filterValue==='wireless'){
            const filteredProducts = products.filter(item=> item.category==='wireless')

            setProductsData(filteredProducts);
        }

    };

    const handleSearch = e=>{
        const searchTerm = e.target.value
        
        const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }

    return (
    <Helmet title='Catálogo'>
            <CommonSection title="Catálogo" />

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='3'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>Filtrar por categoría</option>
                                    <option value="sofa">Sofas</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="silla">Sillas</option>
                                    <option value="watch">Reloj</option>
                                    <option value="wireless">Inalámbrico</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='3'>
                        <div className="filter__widget">
                                <select>
                                    <option>Ordenar por</option>
                                    <option value="ascending">Ascendente</option>
                                    <option value="descending">Descendente</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="search__box">
                                <input type="text" placeholder="Buscar......" onChange={handleSearch} />
                                <span>
                                <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section>
                <Container>
                    <Row>
                        {
                            productsData.length === 0? <h1>¡No se encuentran productos!</h1>
                            : <ProductsList data={productsData}/>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;