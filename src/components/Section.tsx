import type { ReactNode } from "react";

interface SectionProps {
    heading: string;
    children: ReactNode;
    className?: string;
    center?: boolean;
}

function Section({
    heading,
    children,
    className = "",
    center = false,
}: SectionProps) {
    const sectionHeading = (
        <h1 className={`text-3xl mb-6 ${center ? "max-w-fit mx-auto" : ""}`}>
            {heading}
        </h1>
    );

    return (
        <section className='pt-10 md:py-26 px-4'>
            {sectionHeading}
            <div className={className}>{children}</div>
        </section>
    );
}

export default Section;
