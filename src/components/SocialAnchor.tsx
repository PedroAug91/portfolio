import type { ReactElement } from "react";

interface SocialAnchorProps {
    children: ReactElement | ReactElement[];
    url: string;
}

function SocialsAnchor({ children, url }: SocialAnchorProps) {
    return (
        <a
            href={url}
            className='text-sm text-black/75 dark:text-white/75 flex gap-2'
        >
            {children}
        </a>
    );
}

export default SocialsAnchor;
