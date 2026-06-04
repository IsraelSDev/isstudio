import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactBody = {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  const nome = body.nome?.trim();
  const email = body.email?.trim();
  const assunto = body.assunto?.trim() || "Contato pelo site";
  const mensagem = body.mensagem?.trim();

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail e mensagem." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
    {
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
      }),
    },
  );

  const data = (await res.json().catch(() => ({}))) as {
    success?: string;
    message?: string;
  };

  if (!res.ok) {
    return NextResponse.json(
      { error: data.message ?? "Não foi possível enviar. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
