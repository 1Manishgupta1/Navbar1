import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Info from '../pages/Info'
import Layout from './layout/layout'
const App = () => {
  return (
    <Router>
      <Routes>

        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/info' element={<Info/>}/>
        </Route>
               
      </Routes>
    </Router>
  )
}

export default App
