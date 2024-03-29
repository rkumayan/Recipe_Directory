import { createContext, useReducer } from "react";
export const ThemeContext = createContext();

const themeReducer = ( state, action) =>{
    switch (action.type){
        case 'CHANGE_COLOR' :
            return { ...state, color: action.payload}
        case 'TOGGLE_DARK_MODE':
            return {...state , mode : action.payload}
        default :
            return state
    }
}

export function ThemeProvider( {children}){
    const [state, dispatch] = useReducer( themeReducer , {
        color:'#58249c',
        mode : 'light',
        recipeUrl : 'https://cooking-komi013.onrender.com/recipes/'
    });

    const changeColor = ( color ) =>{
        dispatch( {type: 'CHANGE_COLOR', payload : color});
    }
    const changeMode = (mode) =>{
        dispatch( {type : 'TOGGLE_DARK_MODE' , payload : mode})
    }

    return(
        <ThemeContext.Provider value = { {...state, changeColor, changeMode}} >
            {children}
        </ThemeContext.Provider>

    )
}