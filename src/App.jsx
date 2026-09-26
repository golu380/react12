import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import Welcome from './Welcome'
// import StudentCard from './StudentCard'
// import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import StudentCard from './components/StudentCars'
import Footer  from './components/Footer'
function App() {
  

  return (
    <>
    
  <Header/>
  <Navbar/>
  <StudentCard name="Amit" course = "cse" marks= {80} active="active" city="Mumbai"/>
  <StudentCard name="Dhruv" course = "it" marks= {90} active="active" city="Mumbai"/>
  <StudentCard name="omkar" course = "cse" marks= {80} active="active" city="Mumbai"/>
  <StudentCard name="priya" course = "cse" marks= {85} active="active" city="Mumbai"/>
    
  <Footer/>
     
    </>
  )
}

export default App
