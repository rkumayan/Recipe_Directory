import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList';
const Home = () => {
    const {data, isPending, error} = useFetch("https://cooking-komi013.onrender.com/recipes");
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