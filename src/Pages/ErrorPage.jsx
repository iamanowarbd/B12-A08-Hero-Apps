import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Error from '../assets/error-404.png';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar />
            <div>
                {error.message}
            </div>
            <div className='items-center justify-center'>
                <img src={Error} alt="" />
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;