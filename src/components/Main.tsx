import Hero from "./Hero";
import Section from "./Section";
import AboutMeCard from "./AboutMeCard";
import ProjectCard from "./ProjectCard";

function Main() {
    return (
        <main>
            <Hero>
                <Section
                    heading='Quem sou eu? 🤔'
                    className='flex flex-col gap-y-10 items-center lg:flex-row lg:justify-between'
                >
                    <AboutMeCard />
                    <img
                        src='/assets/itsame.webp'
                        alt="It's a picture of me."
                        className='max-w-xs sm:max-w-md rounded-4xl lg:order-last order-first'
                    />
                </Section>
            </Hero>
            <Section heading='Projetos que desenvolvi' sectionId='projects' center={true} className="flex flex-col gap-4">
                <ProjectCard 
                projectUrl="https://cajusoftwares.com.br"
                imgSrc="/assets/cajusoftwares.webp"
                imgAlt="Imagem website institucional."
                heading="Caju Softwares"
                description="Website institucional para a empresa de desenvolvimento de sistemas Caju Softwares."
                technologies={["NodeJs", "React Router", "Vite", "TailwindCSS"]}
                imageSide="right"
                />
                <ProjectCard 
                projectUrl=""
                imgSrc="/assets/rnsus.webp"
                imgAlt="Imagem website de gerenciamento de inventário."
                heading="RNSUS - DTIC/PMRN"
                description="Sistema de gerenciamento de inventário de bens doados pelo RN Sustentável para a PMRN."
                technologies={["Python", "Flask", "Docker", "PostgreSQL"]}
                imageSide="left"
                />
                <ProjectCard 
                projectUrl="https://github.com/PedroAug91/todo-flaskapp"
                imgSrc="/assets/todoflaskapp.webp"
                imgAlt="Imagem website de gerenciamento de tarefas."
                heading="ToDo app"
                description="Sistema de gerenciamento de tarefas simples."
                technologies={["Python", "Flask", "MySQL"]}
                imageSide="right"
                />
                <ProjectCard 
                projectUrl=""
                imgSrc="/assets/telepesquisaia.webp"
                imgAlt="Imagem website institucional."
                heading="ChatBot RAG"
                description="Chatbot para encontrar empresas utilizando embeddings, Rag e Vector Search"
                technologies={["React", "NodeJs", "TailwindCSS", "Vite", "Docker", "ExpressJs"]}
                imageSide="right"
                />
            </Section>
        </main>
    );
}

export default Main;
