import React from 'react'

import './SearchBar.css'

function SearchBar({onChange, searchText}) {
  return (
    <input
      value={searchText}
      className="component-search-bar" 
      type="text"
      placeholder="Search..."
      onChange={onChange}
    />
  )
}

export default SearchBar