import { useEffect, useState,useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import Welcome from './Welcome'
// import StudentCard from './StudentCard'
// import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar/Navbar'
import StudentCard from './components/StudentCars'
import Footer  from './components/Footer/Footer'
import UseMemoDemo from './components/UseMemoDemo'
import Button from './components/Button/Button'
import UserProvider from './components/UserProvider'
import WelcomePage from './components/WelcomePage'
import Dashboard from './components/Dashboard'
import Dashboard1 from './components/Dashboard1'
import { Route, Routes,useNavigate } from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Contactus from './components/Contactus'

function App() {
  
const handlesave= ()=>{
alert("hello from save button")

}

const handleNavigate = () =>{
  navigate('/dashborad')
  
}


const handleNavigate1 = () =>{
  navigate(-1)
  
}
const navigate = useNavigate();
  const  [cnt , setCnt] = useState(0)
  const [name,setName] = useState("")
  const [age,setAge] = useState(18)
  const [isStudent,setIsStudent] = useState(true)
     const [seconds, setSeconds] = useState(0); 
const inputRef = useRef(null)
 function focusInput() { 
    inputRef.current.focus(); 
  } 

  let count = 0;
  function increaseCount(){
    count += 1;
    console.log(count)
  }
  function increasecnt(){
    setCnt(cnt + 1);
    console.log(cnt)

  }
  const decreasecnt = () =>{
    if(cnt <= 0){
      setCnt(0)
    }else{
      setCnt(cnt-1);
    }
    

  }
  const resetcnt = ()=>{
    setCnt(0)
  }
  const hadleChangeName= ((e)=>{
    setName(e.target.value)
  })
  
const handleChangeStatus = ()=>{
  setIsStudent(!isStudent)
}

console.log(seconds)
// useEffect(()=>{
//   console.log("Effect excecuted")
// },[])

// useEffect(()=>{
//   console.log("Effect excecuted")
// },[cnt])

// useEffect(()=>{
//   console.log("Effect excecuted")
// })

  // useEffect(() => { 
 
  //   const timer = setInterval(() => { 
  //     setSeconds((previous) => previous + 1); 
  //   }, 1000); 
 
  //   return () => { 
  //     clearInterval(timer); 
  //   }; 
 
  // }, []); 

  return (
    <>
  
    

   <Navbar name = "dhruv" />

   <hr/>

   <Routes>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/dashborad' element={<Dashboard1/>} />
   </Routes>
  <button onClick={increaseCount}> increase the count</button>
    <div>Count : {count}</div>
    <div>second :{seconds}</div>
      <button onClick={increasecnt}> increase the count using use state</button>
 
          <button onClick={decreasecnt}> decrease the count using use state</button>
           <button onClick={resetcnt}> reset the count using use state</button>
    <div>cnt : {cnt}</div>

    <input value={name} onChange={hadleChangeName} />
    <div>{name}</div>

    <button onClick={handleChangeStatus}>change status of student</button>
     

    {isStudent ? (<h1>student hai</h1>):(<h1>pta nhi</h1>)}
    <UseMemoDemo />


 <UserProvider>
      <WelcomePage/>
      <Dashboard/>
    </UserProvider>
  <StudentCard name="Amit" course = "cse" marks= {80} active="active" city="Mumbai"/>
  <StudentCard name="Dhruv" course = "it" marks= {90} active="active" city="Mumbai"/>
  <StudentCard name="omkar" course = "cse" marks= {80} active="active" city="Mumbai"/>
  <StudentCard name="priya" course = "cse" marks= {85} active="active" city="Mumbai"/>
  <Button type="primary" onclick={handlesave}>
    Save
  </Button>
  <Button type="danger" onclick={handleNavigate}>
    Delete
  </Button>
  <Button type= "secondary" onclick={handleNavigate1}>
    Cancel
  </Button>

  
   

  <div> 
 
      <input 
        ref={inputRef} 
        type="text" 
      /> 
 
      <button onClick={focusInput} > 
        Focus Input 
      </button> 
 
    </div>
    
  <Footer/>
      
    </>
  )
}

export default App
