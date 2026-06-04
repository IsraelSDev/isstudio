"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

function openMailto(nome: string, email: string, assunto: string, mensagem: string) {
  const body = encodeURIComponent(
    `Olá, ISSTUDIO!\n\nNome: ${nome}\nE-mail: ${email}\n\n${mensagem}`,
  );
  const subject = encodeURIComponent(`[ISSTUDIO] ${assunto}`);
  window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const assunto = String(data.get("assunto") ?? "Contato pelo site").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, assunto, mensagem }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        if (res.status === 502 || res.status === 503) {
          openMailto(nome, email, assunto, mensagem);
          setStatus("success");
          form.reset();
          return;
        }
        throw new Error(json.error ?? "Erro ao enviar.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Não foi possível enviar. Tente de novo.",
      );
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label className="field">
          <span>Nome</span>
          <input name="nome" type="text" required placeholder="Seu nome" />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input name="email" type="email" required placeholder="seu@email.com" />
        </label>
      </div>
      <label className="field">
        <span>Assunto</span>
        <input name="assunto" type="text" placeholder="Como podemos ajudar?" />
      </label>
      <label className="field">
        <span>Mensagem</span>
        <textarea
          name="mensagem"
          rows={5}
          required
          placeholder="Conte sobre seu projeto ou ideia..."
        />
      </label>

      {status === "error" && (
        <p className="contact-form__error" role="alert">
          {errorMsg}
        </p>
      )}

      {status === "success" && (
        <p className="contact-form__success" role="status">
          Mensagem enviada para <strong>{siteConfig.email}</strong>. Em breve entraremos em
          contato.
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary btn--full"
        disabled={status === "loading"}
      >
        {status === "loading"
          ? "Enviando…"
          : status === "success"
            ? "Enviado ✓"
            : "Enviar mensagem"}
      </button>

      <p className="contact-form__hint">
        As mensagens são enviadas para{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </form>
  );
}
