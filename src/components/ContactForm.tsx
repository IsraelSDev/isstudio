"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`;

function isFormSubmitSuccess(data: { success?: boolean | string; message?: string }) {
  if (data.success === true || data.success === "true") return true;
  const msg = (data.message ?? "").toLowerCase();
  return msg.includes("thanks") || msg.includes("thank");
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
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: nome,
          email,
          _replyto: email,
          _subject: `[ISSTUDIO] ${assunto}`,
          message: mensagem,
          _template: "table",
          _captcha: "false",
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        success?: boolean | string;
        message?: string;
      };

      if (!res.ok || !isFormSubmitSuccess(json)) {
        throw new Error(
          json.message ??
            "Não foi possível enviar agora. Confirme o e-mail no FormSubmit ou use o WhatsApp.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar. Tente novamente ou use o WhatsApp.",
      );
      setStatus("error");
    }
  }

  return (
    <form
      id="formulario-contato"
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
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
          {errorMsg}{" "}
          <a href={siteConfig.whatsappHref}>Falar no WhatsApp</a>
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
        O formulário envia direto para {siteConfig.email} — sem abrir o app de e-mail.
      </p>
    </form>
  );
}
