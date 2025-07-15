import './Search.css'

function Search({ value, handleChange }) {


  return (
    <>
      <input type="search" id="search" name="q" placeholder='search' value={value} onChange={handleChange} />
    </>
  )
}

export default Search
