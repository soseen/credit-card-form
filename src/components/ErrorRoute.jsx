import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ErrorRoute.scss'


const ErrorRoute = () => {

    return(
        <div className='error-route-container'>
            <h1>Error 404. Page not found...</h1>
            <Link to='/credit-card-form/'>
                <button className="btn-find-route">Return</button>
            </Link>
        </div>
    )
}

export default ErrorRoute;