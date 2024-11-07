import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search({ onSearchChange }) {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value); // Pass query to parent on change
  };

  return (
    <form className="border flex items-center gap-5 px-5 rounded-xl w-full md:w-auto">
      <div>
        <FiSearch className="text-xl text-slate-600" />
      </div>
      <input
        type="text"
        className="rounded-lg w-full border-none focus:outline-none focus:ring-0 text-slate-600"
        placeholder="Search ..."
        value={query}
        onChange={handleSearchChange}
      />
    </form>
  );
}

export default Search;
