import addProduct from "../assets/add-product.png"
const Home = () => {
    return (
        <div className="fw29_maincontainer">
          <div  className="fw29_add_product_div flex border-solid">
     <div className="fw29_text"><p>
        Add products to launch your shop, and track your performance.
        </p>
        <button className="add-product">Add a product</button>
        </div>
        <div className="add-product-img">
       <img src={addProduct} alt="" />
     </div>
     </div>
     <div className="fw29_revenue">
      <p>💵Revenue</p>
      <h1>$0</h1>
      <p>🧍🏼Customers</p>
      <h1>1</h1>
      <p>📝 Trasactions</p>
      <h1>1</h1>
     </div>
        </div>  
    )
}

export default Home;