import { NavLink } from "react-router-dom";
import "./error.css"
const NotFound = () =>{
    return(
        <>
            <div className="container-err">
            <div className="error-text">
                <NavLink to="/home">Go To Home Page</NavLink>
            </div>
            </div>
        </>
    )
}

export default NotFound;