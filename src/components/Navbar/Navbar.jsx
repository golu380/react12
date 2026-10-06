import './Navbar.css'
import navicon  from "../../assets/image.png"
import { useState } from 'react';
function Navbar(props){

    const [openMenu,setOpenMenu] = useState(false);
    console.log(openMenu)
    

    return (
     <nav className='navbar'>
        <div className='nav-logo'>
            MyWebsite
        </div>
        <ul className={`navlist ${openMenu? "active":""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
             <li>
                <a href='/'>Services</a>
            </li>
             <li>
                <a href='/'>Contact</a>
            </li>
             <li>
                <a href='/'>About</a>
            </li>
          
        </ul>
        <button className='navbtn' onClick={()=>{setOpenMenu(!openMenu)}} >
            ___<br/>___<br/>___<br/>
        
          
        </button>
     </nav>
    )
}

export default Navbar;