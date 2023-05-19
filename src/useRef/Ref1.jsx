import React, {useState, useEffect, useRef} from 'react'

export const Ref1 = () => {

    const [counter, setCounter] = useState(0);  
    const rerender = useRef(1)

    useEffect(() => {
        console.log("Rerender")
        rerender.current = rerender.current + 1
    })

    const AddCounter = () => {
        setCounter(counter + 1)
    }

  const AddRerender = () => {
    rerender.current = rerender.current + 4
  }

  const CheckValues = () => {
    console.log({ counter, rerender: rerender.current })
  }


  return (
    <div>
        <h1>useRef Example</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={AddCounter}>
            Add Counter
        </button>
        <h2>Rerender: {rerender.current}</h2>
        <button onClick={AddRerender}>
            Add Rerender
        </button>
        <button onClick={CheckValues}>
            Check Value
        </button>
    </div>
  )
}
