// src/components/Hero.jsx
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Adicionando o Logotipo */}
        <div className="hero-logo-container">
          <img src="/logo.jpeg" alt="Vulpe Logo" className="hero-logo" />
          <p>ISMAEL MUSSUSSA CHAIBO</p>
        </div>

        <h1>
          Olá, sou Desenvolvedor Web{" "}
          <span className="highlight">Full Stack</span>
        </h1>
        <p className="description">
          Meu foco é{" "}
          <strong>
            codificar soluções robustas que resolvem gargalos de negócios
          </strong>
          . Atuo no desenvolvimento integral de aplicações web do design
          interativo no <b>Front-end</b> à arquitetura segura de dados no <a>Back-end</a>,
          transformando necessidades comerciais em sistemas eficientes e prontos
          para o mercado.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            Ver Soluções
          </a>
          <a
            href="https://github.com/Mussussa"
            target="_blank"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
