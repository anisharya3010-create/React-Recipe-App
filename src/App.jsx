import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx'
import './App.css'
import Recipeid from './Components/Recipeid.jsx';
import Category from './Components/Category.jsx';
import Search from './Components/Search.jsx';
const App = () => {
  return (
    <>
    <Router>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:idMeal' element={<Recipeid />}/>
        <Route path='/category/:name' element={<Category/>}/>
        <Route path='/search/:searchTerm' element={<Search/>}/>

        
      </Routes>
    </Router>
     
    </>
  )
}

export default App
