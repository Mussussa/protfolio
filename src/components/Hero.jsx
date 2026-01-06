// src/components/Hero.jsx
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Olá, sou Desenvolvedor Web <span className="highlight">Full Stack</span></h1>
        <p className="description">
          Meu foco é <strong>codificar soluções para problemas de clientes</strong>. 
          Especialista em transformar ideias em aplicações reais com React, Node e Bancos de Dados.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">Ver Soluções</a>
          <a href="https://github.com/Mussussa" target="_blank" className="btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;