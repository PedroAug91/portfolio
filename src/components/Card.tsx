function Card() {
    return (
        <div className='max-w-lg mt-10 rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-white min-w-md'>
            <p className='mb-4 text-lg'>
                Oi, meu nome é Pedro. Sou desenvolvedor de sistemas web. =)
            </p>
            <p className='mb-4 text-sm'>
                Atualmente estou cursando bacharelado em Tecnologia da
                Informação pelo Instituto Metrópole Digital (IMD/UFRN) e possuo
                curso técnico em informática pelo IFRN.
            </p>
            <p className='mb-2 font-semibold'>
                Tenho experiência com as seguintes tecnologias:
            </p>
            <ul className='columns-3 text-sm list-disc list-inside gap-x-4'>
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>PHP</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Flask (Python)</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Laravel (PHP)</li>
                <li>React</li>
                <li>React Router</li>
                <li>Tailwind CSS</li>
                <li>Docker</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
            </ul>
        </div>
    );
}

export default Card;
