import './Navbar.css';
import { NavLink,Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <div className='navbar'>
        <div className="logo">
          <h1>BARAKA</h1>
        </div>
        <div style={{ display: 'flex' }}>
          <input type="text" placeholder='Search food...'/>
          <ul>
            <li><NavLink className='navLink' to={"/"}>Home</NavLink></li>
            <li><NavLink className='navLink' to={"/contact"}>Contact</NavLink></li>
            <li><NavLink className='navLink' to={"/about"}>About</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
