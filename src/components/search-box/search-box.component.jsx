import React from 'react'
import './search-box.styles.css'

const SearchBox= ({placeholder, changeHandler}) => {
  return (
      <input
      type='search'
      className="search-box"
      placeholder={placeholder}
      onChange={changeHandler}
    />
  )
}

export default SearchBox