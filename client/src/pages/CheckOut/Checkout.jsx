import "./checkout.css"
import Navbar from '../../component/Navbar/NavbarNew/NavbarResp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BillingForm from "./BillingForm";
import Orders from "./Orders";

const Checkout = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="container my-5">
                    <center><h2 className='mb-3'>Shipping Information</h2></center>
                    <div className="d-flex flex-column-reverse justify-content-center">
                        <Orders/>
                        <BillingForm/>
                    </div>
                </div>
                <ToastContainer />
            </main>
        </>
    )
}

export default Checkout;