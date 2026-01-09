// src/data/projects.js
export const projects = [
{
  "id": 1,
  "title": "Angell International School - Landing Page",
  "problem": "Informações desorganizadas em redes sociais e excesso de dúvidas repetitivas via chat, dificultando a conversão de novas matrículas para 2026.",
  "solution": "Desenvolvimento de uma Landing Page de alta performance com React, incluindo sistema de FAQ em acordeão para filtragem de dúvidas, background dinâmico com identidade visual integrada e arquitetura mobile-first para facilitar o contato direto via WhatsApp/Telefone.",
  "techs": ["React", "CSS3", "JavaScript", "Supabase", "Vercel"],
  "videoUrl": "https://zyzdvidcerbddnqlyhoz.supabase.co/storage/v1/object/public/videos-portfolio/projeto-angell-v1.mp4",
  "github": "Privado",
  "demo": "https://angell-tawny.vercel.app/",
  "status": "lancado",
  "features": [
    "Interface Responsiva",
    "FAQ Interativo",
    "Integração com API de Mensagens",
    "Hospedagem de Mídia em Cloud (Supabase)"
  ]
},
  {
    "id": 2, 
    "title": "Portal de Exames & Biblioteca Digital",
    "problem": "Milhares de estudantes moçambicanos enfrentam barreiras invisíveis no acesso a materiais de preparação, perdendo-se em arquivos desorganizados e plataformas inseguras que limitam o seu potencial de sucesso.",
    "solution": "Ergui um ecossistema digital inteligente que democratiza o acesso ao conhecimento. Através de uma arquitetura robusta de armazenamento em nuvem e segurança de nível bancário, transformei a gestão de conteúdos pedagógicos numa experiência fluida, onde a tecnologia serve como o motor principal para a aprovação académica.",
    "techs": ["Node.js", "Express", "MongoDB Atlas", "Supabase Storage", "Handlebars", "CSRF Protection"],
    "videoUrl": "https://zyzdvidcerbddnqlyhoz.supabase.co/storage/v1/object/public/videos-portfolio/projeto-curso-online-v1.mp4", 
    "demo": "https://mestreresolucoes.onrender.com",
    "github": "Privado",
    "status" : ""
},
{
  id: 3, // Lembre-se de manter o ID único
  title: "Portfólio Profissional v1",
  problem: "Necessidade de uma vitrine centralizada que provasse minhas habilidades técnicas, contornando a limitação de repositórios privados através de demonstrações em vídeo.",
  solution: "Desenvolvi este site usando React e Supabase, implementando técnicas de proteção de vídeo e design responsivo para atrair clientes e recrutadores.",
  techs: ["React", "Vite", "Supabase Storage", "CSS3 Moderno"],
  videoUrl: "", // Aqui você pode colocar um vídeo de você navegando no próprio site!
  demo: "https://protfolio-chi-livid.vercel.app/",
  github: "Privado",
  "status" : "lancado"
}
];