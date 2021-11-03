import React from 'react'

const SearchBar = ({ val, onSearch, ...props }) => {
    return (
        <input  
            value={val}
        />
    )
}