import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './ProductRedux/productAction';
import "./ProductCard.css";

function ProductCard() {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.product?.todos)

    console.log(data);

    useEffect(()=>{
        dispatch(getPost());
     },[dispatch])

    return (
        <div className='flex' >
        {data?.map((item)=>(
        <Card key={item.id} style={{ width: '18rem' }}>
        <Card.Img className='img rimg' variant="top" src={item?.image} alt='Image' />
        <Card.Body>
           <p>{item.title}</p>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.content}
          </Card.Text>
          <Button variant="success">Available</Button>
        </Card.Body>
      </Card>
      ))}
      </div>
    )
}

export default ProductCard;