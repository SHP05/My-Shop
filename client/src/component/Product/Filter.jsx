import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const ProductSearch = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
      <input
        type="search"
        className="h4 p-4 w-50"
        placeholder="Search Products"
        value={searchQuery}
        onChange={handleSearch}
        id="search-input"  
      />
      </div>
      <div className="main-container">
        {
          filteredProducts.length === 0 ?
          <img src="/assets/NoProducts.jpg" title="" alt=""/>:
        filteredProducts.map((product) => (
           <div className="card-wrapper" key={product.id}>
           <div className="cards"  data-aos="flip-up" data-aos-duration="1000">
               <div className="image-wrapper">
                   <img src={product.image} alt={product.title} />
               </div>
               <div className="content-wrapper">
                   <div className="title">
                       <h4>{product.title.substring(0, 20)}...</h4>
                   </div>
                   <div className="price">
                       ${product.price}
                   </div>
                   <div className="actions">
                       <NavLink to={`/products/${product.id}`}>
                           <button id="cart" className="button flip green-solid cart">
                               <span className="front">Buy Now</span>
                               <span className="backside">Added</span>
                           </button>
                       </NavLink>
                   </div>
               </div>
           </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearch;
