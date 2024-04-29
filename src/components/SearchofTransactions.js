import React, {useState} from "react";
import "./SearchofTransactions.css"

const SearchofTransactions=({setSearch})=>{
    const[searchName,setSearchName]=useState("");

    const handleChange=(e)=>{
        setSearchName(e.target.value);
        setSearch(e.target.value)
    }
    return(
        <div className="search">
             <input className="searchbar" type="text" placeholder="Search for your Recent Transaction" value={searchName} onChange={handleChange} />
        </div>
    );
};

export default SearchofTransactions;