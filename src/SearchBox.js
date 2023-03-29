import React from 'react';
import "./Search.css";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='box'>
            <input
                className='search-box '
                type='searchbox'
                placeholder='Search'
                onChange={searchChange} />
        </div>
    );

}

export default SearchBox;