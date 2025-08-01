import { GithubIcon, LinkedInIcon, GmailIcon } from "./Icons";
import SocialsAnchor from "./SocialAnchor";

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
                    <SocialsAnchor url='https://github.com/pedroaug91'>
                        <GithubIcon className='dark:fill-white' />
                        <span className='hover:underline'>PedroAug91</span>
                    </SocialsAnchor>
                    <SocialsAnchor url='https://www.linkedin.com/in/pedro-augusto-29812229b'>
                        <LinkedInIcon className='dark:fill-white' />
                        <span className='hover:underline'>Pedro Augusto</span>
                    </SocialsAnchor>
                    <span className='text-sm text-black/75 dark:text-white/75 flex gap-2'>
                        <GmailIcon className='dark:fill-white' />
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
