import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faStar } from '@fortawesome/free-solid-svg-icons';

const AppsCard = ({ AppData }) => {
  return (
    <div
      className="w-70 h-90 bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-500"
    >
      <img
        src={AppData.image}
        alt={AppData.title}
        className="w-65 h-80 rounded-xl object-cover mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-1 self-start">
        {AppData.title}
      </h2>
      <div className="flex justify-between items-center text-[#00D390] mt-2 w-full">
        <button className="bg-[#F1F5E8] rounded-sm px-2 font-bold">
          <FontAwesomeIcon icon={faDownload} className="mr-1" />
          {AppData.downloads}
        </button>
        <button className="bg-[#FFF0E1] rounded-sm px-2 font-bold">
          <span className="text-[#ff8811]">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            {AppData.ratingAvg}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AppsCard;