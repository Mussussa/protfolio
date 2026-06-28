// src/components/ChatMessages.jsx
import { useEffect, useRef } from "react";
import '../styles/chat.css';

export default function ChatMessages({ historico }) {
  const fimDasMensagensRef = useRef(null);

  // Faz a rolagem suave sempre que o histórico ganhar uma nova mensagem
  useEffect(() => {
    fimDasMensagensRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [historico]);

  return (
    <div className="historico-mensagens">
      {historico.map((msg, index) => {
        // Verifica se a mensagem veio do usuário ou da IA
        const éUsuario = msg.role === "user";
        
        return (
          <div 
            key={index} 
            className={`balao-mensagem ${éUsuario ? "usuario" : "ia"}`}
          >
            {/* msg.parts[0].text pega o conteúdo de texto da estrutura do Gemini */}
            <p>{msg.parts[0].text}</p>
          </div>
        );
      })}
      
      {/* Âncora invisível onde o scroll vai focar */}
      <div ref={fimDasMensagensRef} />
    </div>
  );
}