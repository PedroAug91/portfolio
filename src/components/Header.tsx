import { useState } from "react";
import Anchor from "./Anchor";
import { MenuIcon, CloseIcon } from "./Icons";

function ResponsiveMenu() {
    return (
        <div className='absolute top-16 left-0 w-full bg-white flex flex-col items-start px-4 py-4 gap-4 shadow-md md:hidden z-50'>
            <Anchor url='#about' text='About me' />
            <Anchor url='#projects' text='Projects' />
            <Anchor url='#contact' text='Contact' />
        </div>
    );
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='w-full px-4 py-4 flex justify-between md:justify-start items-center bg-white shadow-md fixed inset-x-0 top-0 gap-5'>
            <a href='#top'>
                <img
                    src='/public/favicon.svg'
                    alt='Icon'
                    width={42}
                    height={42}
                />
            </a>
            <nav className='hidden md:flex items-center gap-4'>
                <Anchor url='#about' text='About me' />
                <Anchor url='#projects' text='Projects' />
                <Anchor url='#contact' text='Contact' />
            </nav>

            <div className='md:hidden cursor-pointer'>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {menuOpen && <ResponsiveMenu />}
        </header>
    );
}

export default Header;
