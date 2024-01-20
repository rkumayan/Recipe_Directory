import './Recipe.css'
import useFetch from "../../hooks/useFetch"
import { useParams } from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'
const Recipe = () => {
    const id = useParams().id;
    const {data: recipe, isPending, error} = useFetch( "http://localhost:3000/recipes/" + id);
    const {mode} = useTheme();
    return ( 
        <div className= {`recipe ${mode}`}>
            {error && <p className='error' > {error} </p> }
            {isPending && <p> loading...</p>}
            {recipe && (
                <>
                    <h3 className="recipe-title"> {recipe.title} </h3>
                    <p> {recipe.cookingTime} to cook</p>
                    <ul>
                        { recipe.ingredients.map( ing =>(
                            <li key = {ing}> {ing}</li>
                        ))}
                    </ul>
                    <p className="method">{ recipe.method} </p>
                </>
            )}
        </div>
    );
}
 
export default Recipe;