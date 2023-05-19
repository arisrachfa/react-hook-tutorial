import React, {useEffect, useState, useRef} from 'react'

export const Ref2 = () => {

    const [email, setEmail] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        console.log({ email })
    })

    const OnInputChange = (e) => {
        setEmail(e.target.value)
    }

    const ChangeBgColor = () => {
        inputRef.current.style.backgroundColor = "orange"
    }

    const Focus = () => {
        console.log(inputRef.current)
        inputRef.current.focus()
    }

    const Blur = () => {
        inputRef.current.blur()
    }

  return (
    <div>
        <h1>Useref for element</h1>
        <input 
            ref={inputRef}  //useRef 
            value={email}
            onChange={OnInputChange} 
            style={{ padding: 16, fontSize: 32, marginBottom: 16 }}
        />
        <br />
        <button onClick={Focus}>Focus</button>
        <button onClick={Blur}>Blur</button>
        <button onClick={ChangeBgColor}>Change bg color</button>
        </div>
  )
}
