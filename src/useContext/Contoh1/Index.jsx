import React,{useState, useContext} from 'react'
import { FunctionContextComponent } from './FunctionContextComponent'
import ClassContextComponent  from './ClassContextComponent'

export const ThemeContext = React.createContext()

const Index = () => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => (
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    )
  
    return (
    <>
        <ThemeContext.Provider value={darkTheme}>

            <button onClick={toggleTheme}> Toggle Theme </button>
            <FunctionContextComponent />
            <ClassContextComponent />

        </ThemeContext.Provider>
    </>
  )
}

export default Index