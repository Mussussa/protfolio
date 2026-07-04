// src/App.jsx
import { useState } from "react";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import "./App.css";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import ChatMessages from "./components/ChatMessages"; // 1. Importa o novo componente
import { projects as mydatas } from './data/projects.js';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function App() {
  const [isModalOpen, setisModalOpen] = useState(false);

  // 2. Estado para guardar o histórico de mensagens (começa com a saudação da IA)
  const [historico, setHistorico] = useState([
    {
      role: "model",
      parts: [{ text: "Olá! Qual a sua dúvida?" }],
    },
  ]);

  // 3. Estado para controlar o texto que o usuário digita no input
  const [input, setInput] = useState("");

  // 4. Função que roda quando o usuário envia a pergunta
  const lidarComEnvio = async (e) => {
    e.preventDefault(); // Impede o refresh da página
    if (!input.trim()) return; // Se estiver vazio, não faz nada

    // Cria o objeto da nova mensagem do usuário no padrão do Gemini
    const novaMensagemUsuario = { role: "user", parts: [{ text: input }] };

    // Junta com o histórico atual imediatamente para aparecer o balão do usuário na tela
    const historicoComUsuario = [...historico, novaMensagemUsuario];
    setHistorico(historicoComUsuario);
    setInput(""); // Limpa o campo de texto

    try {
      // Faz a chamada assíncrona enviando TODO o histórico para ele manter o contexto
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: historicoComUsuario, 
        config: {
          systemInstruction: `
            Você é o ISMAEL CHATBOT, o assistente virtual do portfólio do Ismael Chaibo (Desenvolvedor Full Stack e estudante de Engenharia Eletrónica) , programador à 2 anos.
            Sua missão é responder dúvidas dos visitantes com base nos projetos reais do Ismael.
            
            Aqui está a lista oficial de projetos antigos e atuais do Ismael obtidos diretamente do banco de dados do sistema:
            ${JSON.stringify(mydatas)}
            
            Regras de resposta:
            1. Use os dados acima para responder de forma precisa sobre o que cada projeto faz, as tecnologias utilizadas e as soluções criadas pelo Ismael (resumidamente).
            2. Seja direto, amigável e profissional. Responda em no máximo 2 parágrafos  (resumidamente).
            3. Se o usuário perguntar por um projeto que NÃO está na lista acima, responda educadamente que esse projeto não está listado no momento e ofereça informações sobre os projetos que existem no JSON  (resumidamente).
            4. convida sempre ao whatsapp :258876108960 ou email: xismaelchaibo@mail.com
            5. resume todas as resposta o maximo possivel.
            6. o custo de site e sistemas dependendo da complexidade, funcionalidades desejadas e tecnologias envolvidas

          `
        }
      });

      // Pega o texto gerado pelo Gemini
      const respostaIA = { 
        role: "model", 
        parts: [{ text: response.text }] 
      };

      // Junta a resposta ao histórico
      let historicoFinal = [...historicoComUsuario, respostaIA];

      // Mantém apenas as últimas 8 mensagens (4 perguntas e 4 respostas)
      if (historicoFinal.length > 8) {
        historicoFinal = historicoFinal.slice(-8);
      }

      // Atualiza o estado para renderizar a resposta da IA na tela
      setHistorico(historicoFinal);

    } catch (error) {
      console.error("Erro na conexão com o Gemini:", error);
      
      // Adiciona uma mensagem de erro amigável no chat se a API falhar
      setHistorico([
        ...historicoComUsuario, 
        { role: "model", parts: [{ text: "Ops, tive um problema para responder agora. Pode tentar de novo?" }] }
      ]);
    }
  };

  return (
    <div className="App">
      <Hero />
      <Skills />
      {/* <Pricing /> */}
      <ProjectGrid />
      <Contact />

      <div>
        <button className="bolha" onClick={() => setisModalOpen(!isModalOpen)}>
          ChatBot
        </button>
      </div>

      {isModalOpen && (
        <div className="chat_space">
          <p className="titulo">ISMAEL CHATBOT (4 perguntas disponíveis)</p>
          <div className="conversa">
            {/* 5. O componente de mensagens substituindo o texto estático */}
            <ChatMessages historico={historico} />

            <div>
              {/* 6. Form configurado com a função de envio */}
              <form onSubmit={lidarComEnvio}>
                {/* Mudamos para textarea para permitir as 3 linhas com scroll */}
                <textarea
                  rows="3"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Digite sua dúvida..."
                />

                {/* Div para agrupar os botões lado a lado na parte de baixo */}
                <div className="botoes_form">
                  <button type="submit">enviar</button>
                  <button type="button" onClick={() => setisModalOpen(false)}>
                    cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;