import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterByEndTime = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedendTime, setSelectedendTime] = useState("Akhir Periode");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const endTimes = ["20/5/2024", "20/5/2024", "20/5/2024", "20/5/2024"];

  const handleSelect = (endTime) => {
    setSelectedendTime(endTime);
    setIsOpen(false);
  };

  return (
    <div className="border flex items-center gap-5 px-5 rounded-xl">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-white px-4 py-2 rounded-md text-textPrimary"
        >
          {selectedendTime}
          <span className="ml-2">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        {isOpen && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-40">
            <ul className="py-2">
              {endTimes.map((endTime, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(endTime)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-textSecondary"
                >
                  {endTime}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterByEndTime;
