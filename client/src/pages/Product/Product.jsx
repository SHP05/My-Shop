import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
// import Notifications, {notify} from 'react-notify-toast';
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/NavbarNew/NavbarResp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// https://fkhadra.github.io/react-toastify/introduction/

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    //toastify
    const notify = () => toast.success("Product Added Successfully!",
        {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
    );

    const disspach = useDispatch();

    const addProduct = (product) => {
        disspach(addCart(product));
        console.log(product);
        // notify.show("Product Added into Cart",'success')
        notify();
    }

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(true);
        }
        getProducts();
    },[loading]);

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
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 prod-img" key="">
                    <img src={product.image} alt={product.title} height={350} width={350} style={{ "border-radius": "10px" }} />
                </div>
                <div className="col-md-6" key="">
                    <h4 className=" text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h3 className="text-uppercase">{product.title}</h3>
                    <p className="lead">
                        {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className=" display-6  fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="button-28 m-2" onClick={() => addProduct(product)}>Add To Cart</button>
                    <NavLink to="/cart"><button className="button-28 m-2">Go to cart</button></NavLink>
                </div>
            </>
        )
    }

    return (
        <main>
            <div>
                <Navbar />
                <div className="container py-5">
                    <div className="row" >
                        {loading ? <Loading /> : <ShowProduct />}
                        <ShowProduct />
                    </div>
                </div>
                <Footer />
                <ToastContainer />
            </div>
        </main>
    )
}

export default Product;
