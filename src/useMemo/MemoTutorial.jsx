import React, {useState, useMemo} from 'react'

// useMemo : digunakan untuk menghindari pembuatan komputasi yang berat setiap kali komponen dirender ulang. 
// useMemo akan menyimpan hasil komputasi ke dalam memory dan digunakan kembali ketika dibutuhkan.
// syntax = useMemo me-return sebuah value

// child components contoh 3
    const HeavyFunction = (counter) => {
        for (let i = 0; i < 2000000000; i++) {}
        return counter * 3
  }

const MemoTutorial = () => {
    // state
    const [numbers] = useState([10, 20, 30]);
    const [names] = useState(["John", "Paul", "George", "Ringo"]);
    const [counter, setCounter] = useState(1)
    const [color, setColor] = useState('red')

    // contoh 1
    const total = useMemo(
      () => numbers.reduce((acc, number) => acc + number, 0),
      [numbers]
    );

    // contoh 2
    const sortedNames = useMemo(() => [...names].sort(), [names]);

    // contoh 3
    const counter3x = useMemo(() => {
        return HeavyFunction(counter)
      }, [counter])
    
    //   const cacheObject  = useMemo(() => {
    //     return { theme: color }
    //   }, [color])


  return (
    <>
        {/* contoh 1 */}
        <h2>Contoh 1-Calculate sum</h2>
        <p>Total Penjumlahan: {total}</p>
        <br/>
        {/* contoh 2 */}
        <h2>Contoh 2-Shorted Name</h2>
        <p>Name Before Sorted: {names.join(", ")}</p>
        <p>Name After Sorted: {sortedNames.join(", ")}</p>
        <br/>
        {/* contoh 3 */}
        <h2>Contoh 3-HeavyFunction / slow function</h2>
        <div style={{ marginBottom: 24 }}>
            <h2>Counter: {counter}</h2>
            <h2>3x Counter: {counter3x}</h2>
            <button onClick={() => setCounter(counter + 1)}>
                Add Counter
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                Min Counter
            </button>
        </div>

        <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontWeight: 'bold', color }}>
                Color: {color}
            </h2>
            <button onClick={() => setColor('green')}>
                Color green
            </button>
            <button onClick={() => setColor('blue')}>
                Color blue
            </button>
            <button onClick={() => setColor('red')}>
                Color red
            </button>
        </div>
    </>
  )
}

export default MemoTutorial