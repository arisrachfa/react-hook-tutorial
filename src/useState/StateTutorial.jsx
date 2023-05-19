import React, {useState} from 'react'

const StateTutorial = () => {
// ################---STATE---################################
    // buat state, yang dimana argument 1 merupakan value yang kita miliki saat ini,
    // arrguments 2 set function untuk merubah value dengan apa yang kita masukan
    const [inputValue, setInputValue] = useState(""); // state contoh 1
    const [counter, setCounter] = useState(0); // state contoh 2
    const [liked, setLiked] = useState(false); // state contoh 3
    const [name, setName] = useState(''); // state contoh 4
    const [age, setAge] = useState(17); // state contoh 4

    // state contoh untuk Updating object dan array di state contoh 5
    const [form, setForm] = useState({
        firstName: "Johny",
        lastName: "Mike",
        email: "mike@gmail.com",
    });

//##################---HANDLE--####################################
    // buat funct untuk menghandle inputValue
    let handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // funct untuk memberikan nilai increment
    const handleIncrement = () => {
        setCounter(prev => prev+1);
    }

    // funct untuk memberikan nilai decrement
    const handleDecrement = () => {
        setCounter(prev => prev-1);
    };

    // funct restart to zero
    const handleReset = () => {
        setCounter(0);
    };

    // handle liked
    const handleLikeChange = (e) => {
        setLiked(e.target.value);
    }

    // handle contoh 5
    const handleChangeFirstName = (e) => {
        setForm({...form, firstName: e.target.value});
    }

    const handleChangeLastName = (e) => {
        setForm({...form, lastName: e.target.value});
    };
    
    const handleChangeEmail = (e) => {
        setForm({...form, email: e.target.value});
    };

  return (
    <div className='App'>
        <h2>Contoh 1-menginputkan kata (String)</h2>
        <input placeholder='write everything...' value={inputValue} onChange={handleChange}/>
        <button onClick={() => setInputValue("")}>Reset</button>
        <h4>Output :</h4>
        <h2>{inputValue}</h2>

        {/* Contoh 2 */}
        <br/>
        <h2>Contoh 2-Counter (Number)</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Restart</button>
        <h4>Output</h4>
        {counter}

        {/* contoh 3 */}
        <br/>
        <h2>Contoh 3- CheckBox (Bollean)</h2>
        <label> 
            <input 
                type='checkbox'
                onChange={handleLikeChange}
                checked={liked}/>
            I Like You
        </label>
        <p>You {liked ? 'like me' : 'not like me'}</p>

        {/* contoh 4 */}
        <h2>Contoh 4 yaitu form dengan 2 variabel state</h2>
        <input placeholder='your name' onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => setAge(prev => prev + 1)}>Increment Age</button>
        <p>Hello {name}, your Age is: {age}</p>

        {/* Contoh 5 */}
        <h2>Contoh 5-Updating Object and array in State</h2>
        <p>First Name :
            <input 
                placeholder='first name' 
                value={form.firstName}
                onChange={handleChangeFirstName}>
            </input>
        </p>
        <p>Last Name :
            <input 
                placeholder='last name' 
                value={form.lastName} 
                onChange={handleChangeLastName}/>
        </p>
        <p>Email :
            <input 
                placeholder='Email' 
                value={form.email} 
                onChange={handleChangeEmail}/>
        </p>
        <p>
            {form.firstName}{''}
            {form.lastName}{''}
            ({form.email})
        </p>

        {/* contoh 6 */}
        <h2>Contoh 6-Adding value to list</h2>
        <NameList/>
    </div>
  )
}

// Buat component Namelist untuk contoh 6
const NameList = () => {
    // state untuk contoh 6
    const [list, setList] = useState(["Kson", "Sora", "Yui"]);
    const [name, setName] = useState(() => "Lore");

    // handle untuk menambahkan nama ke dalam list
    const onAddName = () => {
        setList([...list, name]);
        setName("");
    };

    return (
        <>
            <ul>
                {list.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onAddName}> Add Name </button>
        </>
    )
};


export default StateTutorial