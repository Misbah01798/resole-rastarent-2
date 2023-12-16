import { useState } from "react";


const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] =useState('');
    const handleSearch = () => {
        onSearch(searchTerm);
    
      };
  return (
    <div>
         <div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        <button className="bg-pink-300 rounded-r-lg input-bordered p-3" onClick={handleSearch}>Search</button>
        </div>
      
    </div>
  )
}

export default Search
