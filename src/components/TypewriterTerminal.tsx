"use client";

import { Fragment, type ReactNode, useCallback, useEffect, useState } from "react";
import { codeSnippets } from "@/lib/site";

type Line = { text: string; tokens: string[] };

function colorize(text: string): ReactNode {
  if (!text) return "\u00A0";

  const rules: { re: RegExp; cls: string }[] = [
    { re: /^(\s*#.*|\/\/.*)$/, cls: "hl-comment" },
    { re: /"([^"]*)"/g, cls: "hl-string" },
    { re: /\b(import|from|await|const|let|new|return|echo)\b/g, cls: "hl-keyword" },
    { re: /\b(console\.log|Agent|ModelRouter|isstudio)\b/g, cls: "hl-fn" },
    { re: /\b(\d+%?)\b/g, cls: "hl-num" },
  ];

  let keySeq = 0;
  const nextKey = () => `hl-${keySeq++}`;

  let nodes: ReactNode[] = [text];

  rules.forEach(({ re, cls }) => {
    const next: ReactNode[] = [];
    nodes.forEach((node) => {
      if (typeof node !== "string") {
        next.push(node);
        return;
      }
      const parts = node.split(re);
      parts.forEach((part, i) => {
        if (!part) return;
        if (i % 2 === 1) {
          next.push(
            <span key={nextKey()} className={cls}>
              {part}
            </span>,
          );
        } else {
          next.push(<Fragment key={nextKey()}>{part}</Fragment>);
        }
      });
    });
    nodes = next;
  });

  return <>{nodes}</>;
}

export function TypewriterTerminal() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [displayed, setDisplayed] = useState<Line[]>([]);
  const [status, setStatus] = useState<"typing" | "pause" | "clearing">("typing");
  const [cursorOn, setCursorOn] = useState(true);

  const snippet = codeSnippets[snippetIdx];
  const currentLine = snippet.lines[lineIdx]?.text ?? "";

  const advance = useCallback(() => {
    if (status === "clearing") return;

    if (charIdx < currentLine.length) {
      setCharIdx((c) => c + 1);
      return;
    }

    const fullLine = snippet.lines[lineIdx];
    setDisplayed((prev) => [...prev, fullLine]);
    setCharIdx(0);

    if (lineIdx + 1 >= snippet.lines.length) {
      setStatus("pause");
      return;
    }
    setLineIdx((l) => l + 1);
  }, [charIdx, currentLine.length, lineIdx, snippet.lines, status]);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (status === "pause") {
      const t = setTimeout(() => setStatus("clearing"), 2800);
      return () => clearTimeout(t);
    }

    if (status === "clearing") {
      const t = setTimeout(() => {
        setDisplayed([]);
        setLineIdx(0);
        setCharIdx(0);
        setSnippetIdx((i) => (i + 1) % codeSnippets.length);
        setStatus("typing");
      }, 600);
      return () => clearTimeout(t);
    }

    const speed =
      currentLine.startsWith("#") || currentLine.startsWith("//") ? 28 : 18;
    const t = setTimeout(advance, speed + Math.random() * 12);
    return () => clearTimeout(t);
  }, [status, advance, currentLine]);

  const partial = currentLine.slice(0, charIdx);

  return (
    <div className="terminal">
      <div className="terminal__chrome">
        <div className="terminal__dots">
          <span className="terminal__dot terminal__dot--red" />
          <span className="terminal__dot terminal__dot--yellow" />
          <span className="terminal__dot terminal__dot--green" />
        </div>
        <span className="terminal__title">{snippet.filename}</span>
        <span className="terminal__status">
          <span className="terminal__pulse" />
          building…
        </span>
      </div>
      <div className="terminal__body">
        <div className="terminal__gutter" aria-hidden>
          {Array.from({ length: Math.max(displayed.length + 2, 10) }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="terminal__code">
          <code>
            {displayed.map((line, i) => (
              <div key={`d-${i}`} className="terminal__line">
                {colorize(line.text)}
              </div>
            ))}
            {status === "typing" && (
              <div className="terminal__line terminal__line--active">
                {colorize(partial)}
                <span
                  className={`terminal__cursor ${cursorOn ? "terminal__cursor--on" : ""}`}
                >
                  ▍
                </span>
              </div>
            )}
          </code>
        </pre>
      </div>
      <div className="terminal__footer">
        <span>isstudio deploy</span>
        <span className="terminal__footer-tag">AI · SaaS · Cloud</span>
      </div>
    </div>
  );
}
