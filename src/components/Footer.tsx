import { GithubIcon, LinkedInIcon, GmailIcon } from "./Icons";

function Footer() {
    return (
        <footer
            className='border-t border-t-neutral-200 py-9 px-3'
            id='contact'
        >
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl'>Contato</h1>
                </div>
                <nav className='flex flex-col gap-4'>
                    <a
                        target='_blank'
                        href='https://github.com/pedroaug91'
                        className='text-sm text-black/75 flex gap-2'
                    >
                        <GithubIcon />
                        <span className='hover:underline'>PedroAug91</span>
                    </a>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/pedro-augusto-29812229b'
                        className='text-sm text-black/75 flex gap-2'
                    >
                        <LinkedInIcon />
                        <span className='hover:underline'>Pedro Augusto</span>
                    </a>
                    <span className='text-sm text-black/75 flex gap-2'>
                        <GmailIcon />
                        <span className='hover:underline select-all'>
                            pedro.aug2808@gmail.com
                        </span>
                    </span>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
