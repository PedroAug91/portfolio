export interface CarouselCardProps {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    description: string;
    technologies: string;
    projectUrl?: string;
}

function CarouselCard({
    imgSrc,
    imgAlt,
    heading,
    description,
    technologies,
    projectUrl,
}: CarouselCardProps) {
    return (
        <div className='rounded-xl shadow-lg px-6 py-4 max-w-lg text-center flex flex-col gap-2 bg-[#ffffff]'>
            <a
                href={projectUrl || "#projects"}
                target={projectUrl ? "_blank" : "_self"}
            >
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className='rounded-lg border border-stone-200'
                />
            </a>
            <h1 className='font-bold'>{heading}</h1>
            <span className='italic text-stone-700'>{technologies}</span>
            <span className=''>{description}</span>
        </div>
    );
}

export default CarouselCard;
