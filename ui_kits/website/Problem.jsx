/* global React */
(function () {
const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

const QUESTIONS = [
  "Хватит ли денег завершить проект так, как задумали?",
  "Как выбрать подрядчиков, которым можно доверять?",
  "Как контролировать качество и избежать лишних расходов?",
  "Как получить именно тот результат, который представляли в начале?",
];

function Problem() {
  return (
    <section id="problem" style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.4fr 0.6fr", gap: 64, alignItems: "start" }} className="kit-problem-grid">
          <div style={{ position: "sticky", top: 120 }}>
            <Eyebrow>С чего всё начинается</Eyebrow>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.25rem, 1.8vw, 1.65rem)",
              lineHeight: 1.22, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0, maxWidth: "26ch" }}>
              Вы не обязаны знать всё о строительстве. Но, когда речь о вашем объекте, все ошибки и дополнительные расходы оплачиваете именно вы.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-800)", margin: "32px 0 0" }}>
              Большинство собственников сталкиваются с одинаковыми вопросами:
            </p>

            <ol style={{ listStyle: "none", counterReset: "q", padding: 0, margin: "28px 0 0" }}>
              {QUESTIONS.map((q, i) => (
                <li key={i} style={{ display: "flex", gap: 20, padding: "20px 0",
                  borderTop: "1px solid var(--sand-300)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--brass-600)", lineHeight: 1.4, flex: "none", width: 28 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.5, color: "var(--ink-800)" }}>{q}</span>
                </li>
              ))}
            </ol>

            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
              fontSize: 24, lineHeight: 1.35, color: "var(--ink-900)", margin: "40px 0 0", maxWidth: "30ch" }}>
              Собственник не обязан быть заложником мастеров. И вот с этим предлагаю разобраться.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Problem = Problem;
})();
