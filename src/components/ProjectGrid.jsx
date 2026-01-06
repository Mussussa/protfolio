// src/components/ProjectGrid.jsx
import { projects } from "../data/projects";
import "../styles/ProjectGrid.css";

const ProjectGrid = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Soluções que Codifiquei</h2>
      <div className="grid-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* 1. O Vídeo (No topo do card para chamar atenção) */}
            {/* 1. O Vídeo - Só aparece a DIV inteira se existir URL */}
{project.videoUrl && (
  <div className="video-container">
    <video
      width="100%"
      controls
      muted
      playsInline
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
    >
      <source src={project.videoUrl} type="video/mp4" />
      Seu navegador não suporta vídeos.
    </video>
  </div>
)}

            {/* 2. O Conteúdo Textual */}
            <div className="card-body">
              <div className="card-header">
                <h3>{project.title}</h3>
              </div>
              <p>
                <strong>🚨 Problema:</strong> {project.problem}
              </p>
              <p>
                <strong>✅ Solução:</strong> {project.solution}
              </p>

              <div className="tech-stack">
                {project.techs.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Rodapé com links (Opcional) */}
            <div className="card-footer">
              {project.demo && (
                <a href={project.demo} target="_blank" className="link-btn">
                  {project.status === "lancado" ? " Acessar Projeto " : "Para acessar contacte-me "}
                </a>
              )}
              <small style={{ color: "#94a3b8" }}>
                GitHub:{" "}
                {project.github === "Privado" ? "🔒 Privado" : "🌐 Público"}
              </small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
