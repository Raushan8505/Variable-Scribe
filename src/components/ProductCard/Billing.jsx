import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import "./ProductCard.css";
import { getPost } from '../Redux/productAction';
import { ADD, REMOVE } from '../Redux/productActionTypes';
import Footer from '../Atlasian_Homepage/Footer';
import ProductNavbar from './ProductNavbar';
import { MdDelete } from "react-icons/md";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import load from "../../assets/loading.gif"

function Billing() {
    const val = useSelector((state) => state.product?.todos);
    const cart = useSelector((state) => state?.cart);
    const isLoading = useSelector((state)=>state.product.loading)
    const [total, setTotal] = useState(0);
    const {isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    // console.log(cart);
    const dispatch = useDispatch();
    useEffect(() => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
    }, [cart]);

    useEffect(() => {
        dispatch(getPost());
    }, [dispatch])

    if (isLoading) {
        return (
         <>
         <ProductNavbar/>
        <div className='load'>
            <div><img src={load} alt="Loader" /></div>
        </div>
        <Footer/>
        </>
        )
      }

    const handleProceedToPayment = () => {
        if (cart.length > 0) {
            navigate(`/triloHome/payment?total=${total}`);
        } else {
            alert('Your cart is empty. Add products to proceed.');
        }
    };
    
    return (
        <>
        <ProductNavbar isAuthenticated={isAuthenticated}/>
        <div className='Maincon'>
            <div className='text8'>
                {val?.map((item) => (
                    <Card key={item.id} className=" text">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body className='bo'>
                            <img className='rimg' src={item.image} alt="" />
                            <div style={{display:"flex", flexDirection:"column", gap:"5%"}}>
                                <Card.Title>{item.name}</Card.Title>
                                <p>{item.title}</p>
                                <Card.Text>
                                    {item.content}
                                </Card.Text>
                                <h5><strong>₹: {item.price}</strong></h5>
                                <button className='circle' onClick={() => dispatch({ type: ADD, payload: item })}>Buy</button>
                                {/* <button className='circle'>-1</button> */}
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>

                    //   </div>
                ))}
            </div>   
            <Card className="textRight">
                <Card.Header></Card.Header>
                <div className='rightScroll'>
                {cart?.map((item)=>(
                    <>
                <Card.Body key={item.id} className='bo'>
                    <img src={item.image} className='smallimg' alt="" />
                    <div>
                    <strong>{item.name}</strong>
                    <p>
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                    <em>Price: {item.price}</em>
                     <button className='cartright' onClick={() => dispatch({ type: ADD, payload: item })}>+1</button>
                    <button className='cartright' onClick={()=>dispatch({type:REMOVE, payload:item.id})}>-1</button>
                    <span>Quantity: <b>{item.quantity}</b></span>
                    
                    </div>
                </Card.Body>
                <hr />
                </>
                ))}
                </div>
                <Card.Footer className='FootPrice'>
                   <h6>Total Product: <strong>{cart.length}</strong></h6>  
                   <h6>Total Price: <strong>{total}</strong></h6> 
                    </Card.Footer>
                    <button  onClick={handleProceedToPayment} className='proceed-to-pay'>Proceed to Pay</button>
            </Card>
        </div>
        <Footer/>
        </>
    )
}

export default Billing 