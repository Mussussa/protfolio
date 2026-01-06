import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // Substitua pelo seu número com código do país (Ex: 258 para Moçambique)
  const phone = "258876108960"; 
  const message = encodeURIComponent("Olá Ismael, vi seu portfólio e gostaria de conversar sobre um projeto!");

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Vamos resolver seu problema?</h2>
      <p>Estou disponível para novos projetos e consultorias.</p>

      <div className="contact-container">
        
        {/* WhatsApp */}
        <a 
          href={`https://wa.me/${phone}?text=${message}`} 
          target="_blank" 
          rel="noreferrer" 
          className="contact-card whatsapp-btn"
        >
          <h3>WhatsApp</h3>
          <p>Clique para iniciar conversa</p>
          <strong>+258 87 610 8960</strong>
        </a>

        {/* Email */}
        <a 
          href="mailto:xismaelchaibo@mail.com" 
          className="contact-card email-btn"
        >
          <h3>E-mail</h3>
          <p>Envie uma proposta para:</p>
          <strong>xismaelchaibo@mail.com</strong>
        </a>

        {/* Telefone / Chamada */}
        <a 
          href="tel:+258876108960" 
          className="contact-card phone-btn"
        >
          <h3>Telefone</h3>
          <p>Segunda a Sexta-feira</p>
          <strong>87 610 8960</strong>
        </a>

      </div>
    </section>
  );
};

export default Contact;