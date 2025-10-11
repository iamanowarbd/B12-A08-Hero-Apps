import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import AllAppsData from '/public/AllAppsData.json'
import useApp from '../hooks/useApp';
import LoadingSpinner from '../Components/LoadingSpinner';


const Software = () => {
    const { AppData, loading, error } = useApp();
    const [search, setSearch] = useState('');


    const term = search.trim().toLowerCase();
    const searchedApps = term ?
        AppData.filter(data => data.title.toLowerCase().includes(term)) : AppData;
    const showNoResults = !loading && term && searchedApps.length === 0;
    if (loading) {
        return (
            <div className="p-20 flex justify-center">
                <LoadingSpinner count={8} />
            </div>
        );
    }


    if (error) {
        return (
            <div className="text-center text-red-500 font-semibold p-20">
                Failed to load apps 😢
            </div>
        );
    }


    return (
        <>
            <div className='p-10 text-center justify-center'>
                <h1 className='text-5xl font-bold text-[#001931]'>Our All Applications</h1>
                <p className='pt-5 text-xl text-[#627382] '>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="items-center sm:horizontal text-neutral-content p-5">
                <div className="flex items-center justify-between max-w-[1440px] w-full mx-auto">
                    <p className="text-lg font-semibold text-[#001931] px-3 py-1 rounded-md">
                        ({searchedApps.length}) Apps Found
                    </p>
                    <div className="relative w-full max-w-md">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            placeholder=" Search apps..."
                            value={search}
                            className="w-full max-w-md pl-8 text-gray-800 border border-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                        />

                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                    </div>
                </div>
            </div>


            {showNoResults && (
                <div className="text-center text-red-500 font-semibold mb-4">
                    No results found for "{search}".
                </div>
            )}

            <div className='p-10 flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center'>
                    {/* <LoadingSpinner count={8} /> */}
                    {searchedApps.map((data) => (
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

        </>
    );
};

export default Software;