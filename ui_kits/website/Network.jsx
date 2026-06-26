/* global React */
(function () {
const { Button, Eyebrow, Divider } = window.KorolyovaDesignSystem_d31d2b;
const { KFNumberTag } = window;

const STEPS = [
  ["01", "Заполните анкету"],
  ["02", "Ознакомительная встреча"],
  ["03", "Анализ возможностей"],
  ["04", "Подключение"],
];

function Network({ onNav, n = "04" }) {
  return (
    <section id="network" style={{ background: "var(--ink-900)", color: "var(--cream-50)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <KFNumberTag n={n} onDark />
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 80, alignItems: "start" }} className="kit-network-grid">
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)",
              lineHeight: 1.06, letterSpacing: "-0.01em", color: "var(--cream-50)", margin: 0, maxWidth: "16ch" }}>
              Закрытая партнёрская сеть
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.65, color: "rgba(247,242,233,0.8)", margin: "28px 0 0", maxWidth: "52ch" }}>
              Более 20 лет профессиональных отношений с поставщиками, подрядчиками, застройщиками и
              специалистами рынка. Доступ к этой сети — для тех, кому важны надёжные решения, а не случайные контакты.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65, color: "rgba(247,242,233,0.66)", margin: "20px 0 0", maxWidth: "52ch" }}>
              Через сеть можно закрыть: поиск подрядчиков и специалистов · поставщики материалов ·
              производители мебели на заказ · дизайнеры · подбор объектов и участков · специальные условия сотрудничества.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 40, flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 40, color: "var(--brass-400)" }}>690 $</span>
              <Button variant="accent" size="lg" onClick={() => onNav("contact")}>Подать заявку</Button>
            </div>
          </div>

          <div style={{ border: "1px solid var(--border-on-ink)", padding: "38px 34px" }}>
            <Eyebrow onDark>Как происходит подключение</Eyebrow>
            <div style={{ marginTop: 22 }}>
              {STEPS.map(([n, t], i) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 22, padding: "18px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--border-on-ink)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--brass-400)", width: 32, flex: "none" }}>{n}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 17, color: "var(--cream-50)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Network = Network;
})();
