import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import GitLogo from '../assets/gitwhite.svg'


const Navbar = () => {
    
    const navLinkClass = ({ isActive }) =>
        `font-medium transition-all duration-200 ${isActive
            ? "bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent underline underline-offset-5 decoration-[#632EE3]"
            : "text-gray-700 hover:text-[#632EE3]"
        }`;

    const links = (
        <>
            <ul className="menu menu-horizontal px-1 sm: ">
                <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                <li><NavLink to='/Apps' className={navLinkClass}>Apps</NavLink></li>
                <li><NavLink to="/installation" className={navLinkClass}>Installation</NavLink></li>
            </ul>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className='flex items-center justify-between w-[1440px] mx-auto'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {" "}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            {" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">

                        {links} 
                    </ul>
                </div>
                <Link to='/' className="pl-5 pr-5 flex items-center text-xl">
                    <img className='w-10 mr-2' src={Logo} alt="" />
                    <div className='flex text-xl font-bold bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>  HERO.IO</div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {links} 
            </div>
               
            
            <div className="navbar-end">
                <a href='https://github.com/iamanowarbd' className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white rounded-lg"><img src={GitLogo} alt="" />
                    <div>Contribute</div>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;