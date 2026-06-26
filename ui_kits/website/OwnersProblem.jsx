/* global React */
(function () {
const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

const QUESTIONS = [
  "Хватит ли денег, чтобы закончить проект так, как задумали?",
  "Сколько времени на самом деле займёт реализация?",
  "Как выбрать подрядчиков, которым можно доверять?",
  "Как контролировать качество работ?",
  "Как избежать лишних расходов?",
  "Как получить результат, который представляли в начале проекта, а не тот, который может получиться в итоге?",
];

const GOALS = [
  "Получить систему контроля строительства и ремонта",
  "Понимать, что происходит на объекте",
  "Принимать решения уверенно",
  "Защитить свой бюджет",
];

function OwnersProblem() {
  return (
    <section style={{ background: "var(--paper)", padding: "clamp(48px,7vh,80px) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>

        <p style={{ fontFamily: "var(--font-display)", fontWeight: 400,
          fontSize: "clamp(1.5rem, 2.4vw, 2.2rem)", lineHeight: 1.18, letterSpacing: "-0.01em",
          color: "var(--ink-900)", margin: "0 0 36px", maxWidth: "36ch" }}>
          Большинство собственников сталкиваются с одинаковыми вопросами:
        </p>

        <ol style={{ listStyle: "none", padding: 0, margin: "0 0 40px",
          borderTop: "1px solid var(--sand-300)" }}>
          {QUESTIONS.map((q, i) => (
            <li key={i} style={{ display: "flex", gap: 20, padding: "14px 0",
              borderBottom: "1px solid var(--sand-300)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 16,
                color: "var(--brass-600)", lineHeight: 1.5, flex: "none", width: 28 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 16,
                lineHeight: 1.55, color: "var(--ink-800)" }}>{q}</span>
            </li>
          ))}
        </ol>

        <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
          fontSize: "clamp(1.2rem, 1.8vw, 1.65rem)", lineHeight: 1.25,
          color: "var(--ink-900)", margin: "0 0 28px", maxWidth: "36ch" }}>
          Но это не так. И вот с этим предлагаю разобраться.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0,
          display: "flex", flexWrap: "wrap", gap: 10 }}>
          {GOALS.map((g) => (
            <li key={g} style={{
              fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.4,
              color: "var(--ink-900)", background: "var(--cream-50)",
              border: "1px solid var(--sand-300)",
              padding: "12px 20px", borderRadius: 2 }}>
              {g}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

window.OwnersProblem = OwnersProblem;
})();
