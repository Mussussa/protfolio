import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // Configurações de contato
  const phoneNumber = "258876108960"; // Apenas números, sem "+" ou espaços
  const email = "xismaelchaibo@mail.com";
  const message = encodeURIComponent("Olá Ismael, vi seu portfólio e gostaria de conversar sobre um projeto!");

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Vamos resolver seu problema?</h2>
      <p className="contact-subtitle">Estou disponível para novos projetos e consultorias.</p>

      <div className="contact-container">
        
        {/* WhatsApp - Abre em nova aba e funciona em PC e Mobile */}
        <a 
          href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-card whatsapp-btn"
        >
          <div className="card-content">
            <h3>WhatsApp</h3>
            <p>Clique para iniciar conversa</p>
            <strong>+258 87 610 8960</strong>
          </div>
        </a>

        {/* Email - Abre o cliente de e-mail padrão do usuário */}
        <a 
          href={`mailto:${email}`} 
          className="contact-card email-btn"
        >
          <div className="card-content">
            <h3>E-mail</h3>
            <p>Envie uma proposta para:</p>
            <strong>{email}</strong>
          </div>
        </a>

        {/* Telefone - No celular, abre o discador automaticamente */}
        <a 
          href={`tel:+${phoneNumber}`} 
          className="contact-card phone-btn"
        >
          <div className="card-content">
            <h3>Telefone</h3>
            <p>Segunda a Sexta-feira</p>
            <strong>87 610 8960</strong>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Contact;