import React from 'react';

import { 
  Route,
  Routes 
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navbar />} />
        <Route path="signin" element={ <SignIn /> } />
      </Routes>
    </div>
  );
}

export default App;
