import { NavLink } from "react-router-dom";
import "./error.css"
const NotFound = () =>{
    return(
        <>
            <div className="container-err">
            <div className="error-text">
                <h1>Whoops!</h1>
                <h3>404 Page Not Found</h3>

                <NavLink to="/home">Go To Home Page</NavLink>
            </div>
            </div>
        </>
    )
}

export default NotFound;