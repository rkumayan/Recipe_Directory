import './ThemeSelector.css';

import { useTheme } from '../hooks/useTheme';

const themeColors = ['red', 'green','blue', '#58249c'];

const ThemeSelector = () => {
    const {changeColor, changeBgColor, bodyColor} = useTheme();
    return ( 
        <div className="theme-selector">
            <button
                onClick={ ()=>{
                    changeBgColor( bodyColor === '#dfdfdf' ? 'black' : '#dfdfdf');
                }}
            >switch</button>
            <div className="theme-buttons">
                {themeColors.map( color =>(
                    <div key = {color} 
                        onClick={ () => changeColor(color)}
                        style={ {background: color}}
                    >
                        
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ThemeSelector;