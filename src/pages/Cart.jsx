import React from "react";
import "../styles/cart.css"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/CommonSection"
import { Container,Row,Col } from "reactstrap";

import {motion} from "framer-motion"
import {cartActions} from "../redux/slices/cartSlice"
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector(state=> state.cart.cartItems);
    const totalAmount = useSelector(state=> state.cart.totalAmount);


    return (
        <Helmet title='Carrito'>

            <CommonSection title='Carrito de Compras'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {cartItems.lenth ===0 ? ( 
                            <h2 className="fs-4 text-center">¡No se ha añadido ningún producto a su carrito!</h2> 
                            ) : (                             
                            <table className="table bordered">
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Unidades</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item,index)=>(
                                        <Tr item={item} key={index}/>
                                ))}
                            </tbody>
                        </table>
                        )}                    
                    </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">Subtotal</h6>
                                <span className="fs-4 fw-bold">${totalAmount}</span>
                            </div>
                            <p className="fs-6 mt-2">Impuestos y gastos de envío</p>
                            <div>
                                <button className="buy__btn w-100"><Link to='/checkout'>Confirmar Compra</Link></button>
                                <button className="buy__btn w-100 mt-3"><Link to='/shop'>¡Compra más!</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = ({item})=>{

        const dispatch = useDispatch()

        const deleteProduct = ()=>{
            dispatch(cartActions.deleteItem(item.id))
        }
        return (
        <tr>
        <td>
            <img src={item.imgUrl} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>${item.price}</td>
        <td>{item.quantity}Und/s</td>
        <td>
            <motion.i whileTap={{ scale: 1.2}} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i>
        </td>
        </tr>
    );
};

export default Cart;