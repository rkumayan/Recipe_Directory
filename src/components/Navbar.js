import { Link } from 'react-router-dom';
// import css
import './Navbar.css'

// custom hooks
import { useTheme } from '../hooks/useTheme';

import SearchBar from './SearchBar';

const Navbar = () => {
    let {color} = useTheme();
    
    return ( 
        <div className="navbar" style = { {background : color}}>
            <nav>
                <Link to = "/" className='brand'>
                    <h1>Cooking Komi</h1>
                </Link>
                <SearchBar />
                <Link to = "/create"> Create Recipe </Link>
            </nav>
            
        </div>
     );
}
 
export default Navbar;