import type { ReactNode } from "react";

interface HeroProps {
    children: ReactNode;
}

function Hero({ children }: HeroProps) {
    return (
        <div
            className='bg-[url(/assets/hero.webp)] bg-cover bg-no-repeat pt-[74px] text-white'
            id='about'
        >
            {children}
        </div>
    );
}

export default Hero;
