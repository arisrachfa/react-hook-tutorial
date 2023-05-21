import React, {useContext, useState} from 'react'
import FunctionalCompContext from './FunctionalCompContext';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext)
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
};


export const ThemeProvider = ({childern}) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => (
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  )


  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {/* childer not work or error */}
        {childern} 
         <FunctionalCompContext/>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
