import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}