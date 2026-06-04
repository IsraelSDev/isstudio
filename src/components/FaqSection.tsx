import { faqItems } from "@/lib/seo";

export function FaqSection() {
  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-title">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="section-label">FAQ</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p className="section-desc">
            Respostas sobre software, IA e como a ISSTUDIO pode ajudar seu negócio.
          </p>
        </header>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item" data-reveal>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
