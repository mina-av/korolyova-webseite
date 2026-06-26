/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const LIST_ITEMS = [
  "необходимо оценить качество выполненных работ",
  "проверить правильность технических решений",
  "разобраться в спорной ситуации с подрядчиками",
  "принять объект или отдельный этап работ",
  "выявить ошибки до того, как они приведут к дополнительным расходам",
  "получить второе профессиональное мнение перед принятием важного решения",
];

const STEPS = [
  ["01", "Заполните бриф", "Подробно опишите свой вопрос или ситуацию."],
  ["02", "Приложите материалы", "Проект, сметы, фотографии, видео, чертежи или другие документы."],
  ["03", "Я изучу информацию", "При необходимости запрошу дополнительные материалы."],
  ["04", "Консультация", "По результатам анализа предлагаю решения и рекомендации по дальнейшим действиям."],
  ["05", "Вы получите результат", "Письменные рекомендации и дальнейший план действий."],
];

function ConsultationContent({ onNav }) {
  return (
    <React.Fragment>
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,96px)", alignItems: "start" }}
            className="kit-consult-grid">

            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
                color: "var(--ink-800)", margin: "0 0 20px" }}>
                Если в процессе строительства, ремонта или комплектации объекта у вас появились вопросы, сомнения или спорные ситуации, вы можете получить профессиональную консультацию и независимый экспертный взгляд на вашу ситуацию.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
                color: "var(--ink-800)", margin: "0 0 36px" }}>
                Я помогу разобраться в действиях подрядчиков, качестве выполненных работ, инженерных решениях, сметах, этапах и других вопросах, которые требуют опыта и профессиональной оценки для принятия правильного решения.
              </p>

              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--stone-500)", margin: "0 0 16px" }}>
                Консультация особенно полезна, если:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0,
                borderTop: "1px solid var(--sand-300)" }}>
                {LIST_ITEMS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 16,
                    padding: "13px 0", borderBottom: "1px solid var(--sand-300)",
                    fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5,
                    color: "var(--ink-800)" }}>
                    <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ position: "sticky", top: 100 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
                color: "var(--ink-800)", margin: "0 0 20px" }}>
                Для получения максимально точного ответа заполните бриф, подробно опишите ситуацию и приложите имеющуюся документацию, чертежи, фотографии, видео или другие материалы.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
                color: "var(--ink-800)", margin: "0 0 20px" }}>
                После анализа вы получите профессиональное заключение, ответы на поставленные вопросы, выявленные риски и рекомендации по дальнейшим действиям.
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400,
                fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)", lineHeight: 1.3,
                color: "var(--ink-900)", margin: "0 0 36px", maxWidth: "34ch" }}>
                Консультация возможна как на этапе планирования, так и в процессе строительства или ремонта.
              </p>

              <div style={{ borderTop: "1px solid var(--sand-300)", paddingTop: 28,
                display: "flex", flexDirection: "column", gap: 20 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 500,
                  fontSize: "clamp(2rem,3vw,2.8rem)", color: "var(--ink-900)", lineHeight: 1 }}>
                  от 97 $
                </span>
                <div>
                  <Button variant="accent" size="lg" onClick={() => onNav("contact")}>
                    Заполнить бриф и записаться на консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)", lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "var(--ink-900)", margin: "0 0 48px", maxWidth: "24ch" }}>
            Как это работает
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0,
            borderTop: "1px solid var(--sand-300)" }}
            className="kit-consult-steps">
            {STEPS.map(([n, title, desc], i) => (
              <div key={n} style={{ padding: "28px 24px 28px 0",
                borderRight: i < 4 ? "1px solid var(--sand-300)" : "none",
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
        </div>
      </section>
    </React.Fragment>
  );
}

window.ConsultationContent = ConsultationContent;
})();
