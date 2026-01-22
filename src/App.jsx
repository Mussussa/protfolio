// src/App.jsx
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import './App.css';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills /> 
      <Pricing />
      <ProjectGrid />
      <Contact />
      
    </div>
  );
}

export default App;