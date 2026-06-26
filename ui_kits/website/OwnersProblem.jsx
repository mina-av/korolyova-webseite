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
    <section style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.4fr 0.6fr", gap: 64, alignItems: "start" }}
          className="kit-problem-grid">

          <div style={{ position: "sticky", top: 120 }}>
            <Eyebrow>С чего всё начинается</Eyebrow>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(1.25rem, 1.8vw, 1.65rem)", lineHeight: 1.22,
              letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "0 0 8px" }}>
              Вы не обязаны знать всё о строительстве и ремонте.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(1.25rem, 1.8vw, 1.65rem)", lineHeight: 1.22,
              letterSpacing: "-0.01em", color: "var(--stone-500)", margin: "0 0 24px" }}>
              Это нормально.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65,
              color: "var(--ink-800)", margin: "0 0 32px" }}>
              Но, когда речь идёт о вашем объекте, все ошибки, их исправление и дополнительные расходы оплачиваете именно вы.
            </p>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65,
              color: "var(--ink-800)", margin: "0 0 20px" }}>
              Большинство собственников сталкиваются с одинаковыми вопросами:
            </p>
            <ol style={{ listStyle: "none", counterReset: "q", padding: 0, margin: "0 0 40px" }}>
              {QUESTIONS.map((q, i) => (
                <li key={i} style={{ display: "flex", gap: 20, padding: "18px 0",
                  borderTop: "1px solid var(--sand-300)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 18,
                    color: "var(--brass-600)", lineHeight: 1.4, flex: "none", width: 28 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 17,
                    lineHeight: 1.5, color: "var(--ink-800)" }}>{q}</span>
                </li>
              ))}
            </ol>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65,
              color: "var(--ink-800)", margin: "0 0 8px" }}>
              И здесь часто происходит подмена понятий — что собственник становится заложником мастеров и обязан всё терпеть и оплачивать.
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(1.2rem, 1.6vw, 1.5rem)", lineHeight: 1.3,
              color: "var(--ink-900)", margin: "0 0 32px" }}>
              Но это не так. И вот с этим предлагаю разобраться.
            </p>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--stone-500)", margin: "0 0 16px" }}>Чтобы:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0,
              display: "flex", flexDirection: "column", gap: 10 }}>
              {GOALS.map((g) => (
                <li key={g} style={{ display: "flex", alignItems: "baseline", gap: 12,
                  fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.5, color: "var(--ink-900)" }}>
                  <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>—</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

window.OwnersProblem = OwnersProblem;
})();
