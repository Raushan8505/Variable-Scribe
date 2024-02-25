import React from 'react'
import ProductNavbar from './ProductNavbar'
import Footer from '../Atlasian_Homepage/Footer'
import "./ProductCard.css"

import { useAuth0 } from '@auth0/auth0-react'

function CommonRoutes() {
    const {isAuthenticated } = useAuth0();
  return (
    <>
    <ProductNavbar isAuthenticated={isAuthenticated}/>
    <div style={{width:"80%", margin:"auto"}}>
        <div className='customer' style={{display:"flex", padding:"20px", border:"2px solid", borderRadius:"10px"}}>
        <strong style={{fontSize:"20px"}}>Customer review</strong>
            <div style={{display:"flex", alignItems:"center"}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem odit alias accusamus totam deserunt ea reprehenderit dignissimos rerum voluptas, voluptatum assumenda laboriosam, officia perspiciatis, dolore quae. Et, temporibus expedita libero quidem eveniet sed voluptates. Blanditiis ipsam consequuntur vero debitis fuga non, officiis eaque quidem voluptate autem, totam, assumenda explicabo fugit eum illum cupiditate libero eligendi labore!</div>
            <hr />
            <div style={{border:"2px solid"}}><img src="https://assets-global.website-files.com/5f32b7ee5db75ed36f087b7c/64f88f297a42611aa2e7ba1e_Bloom%20Studio-p-1600.jpg" alt="" /></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default CommonRoutes