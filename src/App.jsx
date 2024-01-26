import { useState } from 'react';
import './App.css'
import './_config/mode_white_Black.css'
import { Route, BrowserRouter, Routes , Navigate } from 'react-router-dom';
import About from './pages/about/About';
import Services from './pages/services/Services';
import { useThemeContext } from './context/ThemeContext'
import Navbar from './components/organisms/Navbar/Navbar';
import Banner from './components/organisms/Banner/Banner';
import DefaultLayout from './components/templates/DefaultLayout';


function App() {


  const { contextTheme, setContextTheme } = useThemeContext();


  return (
    <div className="general" id={contextTheme}>

      <BrowserRouter>
      <DefaultLayout/>
        <div className="central">
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/Services' element={<Services />} />
          </Routes>
        </div>
       
      </BrowserRouter>
    </div>
  )
}

export default App
