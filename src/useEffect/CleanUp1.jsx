import React, {useState, useEffect} from 'react'

export const CleanUp1 = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Component did mount")
    
        return () => {
          console.log("Compoennt unmount")
        }
      })
    
      useEffect(() => {
        console.log("Component did mount on counter change")
    
        return () => {
          console.log("Compoennt unmount on counter change")
        }
      }, [counter])

    return (
    <div>
        <h1>How to add clean up function</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>
            Add Counter
        </button>
    </div>
  )
}
