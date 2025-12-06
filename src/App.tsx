import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="bg-grid"></div>
      <div className="gradient-orb" style={{ top: '10%', left: '20%', width: '400px', height: '400px', background: '#3b82f6' }}></div>
      <div className="gradient-orb" style={{ top: '40%', right: '10%', width: '300px', height: '300px', background: '#60a5fa', animationDelay: '-2s' }}></div>
      <div className="gradient-orb" style={{ bottom: '10%', left: '30%', width: '500px', height: '500px', background: '#22d3ee', animationDelay: '-5s' }}></div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-gray-900/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Le Khanh Minh. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with <span className="text-blue-400">React</span> + <span className="text-cyan-400">TypeScript</span> + <span className="text-sky-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
