import React from 'react';
import Banner from './Banner';
import { data, useLoaderData } from 'react-router';
import AllAppsData from '../../public/AllAppsData.json'

const Home = () => {
    const AllAppsData = useLoaderData()
    console.log(AllAppsData)

    return (
        <>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {AllAppsData.slice(0, 9).map((data) => (
                    <div
                        key={data.id}
                        className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-32 h-32 rounded-xl object-cover mb-4"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">
                            {data.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">{data.companyName}</p>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {data.description}
                        </p>
                        <div className="text-sm text-gray-700">
                            ⭐ {data.ratingAvg} • {data.downloads.toLocaleString()} downloads
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default Home;