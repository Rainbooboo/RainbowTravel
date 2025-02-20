import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import Packages from './components/Packages/Packages';
const App = () => {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="packages" element={<Packages />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App