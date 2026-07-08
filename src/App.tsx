import Nav from './components/Nav';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Advocacy from './components/Advocacy';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Nav />
      <Hero />
      <Pillars />
      <Timeline />
      <Skills />
      <Advocacy />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
