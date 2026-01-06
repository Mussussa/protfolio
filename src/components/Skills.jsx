// src/components/Skills.jsx
import '../styles/Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      tools: ["HTML5", "CSS3", "JavaScript", "React", "Handlebars"]
    },
    {
      title: "Backend & Server Side",
      tools: ["Node.js", "Express", "Handlebars (SSR)"]
    },
    {
      title: "Bancos de Dados",
      tools: ["MySQL (Relacional)", "MongoDB (NoSQL)"]
    },
    {
      title: "Ferramentas & Deploy",
      tools: ["Git", "Vite", "Netlify", "Vercel", "Render"]
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Minha Stack Tecnológica</h2>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skill-card">
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.tools.map(tool => (
                <span key={tool} className="skill-item">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;