import React from 'react'
import ProductNavbar from './ProductNavbar'
import Footer from '../Atlasian_Homepage/Footer'
import "./ProductCard.css"
import Carousel from 'react-bootstrap/Carousel';


import { useAuth0 } from '@auth0/auth0-react'

function CommonRoutes() {
    const {isAuthenticated } = useAuth0();
  return (
    <>
    <ProductNavbar isAuthenticated={isAuthenticated}/>
    <div style={{marginBottom:"20px"}}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"400px"}}
          src="https://img.freepik.com/free-psd/creative-co-working-social-media-posts_23-2149000362.jpg?size=626&ext=jpg&ga=GA1.1.1840572523.1702298148&semt=ais"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:"400px"}}
          src="https://img.freepik.com/free-psd/hand-drawn-marketing-instagram-posts-template_23-2149991341.jpg?size=626&ext=jpg&ga=GA1.1.1840572523.1702298148&semt=ais"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 " style={{height:"400px"}}
          src="https://img.freepik.com/free-vector/hand-drawn-hospital-template-design_23-2150340790.jpg?size=626&ext=jpg&ga=GA1.1.1840572523.1702298148&semt=ais"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div style={{width:"80%", margin:"auto"}}>
        <div className='customer' style={{display:"flex", padding:"20px", border:"1px solid", borderRadius:"10px", marginBottom:"20px"}}>
        <strong style={{fontSize:"20px"}}>Customer review</strong>
            <div style={{display:"flex", alignItems:"center"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem odit alias accusamus totam deserunt ea reprehenderit dignissimos rerum voluptas, voluptatum assumenda laboriosam, officia perspiciatis, dolore quae. Et, temporibus expedita libero quidem eveniet sed voluptates. Blanditiis ipsam consequuntur vero debitis fuga non, officiis eaque quidem voluptate autem, totam, assumenda explicabo fugit eum illum cupiditate libero eligendi labore!</div>
            <hr />
            <div style={{border:"1px solid"}}><img src="https://assets-global.website-files.com/5f32b7ee5db75ed36f087b7c/64f88f297a42611aa2e7ba1e_Bloom%20Studio-p-1600.jpg" alt="" /></div>
        </div>
        <div className='customer' style={{display:"flex", padding:"20px", border:"1px solid", borderRadius:"10px"}}>
        <strong style={{fontSize:"20px"}}>Customer review</strong>
            <div style={{display:"flex", alignItems:"center"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem odit alias accusamus totam deserunt ea reprehenderit dignissimos rerum voluptas, voluptatum assumenda laboriosam, officia perspiciatis, dolore quae. Et, temporibus expedita libero quidem eveniet sed voluptates. Blanditiis ipsam consequuntur vero debitis fuga non, officiis eaque quidem voluptate autem, totam, assumenda explicabo fugit eum illum cupiditate libero eligendi labore!</div>
            <hr />
            <div style={{border:"1px solid"}}><img src="https://assets-global.website-files.com/5f32b7ee5db75ed36f087b7c/64f88f297a42611aa2e7ba1e_Bloom%20Studio-p-1600.jpg" alt="" /></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default CommonRoutes