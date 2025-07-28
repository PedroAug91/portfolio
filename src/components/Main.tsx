import Card from "./Card";
import CarouselCard from "./CarouselCard";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Section from "./Section";

function Main() {
    return (
        <main>
            <Hero>
                <Section
                    heading='Quem sou eu? 🤔'
                    className='flex flex-col gap-y-10 items-center lg:flex-row lg:justify-between'
                >
                    <Card />
                    <img
                        src='/assets/itsame.jpg'
                        alt="It's a picture of me."
                        className='max-w-xs sm:max-w-md rounded-4xl lg:order-last order-first'
                    />
                </Section>
            </Hero>
            <Section heading='Projetos que desenvolvi' sectionId='projects'>
                <Carousel>
                    <CarouselCard
                        imgSrc='/assets/cajusoftwares.png'
                        imgAlt='Imagem de Website institucional'
                        heading='Caju Softwares'
                        technologies='React Router, Vite e TailwindCSS'
                        description='Website institucional'
                        projectUrl='https://cajusoftwares.com.br'
                    />
                    <CarouselCard
                        imgSrc='/assets/rnsus.png'
                        imgAlt='Imagem de sistema de gerenciamento de bens'
                        heading='RNSUS - DTIC/PMRN'
                        technologies='Python, Flask, Postgres e Docker'
                        description='Sistema de gerenciamento de inventário'
                    />
                    <CarouselCard
                        imgSrc='/assets/todoflaskapp.png'
                        imgAlt='Imagem de sistema de gerenciamento de tarefas'
                        heading='ToDo app'
                        technologies='Python, Flask, MySQL e Docker'
                        description='Sistema de gerenciamento de tarefas simples'
                        projectUrl='https://github.com/PedroAug91/todo-flaskapp'
                    />
                    <CarouselCard
                        imgSrc='/assets/telepesquisaia.png'
                        imgAlt='Imagem de sistema de gerenciamento de tarefas'
                        heading='ChatBot RAG'
                        technologies='ExpressJS, Langchain, React, ChromaDB, Docker'
                        description='Chatbot para encontrar empresas utilizando busca vetorial'
                        projectUrl='https://github.com/PedroAug91/telepesquisa-ia'
                    />
                </Carousel>
            </Section>
        </main>
    );
}

export default Main;
