import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterByStartTime = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedtime, setSelectedtime] = useState("Mulai Periode");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const times = ["10/2/2024", "10/2/2024", "10/2/2024", "10/2/2024"];
  const handleSelect = (time) => {
    setSelectedtime(time);
    setIsOpen(false);
  };

  return (
    <div className="border flex items-center gap-5 px-5 rounded-xl">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center bg-white px-4 py-2 rounded-md text-textPrimary"
        >
          {selectedtime}
          <span className="ml-2">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        {isOpen && (
          <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-40">
            <ul className="py-2">
              {times.map((time, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(time)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-textSecondary"
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterByStartTime;
