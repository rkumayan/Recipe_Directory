import './ThemeSelector.css';
import modeIcon from '../assets/dark_mode_FILL0_wght400_GRAD0_opsz24.svg'
import { useTheme } from '../hooks/useTheme';

const themeColors = ['red', 'green','blue', '#58249c'];

const ThemeSelector = () => {
    const {changeColor, changeMode, mode} = useTheme();
    return ( 
        <div className="theme-selector">
            <img
                src={modeIcon} alt="light and dark mode toggle button" 
                onClick={ ()=>{
                    changeMode( mode === 'light' ? 'dark' : 'light');                    
                }}
                style = { { filter: mode === 'light' ? 'invert(20%)' : 'invert(100%)'}}
            >
                
            </img>
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