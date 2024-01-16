import './SearchBar.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SearchBar = () => {
    const [searchText , setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();  
        navigate( `/search?q=${searchText}`);

    }
    return ( 
        <div className="search-bar">
            <form onSubmit={ handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input type="text"
                    id = "search"
                    onChange={ e=> setSearchText(e.target.value)}
                    required
                />
            </form>
        </div>
     );
}
 
export default SearchBar;