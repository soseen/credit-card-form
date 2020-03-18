import React from 'react';
import {Link} from 'react-router-dom';
import './ErrorRoute.css';



const ErrorRoute = () => {

    return(
        <div className='error-route-wrapper'>
            <h1>Error 404. Page not found...</h1>
            <Link to='/credit-card-form/'>
                <button className="btn-find-route">Return</button>
            </Link>
        </div>
    )
}

export default ErrorRoute;