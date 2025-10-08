import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router';
import Twitter from '../assets/x-w.svg'
import Linkedin from '../assets/ln-w.svg'
import Facebook from '../assets/fb-w.svg'


const Footer = () => {
    return (
        <>
            <footer className="footer items-center sm:footer-horizontal bg-[#001931] text-neutral-content p-10">
                <div className='max-w-[1440px] w-full mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between gap-2 md:gap-10'>
                    <aside>
                        <Link to='/' className="pl-5 pr-5 flex items-center text-xl">
                            <img className='w-10 mr-2' src={Logo} alt="" />
                            <div className='text-xl font-bold text-white'>  HERO.IO</div>
                        </Link>
                    </aside>
                    <nav className='flex flex-col items-center gap-2 md:place-self-center md:justify-self-end'>
                        <p className='justify-center items-center text-white text-lg pb-1'>Social Links</p>
                        <div className="grid grid-flow-col gap-4">
                            <a href='https://github.com/iamanowarbd'>
                                <img src={Twitter} alt="" />
                            </a>
                            <a href='https://github.com/iamanowarbd'>
                                <img src={Linkedin} alt="" />
                            </a>
                            <a href='https://github.com/iamanowarbd'>
                                <img src={Facebook} alt="" />
                            </a>
                        </div>
                    </nav>
                </div>
            </footer>

            <footer className="footer-2 bg-[#001931]  text-base-content border-base-[#E5E7EB] border-t px-10 py-4 sm:footer-horizontal footer-center">
                <aside>
                    <p className='flex items-center justify-center text-white'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>

            </footer>
        </>
    );
};

export default Footer;