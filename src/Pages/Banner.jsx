import React from 'react';
import GooglePlay from '../assets/play.svg'
import AppStore from '../assets/app.svg'
import Hero from '../assets/hero.png'

const Banner = () => {
    return (
        <>
        <div className='bg-[#D2D2D2]'>
            <div className=' justify-center items-center'>
                <div>
                    <h1 className='pt-8 text-[#001931] text-7xl font-bold text-center sm:text-4xl'>We Build
                        <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            <br />  Productive <span></span>
                        </span>
                        Apps
                    </h1>
                    <p className='text-[#627382] text-base pt-10 text-center'> At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div>
                    <div className="p-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="p-2  bg-white rounded-lg text-xl font-semibold hover:bg-[#D2D2D2] shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out text-gray-800">
            <a className="flex items-center gap-3" href="#" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlay} alt="Google Play Store" className="w-8 h-8" />
            <span>Google Play</span>
          </a>
          </button>
          <button className="p-2 bg-white rounded-lg text-xl font-semibold
          hover:bg-[#D2D2D2] shadow-md hover:-translate-y-1 transition-all duration-200 ease-in-out text-gray-800">
            <a className="flex items-center gap-3" href="#" target="_blank" rel="noopener noreferrer">
            <img src={AppStore} alt="Apple App Store" className="w-8 h-8" />
            <span>App Store</span>
          </a>
          </button>
        </div>
                </div>

            </div>
            <div className='flex items-center justify-center md:mx-auto sm:max-w-xl'>
                <img className='w-full max-w-3xl md:mx-auto sm:max-w-xl' src={Hero} alt="" />
            </div>

            <div className='text-center items-center justify-center bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white'>
                <div>
                    <h2 className='pt-10 text-4xl font-bold sm:text-2xl '>Trusted by Millions, Built for You</h2>
                </div>
                <div className=' items-center justify-center text-center pb-5 sm:flex flex-row text-2xl'>
                    <div className='p-10'>
                        <p className='text-base'>
                            Total Downloads
                        </p>
                        <h1 className='p-5 text-5xl font-extrabold'>
                            29.6M
                        </h1>
                        <p className='text-base'>
                            21% more than last month
                        </p>
                    </div>
                    <div className='p-10'>
                        <p className='text-base'>
                            Total Reviews
                        </p>
                        <h1 className='p-5 text-5xl font-extrabold'>
                            906K
                        </h1>
                        <p className='text-base'>
                            46% more than last month
                        </p>
                    </div>
                    <div className='p-10'>
                        <p className='text-base'>
                            Active Apps
                        </p>
                        <h1 className='p-5 text-5xl font-extrabold'>
                            132+
                        </h1>
                        <p className='text-base'>
                            31 more will Launch
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Banner;