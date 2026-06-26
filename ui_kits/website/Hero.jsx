/* global React */
(function () {
const { Eyebrow, Button } = window.KorolyovaDesignSystem_d31d2b;

const HERO_IMG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

const LIST_ITEMS = [
  "при покупке недвижимости",
  "при строительстве",
  "при ремонте",
  "при подборе подрядчиков",
  "при выборе материалов",
  "при управлении бюджетом",
];

function Hero({ onNav }) {
  const [open, setOpen] = React.useState(false);
  return (
    <section>
      <div style={{ position: "relative", overflow: "hidden", minHeight: "82vh" }}>
        <img src={HERO_IMG} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", filter: "saturate(0.82) brightness(0.70)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(112deg, rgba(22,19,15,0.82) 0%, rgba(22,19,15,0.42) 48%, rgba(22,19,15,0.08) 100%)" }} />

        <div style={{ position: "relative", height: "100%", boxSizing: "border-box",
          padding: "clamp(48px,7vh,90px) clamp(24px,5vw,64px)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <Eyebrow onDark>Консультации по недвижимости и строительству</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.4rem, 4.6vw, 5rem)", lineHeight: 1.02,
            letterSpacing: "-0.015em", color: "var(--cream-50)",
            margin: "22px 0 28px", maxWidth: "22ch" }}>
            Недвижимость способна как увеличивать капитал, так и{" "}
            <span style={{ fontStyle: "italic" }}>уничтожать</span> его
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            lineHeight: 1.65, color: "rgba(247,242,233,0.78)", maxWidth: "52ch", margin: "0 0 12px" }}>
            Разница редко заключается в размере бюджета. Чаще всего она заключается в качестве решений, которые принимаются на каждом этапе проекта:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 4px",
            display: "flex", flexDirection: "column", gap: 4 }}>
            {LIST_ITEMS.slice(0, 3).map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.5,
                color: "rgba(247,242,233,0.78)" }}>
                — {item}
              </li>
            ))}
            {open && LIST_ITEMS.slice(3).map((item) => (
              <li key={item} style={{ fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)", lineHeight: 1.5,
                color: "rgba(247,242,233,0.78)" }}>
                — {item}
              </li>
            ))}
          </ul>
          <button onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", padding: "6px 0 14px",
              cursor: "pointer", fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.8rem, 1vw, 0.9rem)", fontWeight: 500,
              color: "rgba(247,242,233,0.5)", display: "inline-flex",
              alignItems: "center", gap: 5, transition: "color var(--dur-fast) var(--ease-out)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(247,242,233,0.85)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,233,0.5)")}>
            {open ? "Скрыть ↑" : "Показать ещё ↓"}
          </button>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            lineHeight: 1.65, color: "rgba(247,242,233,0.78)", maxWidth: "52ch", margin: "0 0 32px" }}>
            Именно решения определяют, получите вы ожидаемый результат или столкнётесь с лишними расходами, потерей времени и разочарованием.
          </p>
          <div>
            <Button variant="accent" size="lg" onClick={() => onNav("puti")}>
              Выбрать свой путь
            </Button>
          </div>
        </div>
      </div>

      {/* Kennzahlen-Streifen */}
      <div style={{ background: "var(--paper)", borderBottom: "1px solid var(--sand-300)",
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        className="kit-stats-grid">
        {[
          { value: "20+", label: "лет практики", placeholder: false },
          { value: "—",   label: "[Показатель]", placeholder: true },
          { value: "—",   label: "[Показатель]", placeholder: true },
        ].map((s, i) => (
          <div key={i} style={{ padding: "clamp(28px,4vh,44px) clamp(24px,4vw,56px)",
            borderLeft: i > 0 ? "1px solid var(--sand-300)" : "none" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 400,
              fontSize: "clamp(2.4rem, 3.8vw, 3.6rem)", lineHeight: 1,
              color: s.placeholder ? "var(--sand-300)" : "var(--brass-600)" }}>
              {s.value}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 10,
              color: s.placeholder ? "var(--sand-300)" : "var(--stone-500)" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

window.Hero = Hero;
})();
