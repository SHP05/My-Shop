import "./checkout.css"
import { useSelector } from 'react-redux'

const Orders = () =>{
    const state = useSelector((state) => state.handleCart)
    const name = localStorage.getItem('name');
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
    return(
        <>
             <div className="col-md-5 col-lg-8 order-md-last my-5 mx-5">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Your cart</span>
                                <span className="badge bg-primary rounded-pill">{state.length}</span>
                            </h4>
                            <ul className="list-group mb-3 Bill">
                                <li className="list-group-item d-flex justify-content-between py-3">
                                    <strong> Customer Name : {name}</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between py-3">
                                    <strong>Cart Items</strong>
                                </li>
                                
                                {state.map(itemList)}

                                <li className="list-group-item d-flex justify-content-between py-3">
                                    <span><strong>Total Amount(USD)</strong></span>
                                    <strong>${total}</strong>
                                </li>
                            </ul>
                            
                        </div>
        </>
    )
}

export default Orders;