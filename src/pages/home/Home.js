import './Home.css'
import RecipeList from '../../components/RecipeList';


import { projectFirestore } from '../../firebase/config';
import { useEffect, useState} from 'react';
const Home = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect( () =>{
        setIsPending(true)
        const unSubscribe = projectFirestore.collection('recipes').onSnapshot( (snapshot)=>{
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
            }, (err)=>{
                setError(err.message);
                setIsPending(false);
            })
        return ()=>{
            // remove the connection to firebase when the Home component is unmounted
            unSubscribe();
        }
            
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