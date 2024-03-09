import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./product.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavbarNew/NavbarResp";

const Products = () => {
    const [data, setData] = useState([]);
    const [filters, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const products = await response.json();
            setData(products);
            setFilter(products);
            setLoading(false);
        }
        getProducts();
    }, []);

    const filterProducts = (cat) => {
        const updatedData = data.filter((item) => item.category === cat);
        setFilter(updatedData);
    }

    const handleSearch = (event) => {
        const searchQuery = event.target.value;
        event.preventDefault();
        setQuery(searchQuery);
        const filteredProducts = data.filter(
            (product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilter(filteredProducts);
    };

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <Skeleton />
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <>
                {/* Product Navigation */}
                <div className="product-nav-container">
                    <div className="buttons d-wrap gap-5 justify-content-evenly mb-5 pb-5">
                        <button className="button-28 me-2 mx-4" onClick={() => setFilter(data)}>All</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("men's clothing")}>Man's Cloth</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("women's clothing")}>Women's cloth</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("electronics")}>Electronics</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("electronics")}>Shoes</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("electronics")}>T-Shirst</button>
                        <button className="button-28 me-2 mx-4" onClick={() => filterProducts("electronics")}>Mobile</button>
                        <input
                        type="text"
                        className="input mx-5"
                        placeholder="Search products"
                        value={query}
                        onChange={handleSearch}
                    />
                    </div>
                    {/* Search Bar */}
                   
                </div>
                {/* Product Cards */}
                <div className="main-container">
                    {filters.map((product) => (
                        <div className="card-wrapper" key={product.id}>
                            <div className="cards">
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
            </>
        );
    };

    return (
        <>
            <Navbar />
            <main>
                <div className="py-2 my-5 products w-100 p-3">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 fw-bolder text-center">Products</h1>
                            <center><hr width="12%" /></center>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
};

export default Products;
