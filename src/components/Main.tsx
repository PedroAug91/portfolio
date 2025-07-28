import Card from "./Card";
import Hero from "./Hero";
import Section from "./Section";

function Main() {
    return (
        <main>
            <Hero>
                <Section heading="Quem sou eu? 🤔" className="flex flex-col gap-y-10 items-center lg:flex-row lg:justify-between">
                    <Card />
                    <img src="/assets/itsame.jpg" alt="It's a picture of me." className="max-w-md rounded-full lg:order-last order-first"/>
                </Section>
            </Hero>
        </main>
    );
}

export default Main;
