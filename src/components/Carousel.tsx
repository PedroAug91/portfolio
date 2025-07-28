import React, { useRef, type ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

interface CarouselProps {
    children: ReactElement[];
}

function Carousel({ children }: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount =
                direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className='relative'>
            <button
                onClick={() => scroll("left")}
                className='absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100'
            >
                <ChevronLeft />
            </button>

            <div
                ref={scrollRef}
                className='flex overflow-x-auto scroll-smooth gap-4 px-10 py-4 no-scrollbar'
            >
                {React.Children.map(children, (child) => (
                    <div className='flex-shrink-0'>{child}</div>
                ))}
            </div>

            <button
                onClick={() => scroll("right")}
                className='absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100'
            >
                <ChevronRight />
            </button>
        </div>
    );
}

export default Carousel;
