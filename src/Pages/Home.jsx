import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useApp from '../hooks/useApp';
import LoadingSpinner from '../Components/LoadingSpinner';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    // const [data, setData] = useState()
    const {AppData, loading, error} = useApp();


    if (loading) {
        return <LoadingSpinner count={8} />;
    }
    if (error) {
        return <p className="text-center text-red-500">Failed to load apps 😢</p>;
    }

    const featuredApps = AppData.slice(0, 8);

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
                    {featuredApps.map((app) => (

                        <div
                            key={app.id}
                            className="w-full bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-500"
                        >
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-48 h-48 rounded-xl object-cover mb-4"
                            />
                            <h2 className="text-lg font-bold text-gray-800 mb-1 self-start">
                                {app.title}
                            </h2>
                            <div className="flex justify-between items-center text-[#00D390] mt-2 w-full">
                                <button className="bg-[#F1F5E8] rounded-sm px-1 font-bold">
                                    <span className="text-[#00D390]">
                                        <FontAwesomeIcon icon={faDownload} /> {app.downloads}
                                    </span>
                                </button>

                                <button className="bg-[#FFF0E1] rounded-sm px-1 font-bold">
                                    <span className="text-[#ff8811]">
                                        <FontAwesomeIcon icon={faStar} /> {app.ratingAvg}
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="pb-10 pt-5 text-center">
                <Link

                    className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-lg px-6 py-2"
                    to="./Apps"
                >
                    Show all
                </Link>
            </div>
        </>
    );
};

export default Home;