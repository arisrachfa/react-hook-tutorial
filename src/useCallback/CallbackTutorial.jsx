import React, {useState, useCallback} from 'react'
import Display from './Display'

// useCallback digunakan untuk membuat function yang hanya di-create satu kali.
// useCallback: digunakan untuk menghindari pembuatan fungsi baru setiap kali komponen dirender ulang.
// useCallback akan menyimpan fungsi tersebut ke dalam memory dan digunakan kembali ketika dibutuhkan.
// syntax = useCallback me-return sebuah function/method


const CallbackTutorial = () => {

    const [counter, setCounter] = useState(1)
    const [showData, setShowData] = useState(false)

    //Contoh 1
    const GetCounterData = useCallback(() => {
        return [counter * 2, counter * 3, counter *4]
        },
        [counter]
    )

    
    const GetRandomData = useCallback (
        () => { 
            const random = Math.floor(Math.random() * 100) + 1
            return [random * 2, random * 3, random *4]
        }, []
    )


    
  return (
    <div>
        <h1>UseCallbackComponent</h1>

        <div style={{ marginBottom: 24 }}>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Add Counter
            </button>
        </div>

        <div style={{ marginBottom: 24 }}>
            <h2>Show Data: {showData.toString()}</h2>
            <button onClick={() => setShowData(!showData)}>
                Show / Hide Data
            </button>
        </div>

        <Display GetData={GetRandomData} />
    </div>
  )
}

export default CallbackTutorial