import React from 'react'
import "./checkout.css"
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/NavbarNew/NavbarResp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Checkout = () => {
    const state = useSelector((state) => state.handleCart)

    var total = 0;
    const itemList = (item) => {
        total = total + ((item.price) * item.qty);
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm py-3">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    //send mail through mail
    state.map(itemList);
    const email = localStorage.getItem('email');
    const notify = () => toast.success('Your Payment Successfully Completed!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const paymentHandler = () => {
        axios.post("http://localhost:3001/checkout", { email, total })
            .then(res => {
                console.log(`Order successful and send mail`, res)
            })
            .catch((err) => { console.log(err) })
        notify();
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="container my-5">
                    <center><h2 className='mb-3'>Shipping Information</h2></center>
                    <div className="d-flex flex-column-reverse justify-content-center">
                        <div className="col-md-5 col-lg-8 order-md-last my-5 mx-5">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Your cart</span>
                                <span className="badge bg-primary rounded-pill">{state.length}</span>
                            </h4>
                            <ul className="list-group mb-3">
                                {state.map(itemList)}

                                <li className="list-group-item d-flex justify-content-between py-3">
                                    <span>Total (USD)</span>
                                    <strong>${total}</strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" required />
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-7 col-lg-8  mx-5">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="Enter Your Name" required />

                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">@</span>
                                            <input type="text" className="form-control" id="username" placeholder="Username" required />
                                            <div className="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address htmlFor shipping updates.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" required />
                                    </div>

                                    <div className="col-md-5">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <select className="form-select" id="country" required="">
                                            <option value="">Choose...</option>
                                            <option>India</option>
                                            <option>United States</option>
                                            <option>UK</option>
                                            <option>Australia</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select className="form-select" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>Gujarat</option>
                                            <option>Rajasthan</option>
                                            <option>Maharashtra</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Tamilnadu</option>
                                            <option>Delhi</option>
                                            <option>Panjab</option>
                                            <option>Keral</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="same-address" required />
                                    <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info" required />
                                    <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
                                </div>

                                <hr className="my-4" />

                                <h4 className="mb-3">Payment</h4>

                                <div className="my-3">
                                    <div className="form-check">
                                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" disabled />
                                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" disabled />
                                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="form-check">
                                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="paypal">Cash On Delivery</label>
                                    </div>
                                </div>

                                <button
                                    className="button-36 w-40 my-5"
                                    onClick={() => notify()}
                                    onSubmit={() => paymentHandler()}
                                >
                                    Continue to checkout
                                </button>
                            </form>
                            <hr className="my-4" />

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </>
    )
}

export default Checkout;