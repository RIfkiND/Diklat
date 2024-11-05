import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="border flex items-center gap-5 px-5 rounded-xl w-full md:w-auto">
      <div>
        <FiSearch className="text-xl text-slate-600" />
      </div>
      <input
        type="text"
        name=""
        id=""
        className="rounded-lg w-full border-none focus:outline-none focus:ring-0 text-slate-600"
        placeholder="Search ..."
      />
    </div>
  );
}

export default Search;
