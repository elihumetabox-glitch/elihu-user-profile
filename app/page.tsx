import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import GitHubActivity from "../components/GitHubActivity";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Page() {
  return (
    <div className="min-h-full bg-stone-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <main>
        <Hero />
        <div className="section-fade"><About /></div>
        <div className="section-fade"><Skills /></div>
        <div className="section-fade"><Projects /></div>
        <div className="section-fade"><Experience /></div>
        <div className="section-fade"><Education /></div>
        <div className="section-fade"><Services /></div>
        <div className="section-fade"><GitHubActivity /></div>
        <div className="section-fade"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
