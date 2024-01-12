import './Home.css'
import {useFetch} from '../../hooks/useFetch'
const Home = () => {
    const {data, isPending, error} = useFetch("http://localhost:3000/recipes");
    return (  
        <div className='Home'>
            { error && <p className='error'> {error} </p> }
            {isPending && <p className="loading">Loading...</p> }
            {   data && 
                data.map( recipe =>(
                    <div className="recipe">
                        <h2>{recipe.title}</h2>
                        <p> {recipe.method}</p>
                        <p> {recipe.cookingTime} </p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Home;