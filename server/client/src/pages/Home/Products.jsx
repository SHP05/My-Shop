import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import "../Product/product.css"
import Footer from "../../component/Footer/Footer";

const HomeProducts = () => {
    const [data, setData] = useState([]);
    const [filters, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`${window.location.origin}/products`);
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            if (componentMounted) {
                console.log(filters)
                console.log(data)
            }

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

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
        )
    }

    const ShowProducts = () => {
        return (
            <>                
                <div className="main-container">
                {filters.map((product) => {
                    return (
                        <>
                            <div className="card-wrapper">
                                <div className="cards" data-aos="flip-up" data-aos-duration="1000">
                                    <div className="image-wrapper">
                                        <img src={product.image} alt="product" />
                                    </div>
                                    <div className="content-wrapper" key={product.id}>
                                        <div className="title">
                                            <h4>{product.title.substring(0,20)}...</h4>
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
                        </>
                    )
                })
                }
                </div>             
            </>
        )
    }
    return (
        <>
        {
            loading ? 
            <div className="loader-container">
                <div class="custom-loader"></div>
            </div>
            :
            <main>
            <div>
                <div className="py-2 my-5 products w-100 p-3">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className="display-6 fw-bolder text-center">Regular Products</h1>
                            <center><hr width="12%" /></center>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
                <Footer/>
            </div>
            </main>
        }
        </>
    )
}

export default HomeProducts;