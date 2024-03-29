import { useNavigate } from 'react-router-dom';
import './Create.css'
import {useRef, useState} from 'react';
import { useTheme } from '../../hooks/useTheme';

import {projectFirestore} from '../../firebase/config'
const Create = () => {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState(''); 
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const ingredientInput = useRef(null);
    const navigate = useNavigate();
    const {recipeUrl} = useTheme();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log( title , method , cookingTime, ingredients);
        const obj = { title , ingredients, method, cookingTime};
        
        try{
            await projectFirestore.collection('recipes').add(obj)
            navigate("/"); 
        }
        catch(err){
            console.log(err);
        }
        
    }
    const handleAdd = (e) =>{
        e.preventDefault();
        const ing = newIngredient.trim();
        if( ing && !ingredients.includes(ing)){
            setIngredients( prev => [...prev, ing]);
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    }
    return ( 
        <div className='create'>
            <h2 className="page-title">Add a new recipe</h2>
            <form onSubmit={ handleSubmit}>
                <label > 
                    <span>Recipe Title :</span>
                    <input type="text" 
                    value = {title}
                    onChange= { (e) => setTitle(e.target.value)}
                    required
                     />
                </label>
                {/* Recipe Ingredients */}
                <label >
                    <span>Recipe Ingredients: </span>
                    <div className="ingredients">
                        <input type="text"  
                            value = {newIngredient}
                            onChange={ (e) => setNewIngredient(e.target.value)}
                            ref = {ingredientInput}
                        />                        
                        <button className="btn" onClick={ handleAdd}>Add</button>
                    </div>
                </label>
                <span> Current Ingredients : </span>
                { ingredients.map( ing => (
                    <em className="ing" key = {ing}> {ing}, </em>
                    ))
                }
                <label > 
                    <span>Recipe Method:</span>
                    <textarea 
                    value = {method}
                    onChange= { (e) => setMethod(e.target.value)}
                    required
                     />
                </label>

                <label > 
                    <span>Cooking Time( in mins) :</span>
                    <input type="number" 
                    value = {cookingTime}
                    onChange= { (e) => setCookingTime(e.target.value)}
                    required
                     />
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
}
 
export default Create;