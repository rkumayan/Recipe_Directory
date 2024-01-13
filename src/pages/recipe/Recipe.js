import './Recipe.css'
import useFetch from "../../hooks/useFetch"
import { useParams } from 'react-router-dom'
const Recipe = () => {
    const id = useParams().id;
    const {data: recipe, isPending, error} = useFetch( "http://localhost:3000/recipes/" + id);

    return ( 
        <div className='recipe'>
            {error && <p className='error' > {error} </p> }
            {isPending && <p> loading...</p>}
            {recipe && (
                <>
                    <h3 className="recipe title"> {recipe.title} </h3>
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