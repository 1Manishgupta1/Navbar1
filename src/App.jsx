import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Info from '../pages/Info'
import Layout from './layout/layout'
import Loader from './Loader'
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay or wait for actual content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // You can adjust this or remove once you use real loading logic

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <Router>
      <Routes>

        <Route element={<Layout classname='h-dvh'/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/info' element={<Info/>}/>
        </Route>
               
      </Routes>
    </Router>
  )
}

export default App
