import './App.css'
import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TodoApp from './Components/TodoApp';
import MissingPage from './MissingPage';
import About from './About';



function App() {



  return (
    <Router>
       <div className="App">
          <NavBar />
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path='/home' element={<Home/>} />
             <Route path='/todo' element={<TodoApp/>} />
             <Route path='/about' element={<About/>} />
             <Route path='*' element={<MissingPage/>} />
          </Routes>
        </div>

    </Router>
  );
}

export default App;
