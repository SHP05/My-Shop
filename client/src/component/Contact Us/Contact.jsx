import React from "react"
import Navbar from "../Navbar/NavbarNew/NavbarResp";
import Footer from "../Footer/Footer";

const Contact = ()=>{
    return(
        <>
        <Navbar/>
        <main className="contactpage">
            <div className="mt-5 p-2">
            
            </div>
            <div className="container form p-5 mt-lg-5 border border-light bg-light shadow-lg borde rounded-3">
                <form action="https://formspree.io/f/mrgwbpoj" method="POST">
                <center><h2>Contact Us</h2></center>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="your name" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput3" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="Email" placeholder="name@example.com" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label" >Enter Your Massege</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" name="massage" rows="3" placeholder="Eneter Yor Massage...." required></textarea>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mt-5 p-2">
            
            </div>
            <Footer/>
        </main>
        </>
    )
}

export default Contact