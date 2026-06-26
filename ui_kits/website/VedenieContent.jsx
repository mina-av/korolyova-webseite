/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const SERVICES = [
  "контроль соответствия выполняемых работ проектной документации",
  "проверка смет и объёмов работ",
  "координация подрядчиков и профильных специалистов",
  "контроль сроков реализации",
  "контроль качества выполнения работ",
  "предотвращение необоснованных расходов",
  "прозрачность всех процессов на объекте",
];

const RESULTS = [
  "Вы сохраняете контроль над объектом, бюджетом и сроками реализации",
  "Понимаете, что происходит на каждом этапе проекта",
  "Принимаете решения спокойно и осознанно",
  "Получаете результат, который соответствует вашим ожиданиям",
];

const STEPS = [
  ["01", "Вы заполняете бриф", "Предоставляете информацию по объекту и текущей ситуации."],
  ["02", "Анализ проекта", "Я изучаю проект и при необходимости подключаю профильных специалистов для дополнительной оценки."],
  ["03", "Предложение формата", "По результатам анализа предлагаю оптимальный формат дальнейшего взаимодействия."],
  ["04", "Начало сопровождения", "Объём участия и стоимость определяются индивидуально после знакомства с проектом."],
];

function VedenieContent({ onNav }) {
  return (
    <React.Fragment>
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 20px" }}>
              Строительство или ремонт могут занимать месяцы, а иногда и годы. В проекте участвуют подрядчики, поставщики, проектировщики, инженеры и десятки специалистов. У каждого из них есть свои задачи, своя ответственность и свои интересы.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 20px" }}>
              Интересы собственника при этом часто остаются без профессиональной защиты. Именно для этого существует данная услуга.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 40px" }}>
              Я представляю интересы собственника на всех этапах реализации проекта и помогаю принимать решения, которые соответствуют целям, бюджету и ожиданиям от результата. Моя задача — видеть проект целиком, своевременно выявлять риски, координировать процессы и помогать сохранять контроль над ситуацией.
            </p>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--stone-500)", margin: "0 0 16px" }}>
              В рамках сопровождения я обеспечиваю:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 48px",
              borderTop: "1px solid var(--sand-300)" }}>
              {SERVICES.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 16,
                  padding: "13px 0", borderBottom: "1px solid var(--sand-300)",
                  fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5,
                  color: "var(--ink-800)" }}>
                  <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
              fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)", lineHeight: 1.3,
              color: "var(--ink-900)", margin: "0 0 12px" }}>
              Вы не остаётесь один на один со стройкой.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 48px" }}>
              Вам не нужно разбираться в десятках противоречивых мнений и принимать важные решения вслепую. Каждое решение рассматривается с позиции ваших интересов и конечного результата проекта.
            </p>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--stone-500)", margin: "0 0 16px" }}>
              Результат
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 48px",
              borderTop: "1px solid var(--sand-300)" }}>
              {RESULTS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 16,
                  padding: "13px 0", borderBottom: "1px solid var(--sand-300)",
                  fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5,
                  color: "var(--ink-800)" }}>
                  <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)", lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "var(--ink-900)", margin: "0 0 48px", maxWidth: "24ch" }}>
            Как начать сотрудничество
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
            borderTop: "1px solid var(--sand-300)" }} className="kit-vedenie-steps">
            {STEPS.map(([n, title, desc], i) => (
              <div key={n} style={{ padding: "28px 24px 28px 0",
                borderRight: i < 3 ? "1px solid var(--sand-300)" : "none",
                paddingLeft: i === 0 ? 0 : 24 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 36,
                  color: "var(--brass-600)", lineHeight: 1, marginBottom: 16 }}>{n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 18,
                  lineHeight: 1.15, color: "var(--ink-900)", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.55,
                  color: "var(--stone-500)", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, borderTop: "1px solid var(--sand-300)", paddingTop: 32,
            display: "flex", flexDirection: "column", gap: 16, maxWidth: "40ch" }}>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic",
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.35,
              color: "var(--ink-700)", margin: 0 }}>
              Каждый объект индивидуален. Стоимость определяется после предварительного знакомства с проектом.
            </p>
            <div>
              <Button variant="accent" size="lg" onClick={() => onNav("contact")}>
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.VedenieContent = VedenieContent;
})();
