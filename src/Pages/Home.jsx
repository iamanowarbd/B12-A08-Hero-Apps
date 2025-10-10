import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import AllAppsData from '../../public/AllAppsData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import AppsCard from '../Components/AppsCard';

const Home = () => {
    const AllAppsData = useLoaderData();
    const HomeApp = AllAppsData.slice(0, 8);
    console.log(AllAppsData)

    return (
        <>
            <Banner></Banner>
            <div className="p-10 text-center justify-center">
                <h1 className="text-5xl font-bold text-[#001931]">Trending Apps</h1>
                <p className="pt-5 text-xl text-[#627382]">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className="p-10 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
                    {HomeApp.map((AppData) => (
                        <AppsCard key={AppData.id} AppData={AppData} />
                    ))}
                </div>
            </div>
            <div className="pb-10 pt-5 text-center">
                <a
                    href="./Apps"
                    className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-lg px-6 py-2"
                >
                    Show all
                </a>
            </div>
        </>
    );
};

export default Home;