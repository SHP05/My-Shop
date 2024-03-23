import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "./product.css";
import ProductSearch from "./Filter";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/NavbarNew/NavbarResp";

const Products = () => {
    const [data, setData] = useState([]);
    const [filters, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

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
                    <div className="buttons d-wrap gap-5 justify-content-evenly mb-2 pb-5">
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => setFilter(data)}>All</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("men's clothing")}>Man's Cloth</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("women's clothing")}>Women's cloth</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>Electronics</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>Shoes</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>T-Shirst</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>Mobile</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>MacBook</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>Laptop</button>
                        <button className="button-28 me-2 mx-4 my-2" onClick={() => filterProducts("electronics")}>Pendrive</button>
                    </div>
                    <ProductSearch products={filters} />
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
