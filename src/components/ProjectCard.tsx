type Technologies =
    | "Python"
    | "JavaScript"
    | "TypeScript"
    | "PHP"
    | "HTML5"
    | "CSS3"
    | "Flask"
    | "NodeJs"
    | "ExpressJs"
    | "Laravel"
    | "React"
    | "React Router"
    | "TailwindCSS"
    | "Docker"
    | "PostgreSQL"
    | "MySQL"
    | "Jinja"
    | "Vite";

interface ProjectCardProps {
    imgSrc: string;
    imgAlt: string;
    heading: string;
    description: string;
    technologies: Technologies[];
    imageSide: "right" | "left";
    projectUrl?: string;
}

function getColor(technology: Technologies) {
    const technologies = {
        Python: "bg-blue-600",
        JavaScript: "bg-yellow-400",
        TypeScript: "bg-cyan-500",
        PHP: "bg-purple-500",
        HTML5: "bg-red-500",
        CSS3: "bg-blue-500",
        Flask: "bg-gray-800",
        NodeJs: "bg-green-500",
        ExpressJs: "bg-red-500",
        Laravel: "bg-orange-500",
        React: "bg-cyan-400",
        "React Router": "bg-teal-400",
        TailwindCSS: "bg-cyan-400",
        Docker: "bg-blue-500",
        PostgreSQL: "bg-blue-700",
        MySQL: "bg-blue-600",
        Vite: "bg-orange-400",
        Jinja: "bg-stone-800",
    };

    return technologies[technology];
}

function ProjectCard({
    imgSrc,
    imgAlt,
    heading,
    description,
    technologies,
    projectUrl,
    imageSide,
}: ProjectCardProps) {
    const tags = technologies.map((t, i) => {
        const bgColor = getColor(t);
        return (
            <li
                key={i}
                className={`${bgColor} text-white font-semibold py-1 px-4 rounded-full`}
            >
                {t}
            </li>
        );
    });

    const img = (
        <a
            href={projectUrl ?? "#projects"}
            target={projectUrl ? "_blank" : "_self"}
        >
            <img
                className='max-w-xs md:max-w-lg rounded-sm border border-stone-200 dark:border-none'
                src={imgSrc}
                alt={imgAlt}
            />
        </a>
    );
    const div = (
        <div className='flex flex-col gap-4 justify-center sm:min-w-sm max-w-sm order-1 lg:order-none'>
            <h1 className='text-2xl font-semibold mx-auto'>{heading}</h1>
            <p className='text-wrap text-center'>{description}</p>
            <ul className='flex gap-1 flex-wrap justify-center'>{tags}</ul>
        </div>
    );

    let content;
    if (imageSide === "left") {
        content = (
            <>
                {img}
                {div}
            </>
        );
    } else {
        content = (
            <>
                {div}
                {img}
            </>
        );
    }

    return (
        <div className='bg-white dark:bg-slate-700 dark:text-white shadow-md rounded-2xl py-3 px-3 flex flex-col items-center lg:flex-row lg:justify-between gap-4 max-w-fit'>
            {content}
        </div>
    );
}

export default ProjectCard;
