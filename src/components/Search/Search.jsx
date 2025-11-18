import React from 'react'
import "./Search.css"

const Search = ({setSearch}) => {

  return (
    <>
    <input type="text" placeholder='Search...' className='search'
    onChange={(e)=>setSearch(e.target.value)}/>
    </>
  )
}

export default Search