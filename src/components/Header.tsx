import { useState } from "react";
import Anchor from "./Anchor";
import { MenuIcon, CloseIcon } from "./Icons";

function ResponsiveMenu() {
    return (
        <div className='absolute top-16 left-0 w-full bg-white flex flex-col items-start px-4 py-4 gap-4 shadow-md md:hidden z-50 dark:bg-slate-900'>
            <Anchor url='#about' text='Sobre mim' />
            <Anchor url='#projects' text='Projetos' />
            <Anchor url='#contact' text='Contato' />
        </div>
    );
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='w-full px-4 py-4 flex justify-between md:justify-start items-center bg-white shadow-md fixed inset-x-0 top-0 gap-5 z-50'>
            <a href='#top'>
                <img
                    src='/assets/logo.svg'
                    alt='Icon'
                    width={42}
                    height={42}
                    className='dark:invert'
                />
            </a>
            <nav className='hidden md:flex items-center gap-4'>
                <Anchor url='#about' text='Sobre mim' />
                <Anchor url='#projects' text='Projetos' />
                <Anchor url='#contact' text='Contato' />
            </nav>

            <div className='md:hidden cursor-pointer'>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <CloseIcon className='dark:fill-white' />
                    ) : (
                        <MenuIcon className='dark:fill-white' />
                    )}
                </button>
            </div>

            {menuOpen && <ResponsiveMenu />}
        </header>
    );
}

export default Header;
