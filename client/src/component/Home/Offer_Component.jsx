import { NavLink } from "react-router-dom";


const Offers = ()=>{
    return(
        <>
         {/* Services Card */}
         <div className="col-12 mb-5 my-5">
                    <h1 className="display-6 fw-bolder text-center">Our Services</h1>
                    <center><hr width="12%" /></center>
                </div>
         <div class="container-fluid pt-5">
                        <div class="row px-xl-5 pb-3">
                            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div class="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                    {/* <i className="fa fa-check text-primary m-0 mr-5 fa-2xl"></i> */}
                                    <i class="fa-solid fa-check fa-2xl"></i>
                                    <h5 className="font-weight-semi-bold m-0 m-2">Quality Product</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                    {/* <i className="fa fa-shipping-fast text-primary m-0 mr-2 fa-2xl"></i> */}
                                    <i class="fa-solid fa-truck-fast fa-2xl"></i>
                                    <h5 className="font-weight-semi-bold m-0 m-2">Free Shipping</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                    {/* <i className="fas fa-exchange-alt text-primary m-0 mr-3 fa-2xl"></i> */}
                                    <i class="fa-solid fa-arrow-right-arrow-left fa-2xl"></i>
                                    <h5 className="font-weight-semi-bold m-0 m-2">14-Day Return</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                    <i class="fa-solid fa-phone-volume fa-2xl"></i>
                                    <h5 className="font-weight-semi-bold m-0 m-2">24/7 Support</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Featured Products */}
                <div className="col-12 mb-5 my-5">
                    <h1 className="display-6 fw-bolder text-center">Featured Products</h1>
                    <center><hr width="12%" /></center>
                </div>
                <div className="offers-product mb-5">
                    <img src="/assets/product-6.jpg" alt="offer" />
                    <img src="/assets/iphone1.jfif" alt="offer" />
                    <img src="/assets/mackbook.jfif" alt="offer" />
                    <img src="/assets/specialtshirt.jpg" alt="offer" />
                    <img src="/assets/tshirt.png" alt="offer" />
                    <img src="/assets/product-6.jpg" alt="offer" />
                </div>
                {/* New Arrivals */}
                <div className="backgraound">
                    <div className="container">
                        <h1> New Arrivals </h1>
                        <h3>Discover a world of quality products designed</h3>
                        <h3>Elevate your Lifestyle with our collections</h3>
                        <NavLink to="/products"><button className="button-28">Shop Now</button></NavLink>
                    </div>
                </div>

                {/* Special Offer */}
                <div className="col-12 mb-5 my-5">
                            <h1 className="display-6 fw-bolder text-center">Special Offers</h1>
                            <center><hr width="12%" /></center>
                </div>

                <div className="special-product">
                    <img src="/assets/cloth2.png" alt="offer" />
                    <img src="/assets/cloths.jpg" alt="offer" />
                    <img src="/assets/coupens2.jpg" alt="offer" />
                    <img src="/assets/coupens3.jpg" alt="offer" />
                </div>
        </>
    )
};

export default Offers;