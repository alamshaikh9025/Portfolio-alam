import { NavLink } from "react-router-dom";

import { logo,alamlogo } from "../assets/images";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/ '>
        <h1 className="alamnamefont">Alam Shaikh</h1>
      </NavLink>
      <nav className='flex text-lg gap-5 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/resume' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Resume
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
