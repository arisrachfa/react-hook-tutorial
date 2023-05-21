import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext';

export default function FunctionalCompContext() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    
    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? 'ccc' : '#333',
        padding: '2rem',
        margin: '2rem',
    }

  return (
    <div>
        <button onClick={toggleTheme}> Toggle Theme </button>
        <div style={themeStyle}> 
            Function Theme
        </div>
    </div>
  )
}
