import './Recipe.css'
import useFetch from "../../hooks/useFetch"
import { useParams } from 'react-router-dom'
import {useTheme} from '../../hooks/useTheme'
import { useEffect,useState } from 'react'
import { projectFirestore } from '../../firebase/config'
const Recipe = () => {
    const id = useParams().id;
    
    const {mode} = useTheme();
    // const {data: recipe, isPending, error} = useFetch( recipeUrl + id);
    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect( ()=>{
        setIsPending(true);
        const unsubscibe = projectFirestore.collection('recipes').doc(id)
            .onSnapshot( doc=>{
                if( doc.exists){
                    setIsPending(false);
                    setRecipe( doc.data());
                }
                else{
                    setIsPending(false);
                    setError('Could not fetch the recipe')
                }
            }, err =>{
                setIsPending(false);
                setError(err.message);
            })

        return () =>{
            unsubscibe();
        }
    }, [id])
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