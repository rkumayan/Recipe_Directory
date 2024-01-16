// styles
import './Search.css'
// custom hooks
import {useFetch} from '../../hooks/useFetch'

// components
import RecipeList from '../../components/RecipeList';
const Search = () => {
    
    const searchParams = new URLSearchParams(window.location.search);
    const text = searchParams.get('q');
    const url = "http://localhost:3000/recipes/?q=" + text;
    const {data : recipes, isPending, error} = useFetch(url);
    return ( 
        <div>
            {recipes && <RecipeList recipes = {recipes} /> }
        </div>
     );
}
 
export default Search;