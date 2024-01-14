import './Create.css'
import {useState} from 'react';

const Create = () => {
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState(''); 
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log( title , method , cookingTime);
        
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