import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer';
import './App.css'



function App() {
  return (
    <>
       
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<ProductListing />} />
            </Routes>
          </main>
          <Footer/>
        </div>
       
      
    </>
  )
}

export default App
