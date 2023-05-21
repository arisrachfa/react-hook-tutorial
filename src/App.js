// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// styles
import './App.css';
import Navbar from './Navbar';

// pages
import Home from './Home';
import StateTutorial from './useState/StateTutorial';
import { ReducerTutorial } from './useReducer/ReducerTutorial';
import MemoTutorial from './useMemo/MemoTutorial';
import EffectTutorial from './useEffect/EffectTutorial';
import { ReffTutorial } from './useRef/ReffTutorial';
import CallbackTutorial from './useCallback/CallbackTutorial';
import ContextTutorial from './useContext/ContextTutorial';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navigation'>
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/useState' element={<StateTutorial/>}/>
          <Route path='/useEffect' element={<EffectTutorial/>}/>
          <Route path='/useContext' element={<ContextTutorial/>}/>
          <Route path='/useCallback' element={<CallbackTutorial/>}/>
          <Route path='useImperativeHandle/' element={<Home/>}/>
          <Route path='/useLayout' element={<Home/>}/>
          <Route path='/useMemo' element={<MemoTutorial/>}/>
          <Route path='/useReducer' element={<ReducerTutorial/>}/>
          <Route path='/useRef' element={<ReffTutorial/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
