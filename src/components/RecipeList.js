import './RecipeList.css'
import {Link} from 'react-router-dom'
import {useTheme} from '../hooks/useTheme';
import deleteIcon from '../assets/deleteIcon.svg'
import {projectFirestore} from '../firebase/config';

const RecipeList = ( {recipes}) => {
    const {mode} = useTheme();

    const handleDelete = (id)=>{
        projectFirestore.collection('recipes').doc(id).delete()
            .then( () => {
                window.location.reload(false);
            })
        
    }
    return ( 
        <div className= {`recipe-list`}>
            { recipes.map( recipe => (
                <div className={`recipe  ${mode}`} key = {recipe.id}>
                    <h3> {recipe.title} </h3>
                    <p> {recipe.cookingTime} to make.</p>

                    <div> {recipe.method.substring(0,100)}...</div>
                    <Link to = {`/recipe/${recipe.id}`}> Cook This</Link>
                    <img className='delete'
                        src= {deleteIcon}
                        onClick={ () => handleDelete(recipe.id)}
                    />
                </div>
            ))}
        </div>
     );
}
 
export default RecipeList;