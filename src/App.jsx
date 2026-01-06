// src/App.jsx
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Skills from './components/Skills';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills /> 
      <ProjectGrid />
      <Contact />
      
    </div>
  );
}

export default App;