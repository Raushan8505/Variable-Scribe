import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { addProduct, editProduct, getPost } from '../Redux/productAction';
import "./ProductNavbar.css";
import { DELETE_PRODUCT, REMOVE } from '../Redux/productActionTypes';
import Footer from '../Atlasian_Homepage/Footer';
import ProductNavbar from './ProductNavbar';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ProductCard() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product?.todos);
    const val = useSelector((state) => state.addProduct);
    console.log(val);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const {isAuthenticated } = useAuth0();

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        image: '',
        content: '',
        price: ''
    });

    const handleAddModalOpen = () => {
        setFormData({
            id: '',
            name: '',
            title: '',
            image: '',
            content: '',
            price: ''
        });
        setShowAddModal(true);
    };

    const handleEditModalOpen = (product) => {
        setFormData({
            id: product.id,
            name: product.name,
            title: product.title,
            image: product.image,
            content: product.content,
            price: product.price
        });
        setShowEditModal(true);
    };

    const handleModalClose = () => {
        setShowAddModal(false);
        setShowEditModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.id){
            dispatch(editProduct(formData.id, formData))
            .then(()=>{
                dispatch(getPost());
            })
        }
        else{
        dispatch(addProduct(formData))
            .then(() => {
                dispatch(getPost()); // Fetch updated product list after adding
                setFormData({
                    name: '',
                    title: '',
                    image: '',
                    content: '',
                    price: ''
                });
                setShow(false); // Close modal after adding
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            })};
            handleModalClose();
    };


    useEffect(() => {
        dispatch(getPost());
    }, [dispatch])

    return (
        <>
        <ProductNavbar isAuthenticated={isAuthenticated}/>
            <Button style={{ margin: "auto", display: "flex", justifyContent: "center", backgroundColor: "#00bfa5",marginBottom:"15px" }} variant="success" onClick={handleAddModalOpen}>
            <FontAwesomeIcon icon="fa-solid fa-plus" /> Add a Product
            </Button>

              <Modal show={showAddModal || showEditModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{formData.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>

                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            autoFocus
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Title"
                            autoFocus
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image Url"
                            autoFocus
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                        <Form.Label>Content</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Content"
                            autoFocus
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                        />
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Price"
                            autoFocus
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose} style={{backgroundColor:"lightpink"}}>
                                Close
                            </Button>
                            <Button variant="success" type='submit' onClick={handleModalClose} style={{backgroundColor:"green"}}>
                            {formData.id ? 'Save Changes' : 'Add Product'}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal> 
            <div className='fx' >
                {data?.slice().reverse().map((item) => (
                    <Card key={item.id} className='car' style={{ width: '18rem' }}>
                        <Card.Img className='img rimg' variant="top" src={item?.image} alt='Image' />
                        <Card.Body>
                            <Card.Title style={{display:'flex', flexDirection:"column", gap:"5%"}}>{item.name}</Card.Title>
                            <p style={{marginBottom:"10px", display:"flex", justifyContent:"space-between"}}><span>{item.title}</span><strong>₹: {item.price}</strong></p>
                            <Card.Text style={{marginBottom:"10px"}}>
                                {item.content}
                            </Card.Text>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <strong style={{color: "#006400" }}>Available</strong>
                            <Button style={{backgroundColor:"red"}} onClick={()=>dispatch({type:DELETE_PRODUCT, payload:item.id})}>Delete</Button>
                            <Button style={{ backgroundColor: "#00bfa5" }} onClick={() => handleEditModalOpen(item)}>Edit</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Footer/>
        </>
    )
}

export default ProductCard