import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onSubmit, onChange, value }) => {
  return (
    <div className="flex border border-gray-400 rounded-lg py-1 px-3 space-x-3">
      <BiSearch className="text-2xl " />
      <input type="text" placeholder="Search Github User" onChange={onChange} value={value} className="focus:outline-none w-full" />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
