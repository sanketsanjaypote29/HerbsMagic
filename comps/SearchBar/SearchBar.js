import { FaSearch } from "react-icons/fa"
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div className="search-bar-div">
        <input type="text" className="search-bar" placeholder ='Search product id or name...' />
        <button className='search-btn'><FaSearch/></button>
    </div>
  )
}

export default SearchBar