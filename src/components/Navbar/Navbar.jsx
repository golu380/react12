import './Navbar.css'
function Navbar(props){

    return (
     <nav className='navbar'>
        <div className='nav-logo'>
            MyWebsite
        </div>
        <ul className='navlist'>
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
        <button className='navbtn'>{props.name[0].toUpperCase()}</button>
     </nav>
    )
}

export default Navbar;