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
            {/* <div>
                {error.message}
            </div> */}
            <div className='m-10 flex flex-col items-center justify-center'>
                <img src={Error} alt="" />
                <h1 className="text-5xl font-bold m-4">Oops, page not found!</h1>
                <p className="font-medium text-md m-3 text-gray-400">{error.message} The page you are looking for is not available.</p>
                
                <a
                    href="./Apps"
                    className="mt-5 btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-lg px-6 py-2"
                >Go Back</a>
            </div>
            <Footer />
        </>
    );
}

export default ErrorPage;