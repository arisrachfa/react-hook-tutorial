import React from 'react'
import { Ref1 } from './Ref1'
import { Ref2 } from './Ref2'
import { Ref3 } from './Ref3'

// useRef digunakan untuk membuat referensi ke halaman HTML atau komponen pada react.
// dengan use ref kita dapat mengakses elemen atau komponen yang kita inginkan dan melakukan manipulasi pada propertinnya.
// untuk memanggil useRef dengan cara = rerender.current


export const ReffTutorial = () => {
  return (
    <div>
        {/* contoh 1 */}
        <h2>Ini merupakan contoh dari useReff 1</h2>
        <p>contoh ini merupakan fungsi useRef untuk mengecek/ mencatat log 
            untuk value yang tidak berubah pada saat re-rendering yang nilainya 
            akan terus menerus 
        </p>
        <Ref1/>
        <br/>
        {/* contoh 2 */}
        <h2>Ini merupakan contoh dari useReff 2</h2>
        <p>Contoh ini merupakan fungsi untuk mereference ke sebuah element pada JSX</p>
        <Ref2/>
        <br/>
        {/* contoh 3 */}
        <h2>Ini merupakan contoh dari useReff 3</h2>
        <p>Contoh ini merupakan kegunaan useRef untuk menampilkan previous value state</p>
        <Ref3/>
        <br/>
    </div>
  )
}
