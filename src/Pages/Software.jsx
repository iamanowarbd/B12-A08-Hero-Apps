import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

import AllAppsData from '/public/AllAppsData.json'


const Software = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApps, setFilteredApps] = useState(AllAppsData);
    const [error, setError] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const results = AllAppsData.filter((app) =>
            app.title.toLowerCase().includes(value)
        );

        if (results.length > 0) {
            setFilteredApps(results);
            setError('');
        } else {
            setFilteredApps([]);
            setError('NaN');
        }
    };


    // console.log(AllAppsData)

    return (
        <>
            <div className='p-10 text-center justify-center'>
                <h1 className='text-5xl font-bold text-[#001931]'>Our All Applications</h1>
                <p className='pt-5 text-xl text-[#627382] '>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center px-10 mb-6">
                <p className="text-lg font-semibold text-[#001931] px-3 py-1 rounded-md">
                    ({AllAppsData.length}) Apps Found
                </p>
                <input
                    type="text"
                    placeholder="Search apps..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#00D390]"
                />
            </div>

            {error && (
                <div className="text-center text-red-500 font-semibold mb-4">
                    {error}
                </div>
            )}

            <div className='p-10 flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center'>
                    {AllAppsData.map((data) => (
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