export interface CarouselCardProps {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    description: string;
}

function CarouselCard({
    imgSrc,
    imgAlt,
    heading,
    description,
}: CarouselCardProps) {
    return (
        <div className='rounded-xl shadow-lg px-6 py-4 max-w-lg text-center flex flex-col gap-2 bg-[#ffffff]'>
            <img
                src={imgSrc}
                alt={imgAlt}
                className='rounded-lg border border-stone-200'
            />
            <h1 className='font-bold'>{heading}</h1>
            <span className=''>{description}</span>
        </div>
    );
}

export default CarouselCard;
