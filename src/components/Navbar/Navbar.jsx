import './Navbar.css'
import navicon  from "../../assets/image.png"
import { useState } from 'react';
import { Link ,NavLink} from 'react-router-dom';
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
                <NavLink to="/">Home </NavLink>
            </li>
             <li>
                 <NavLink to="/services">Services </NavLink>
            </li>
             <li>
                 <NavLink to="/aboutus">About us </NavLink>
            </li>
             <li>
                <NavLink to = "/contactus">Contact us</NavLink>
            </li>
          
        </ul>
        <button className='navbtn' onClick={()=>{setOpenMenu(!openMenu)}} >
            ___<br/>___<br/>___<br/>
        
          
        </button>
     </nav>
    )
}

export default Navbar;