import React from 'react'

const SearchBar = ({ val, onSearch, ...props }) => {
    return (
        <input  
            value={val}
            onChange={onSearch}
            placeholder="Search for the name"
            {...props}
        />
    )
}

export default SearchBar;