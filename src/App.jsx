import { useEffect, useState } from 'react'
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
function App() {

  const  [cnt , setCnt] = useState(0)
  const [name,setName] = useState("")
  const [age,setAge] = useState(18)
  const [isStudent,setIsStudent] = useState(true)
     const [seconds, setSeconds] = useState(0); 

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

useEffect(()=>{
  console.log("hello from useeffect")
  document.title = "my react app"
},[cnt])
// useEffect(()=>{
//   console.log("hello from useeffect")
//   document.title = "my react app"
// },[])
// useEffect(()=>{
//   console.log("hello from useeffect")
//   document.title = "my react app"
// })
  return (
    <>
    

  <Navbar name = "dhruv" />
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

  <StudentCard name="Amit" course = "cse" marks= {80} active="active" city="Mumbai"/>
  <StudentCard name="Dhruv" course = "it" marks= {90} active="active" city="Mumbai"/>
  <StudentCard name="omkar" course = "cse" marks= {80} active="active" city="Mumbai"/>
  <StudentCard name="priya" course = "cse" marks= {85} active="active" city="Mumbai"/>
    
  <Footer/>
     
    </>
  )
}

export default App
