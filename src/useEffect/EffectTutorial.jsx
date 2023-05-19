import React, {useState, useEffect} from 'react'
import { CleanUp1 } from './CleanUp1';
import { CleanUp2 } from './CleanUp2';
import { CleanUp3 } from './CleanUp3';
import { CleanUp4 } from './CleanUp4';

const EffectTutorial = () => {
    // useEffect digunakan untuk digunakan untuk mengatasi side effect pda component
    // contohnya dari side effect yaitu : fetching data, perubahan langusng pda DOM, dan timers
    // useEffect menerima 2 arguments, yang dimana argument ke-2 optional
    // syntax
    // useEffect(<functions>, <dependencies>) 
    // adapa 3 jenis useEffect
    // 1. No Dependencies yang dimasukan
        // useEffect(() => {
        //     // akan menjalankan setiap function di render ulang.
        //   });
    // 2. Menggunakan dependencies empty array [],
        // useEffect(() => {
        //     // dijalankan hanya dalam satu kali pada saat pertaman kali dirender
        //   }, []);
    // 3. menggunakan dependencies value dari props atau state.
        // useEffect(() => {
        //     // berjalan pada pertama kali di render
        //     // dan ketika terdapat value yang berubah pada props atau state
        //   }, [prop, state]);

    // Dalam pemanggilan useEffect sebaiknya dilakukan pembersihan (clean up) atau sama dengan function component unmount, 
    // untuk mengurangi memory yang digunakan

    // state
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [calculation, setCalculation] = useState(0);
    const [count4, setCount4] = useState(0);
    const [time, setTime] = useState(0);

    // contoh 1 (tanpda dependency)
    useEffect(() => {
        console.log("Component is mounted")

        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
    });

    // contoh 2 (menggunakan dependency)
    useEffect(() => {
        setTimeout(() => {
            setCount2((count2) => count2 + 1)
        }, 1000);
    },[])

    // contoh 3 (menggunakan props/state sebagai dependency)
    useEffect(() => {
        setCalculation(() => count3 * 2)
    },[count3])

    // contoh 4 (menggunakan effect cleanup)
    useEffect(() => {
        console.log("Component is mounted contoh 4")
        
        let timer = setTimeout(() => {
            setTimeout(() => {
                setCount4((count4) => count4 + 1)
            }, 1000);
        })

        // ini merupakan logic cleanup
        return () => clearTimeout(timer);
    }, []);

    // contoh 5 (other effect cleanup)
    useEffect(() => {
        const interval = setInterval(() => {
            setTime((t) => {
                console.log(t)
                return t + 1
            });
        }, 1000)
        return () => clearInterval(interval);
    }, []);

  return (
    <div>
        {/* contoh 1 */}
        <h2>Ini contoh 1 (tanpa menambahkan dependency)</h2>
        <p>Kamu merender {count} kali</p>
        <p>Jika tanpa menggunakan dependency maka function setCount akan terus di render</p>
        <br/>
        {/* contoh 2 */}
        <h2>Ini contoh 2 (menambahkan dependency)</h2>
        <p>Kamu merender {count2} kali</p>
        <p>Jika menggunakan dependency maka function hanya akan di render sebanyak 1 kali pada saat pertama kali dirender</p>
        <br/>
        {/* contoh 3 */}
        <h2>Ini contoh 3 (menambahkan state/props value sbg dependency)</h2>
        <p>Count ke: {calculation} kali</p>
        <button onClick={() => setCount3((e) => e + 1)}>Increment + 2</button>
        <p>Jika menggunakan state/props sebagai dependency maka function akan dirender ulang ketika terdapat perubahan value pada state/props </p>
        <br/>
        {/* contoh 4 */}
        <h2>Ini contoh 4 (Effect Cleanup)</h2>
        <p>Kamu merender {count4} kali</p>
        <p>Cleanup digunakan untuk mengurangi pengunaan memory</p>
        <br/>
        {/* contoh 5 */}
        <h2>Ini contoh 5 (Effect Cleanup-2)</h2>
        <p>Timer: {time} kali</p>
        <p>Cleanup digunakan untuk mengurangi pengunaan memory</p>
        <br/>
        {/* contoh 6 */}
        <h2>Ini contoh 6 (Clean up 3)</h2>
        <CleanUp1/>
        <br/>
        {/* contoh 7 */}
        <h2>Ini contoh 7 (Clean up 4)</h2>
        <CleanUp2/>
        <br/>
        {/* contoh 8 */}
        <h2>Ini contoh 8 (Clean up 5)</h2>
        <CleanUp3/>
        <br/>
        {/* contoh 9 */}
        <h2>Ini contoh 9 (Clean up 6)</h2>
        <CleanUp4/>
        <br/>
    </div>
  )
}

export default EffectTutorial