import React from 'react'
import Index from './Contoh1/Index'
import Index2 from './Contoh2/Index2'


export const ThemeContext = React.createContext()

const ContextTutorial = () => {



  return (
    <>
        {/* contoh 1 */}
        <h2>Contoh 1</h2>
        <Index/>
        <br/>
        {/* contoh 2 */}
        <h2>Contoh 2 - using custom hook</h2>
        <Index2/>
    </>
  )
}

export default ContextTutorial