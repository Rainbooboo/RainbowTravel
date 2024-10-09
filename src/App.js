import React from 'react'
import './App.css';
import Navbar from './components/Navbar/navbar';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/> 
    <Main/>
    <Footer/>
   
    </>
  )
}

export default App