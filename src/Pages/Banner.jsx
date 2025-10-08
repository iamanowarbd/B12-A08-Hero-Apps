import React from 'react';
import GooglePlay from '../assets/go-pl.svg'
import AppStore from '../assets/ap-st.svg'
import Hero from '../assets/hero.png'

const Banner = () => {
    return (
        <>
            <div className='m-8 justify-center items-center'>
                <div>
                    <h1 className='text-[#001931] text-7xl font-bold text-center'>We Build
                        <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            <br />  Productive <span></span>
                        </span>
                        Apps
                    </h1>
                    <p className='pt-10 text-center'> At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='p-10 flex gap-5 justify-center items-center'>
                    <img src={GooglePlay} alt="" />
                    <img src={AppStore} alt="" />
                </div>

            </div>
            <div className='flex items-center justify-center'>
                <img className='max-w-3xl md:mx-auto' src={Hero} alt="" />
            </div>

            <div className='text-center items-center justify-center bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white'>
                <div>
                    <h2 className='pt-10 text-4xl font-bold'>Trusted by Millions, Built for You</h2>
                </div>
                <div className='flex items-center justify-center text-center pb-5'>
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
        </>
    );
};

export default Banner;