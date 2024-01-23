import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList';
import { useTheme} from '../../hooks/useTheme';
const Home = () => {
    const {recipeUrl}= useTheme();
    const {data, isPending, error} = useFetch(recipeUrl);
    return (  
        <div className='Home'>
            { error && <p className='error'> {error} </p> }
            {isPending && <p className="loading">Loading...</p> }
            {   data && <RecipeList recipes = {data} />
            
            }
        </div>
    );
}
 
export default Home;