/* global React */
(function () {
const { KFSectionHead } = window;

const STEPS = [
  ["01", "Заполните бриф", "Опишите ситуацию и приложите материалы."],
  ["02", "Я изучу информацию", "При необходимости запрошу дополнительные данные."],
  ["03", "Проведём встречу", "Разберём вашу ситуацию и определим формат работы."],
  ["04", "Вы получите результат", "Рекомендации, план действий или начало сопровождения."],
];

function Process({ n = "06" }) {
  return (
    <section id="process" style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ marginBottom: 56 }}>
          <KFSectionHead n={n} heading="Как начать работу" max="20ch" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          borderTop: "1px solid var(--sand-300)" }} className="kit-process-grid">
          {STEPS.map(([n, t, d], i) => (
            <div key={n} style={{ padding: "34px 28px 34px 0", borderRight: i < 3 ? "1px solid var(--sand-300)" : "none",
              paddingLeft: i === 0 ? 0 : 28 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 40, color: "var(--brass-600)", lineHeight: 1 }}>{n}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 23, lineHeight: 1.12,
                color: "var(--ink-900)", margin: "20px 0 10px" }}>{t}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55, color: "var(--stone-500)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
})();
