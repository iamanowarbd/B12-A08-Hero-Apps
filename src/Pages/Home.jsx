import React from 'react';
import Banner from './Banner';
import { data, useLoaderData } from 'react-router';
import AllAppsData from '../../public/AllAppsData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const AllAppsData = useLoaderData()
    console.log(AllAppsData)

    return (
        <>
            <Banner></Banner>
            <div className='p-10 text-center justify-center'>
                <h1 className='text-5xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='pt-5 text-xl text-[#627382] '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='p-10 flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center'>
                    {AllAppsData.slice(0, 8).map((data) => (
                        <div
                            key={data.id}
                            className="w-70 h-90 bg-white width shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-500"
                        >
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-65 h-80 rounded-xl object-cover mb-4"
                            />
                            <h2 className="text-lg font-bold text-gray-800 mb-1 self-start">
                                {data.title}
                            </h2>
                            {/* <p className="text-sm text-gray-500 mb-2">{data.companyName}</p>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {data.description}
                        </p> */}
                            <div className="flex justify-between items-center text-[#00D390]  mt-2 w-full">
                                <button className=" bg-[#F1F5E8] rounded-sm px-1 font-bold" >
                                    <span className="text-[#00D390]"><FontAwesomeIcon icon={faDownload} /><span className=""></span>{data.downloads}</span>
                                </button>
                                <button className=" bg-[#FFF0E1] rounded-sm px-1 font-bold"> <span className="text-[#ff8811]"><FontAwesomeIcon icon={faStar} /> {data.ratingAvg} </span>
                                </button>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
            <div className='pb-10 pt-5 text-center justify-center items-center'>
                <a href='./Apps' className='btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-lg'>
                    Show all
                </a>
            </div>


        </>
    );
};

export default Home;