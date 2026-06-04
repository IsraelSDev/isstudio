"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

type Message = { role: "bot" | "user"; text: string };

const quickReplies = [
  "Quero um orçamento",
  "Vocês fazem IA?",
  "Ver portfólio",
  "Falar com humano",
];

const botReplies: Record<string, string> = {
  "Quero um orçamento":
    "Perfeito! Conte seu projeto em poucas linhas pelo formulário de contato ou WhatsApp. A ISSTUDIO responde com um plano sob medida.",
  "Vocês fazem IA?":
    "Sim — agents, copilots, RAG e automações em produção. Já entregamos centenas de sistemas e projetos com IA para clientes em todo o Brasil.",
  "Ver portfólio":
    "Role até a seção Portfólio: Capivara, Mega Agro Group e MedSystem Pro são exemplos reais que colocamos no ar.",
  "Falar com humano":
    `Claro! WhatsApp ${siteConfig.phone} ou e-mail ${siteConfig.email}. Nossa equipe responde rápido.`,
  default:
    "Sou o assistente da ISSTUDIO. Posso ajudar com orçamento, IA, portfólio ou contato humano — escolha uma opção abaixo.",
};

function BotAvatar({ active }: { active?: boolean }) {
  return (
    <span className={`ai-bot__avatar ${active ? "ai-bot__avatar--active" : ""}`}>
      <span className="ai-bot__face" aria-hidden>
        ◉‿◉
      </span>
      <span className="ai-bot__ring" aria-hidden />
    </span>
  );
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Olá! Sou o assistente ISSTUDIO. Já entregamos centenas de projetos — como posso ajudar?",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  function reply(userText: string) {
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setTyping(true);

    const answer = botReplies[userText] ?? botReplies.default;

    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: answer }]);
    }, 700 + Math.random() * 400);
  }

  function handleQuick(text: string) {
    if (text === "Ver portfólio") {
      setOpen(false);
      document.querySelector("#solucoes")?.scrollIntoView({ behavior: "smooth" });
    }
    reply(text);
  }

  return (
    <div className={`ai-assistant ${open ? "ai-assistant--open" : ""}`}>
      {open && (
        <div className="ai-assistant__panel" role="dialog" aria-label="Assistente ISSTUDIO">
          <header className="ai-assistant__header">
            <BotAvatar active />
            <div>
              <strong>ISSTUDIO AI</strong>
              <span>online · responde em segundos</span>
            </div>
            <button
              type="button"
              className="ai-assistant__close"
              aria-label="Fechar assistente"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="ai-assistant__messages" ref={listRef}>
            {messages.map((msg, i) => (
              <div
                key={`${i}-${msg.text.slice(0, 12)}`}
                className={`ai-msg ai-msg--${msg.role}`}
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="ai-msg ai-msg--bot ai-msg--typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="ai-assistant__quick">
            {quickReplies.map((q) => (
              <button key={q} type="button" onClick={() => handleQuick(q)}>
                {q}
              </button>
            ))}
          </div>

          <a href={siteConfig.whatsappHref} className="ai-assistant__cta" target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        className="ai-assistant__toggle"
        aria-expanded={open}
        aria-label={open ? "Fechar assistente IA" : "Abrir assistente IA"}
        onClick={() => setOpen((v) => !v)}
      >
        <BotAvatar active={!open} />
        {!open && <span className="ai-assistant__badge">IA</span>}
      </button>
    </div>
  );
}
