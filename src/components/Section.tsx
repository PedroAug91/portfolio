import type { ReactNode } from "react";

interface SectionProps {
    heading: string;
    children: ReactNode;
    className?: string;
    center?: boolean;
    sectionId?: string;
}

function Section({
    heading,
    children,
    sectionId = undefined,
    className = "",
    center = false,
}: SectionProps) {
    return (
        <section
            className={`py-10 md:py-26 px-4 flex flex-col ${center ? "items-center" : ""}`}
            id={sectionId}
        >
            <h1 className={`text-3xl mb-6 dark:text-white`}>{heading}</h1>
            <div className={className}>{children}</div>
        </section>
    );
}

export default Section;
