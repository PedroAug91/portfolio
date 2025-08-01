interface AnchorProps {
    text: string;
    url: string;
}

function Anchor({ text, url }: AnchorProps) {
    return (
        <a
            href={url}
            className='text-black font-bold hover:underline dark:text-white'
        >
            {text}
        </a>
    );
}

export default Anchor;
