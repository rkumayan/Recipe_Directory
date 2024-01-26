import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList';
import { useTheme} from '../../hooks/useTheme';

import { projectFirestore } from '../../firebase/config';
import { useEffect, useState} from 'react';
const Home = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect( () =>{
        setIsPending(true)
        projectFirestore.collection('recipes').get()
            .then( (snapshot)=>{
                console.log(snapshot);
                if(snapshot.empty){
                    setError(' No recipes to load')
                    setIsPending(false);
                }
                else{
                    let results = [];
                    snapshot.docs.forEach( doc =>{
                        results.push({ id:doc.id, ...doc.data()})
                    })
                    setData(results);
                    setIsPending(false);
                }
            })
            .catch( err =>{
                setError(err.message);
                setIsPending(false);
            })
    } , []);

    
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