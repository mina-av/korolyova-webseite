/* global React */
(function () {
const { Eyebrow, Button } = window.KorolyovaDesignSystem_d31d2b;

const HERO_IMG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80";

const PATHS = [
  { label: "Собственникам", sub: "Строительство, ремонт, реконструкция", href: "sobstvennikam.html" },
  { label: "Строительный бизнес", sub: "Создание и развитие компании", href: "biznes.html" },
  { label: "Партнёрская сеть", sub: "Проверенные специалисты рынка", href: "set.html" },
];

function PathLink({ p, border }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={p.href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 0",
        borderTop: border ? "1px solid var(--border-on-ink)" : "none",
        textDecoration: "none" }}>
      <div>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, fontWeight: 500, margin: 0,
          color: h ? "var(--brass-300)" : "var(--cream-50)",
          transition: "color var(--dur-fast) var(--ease-out)" }}>{p.label}</p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 12,
          color: "rgba(247,242,233,0.48)", margin: "4px 0 0" }}>{p.sub}</p>
      </div>
      <span aria-hidden="true"
        style={{ color: h ? "var(--brass-400)" : "rgba(247,242,233,0.32)", fontSize: 18,
          transform: h ? "translateX(5px)" : "none",
          transition: "color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
          flexShrink: 0, marginLeft: 12 }}>→</span>
    </a>
  );
}

function Hero({ onNav }) {
  return (
    <section>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", minHeight: "82vh" }}
        className="kit-hero-grid">

        {/* Linkes Panel: Foto + Text */}
        <div style={{ position: "relative", overflow: "hidden" }}>
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
              margin: "22px 0 36px", maxWidth: "18ch" }}>
              Недвижимость способна увеличивать капитал или{" "}
              <span style={{ fontStyle: "italic" }}>уничтожать</span> его
            </h1>
            <div>
              <Button variant="accent" size="lg" onClick={() => onNav("puti")}>
                Выбрать свой путь
              </Button>
            </div>
          </div>
        </div>

        {/* Rechtes Panel: dunkle Schnellnavigation */}
        <div style={{ background: "var(--ink-900)",
          padding: "clamp(48px,7vh,90px) 36px",
          display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          <div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--brass-400)", margin: "0 0 4px" }}>
              Выберите свой путь
            </p>
            <div style={{ marginTop: 8 }}>
              {PATHS.map((p, i) => <PathLink key={p.href} p={p} border={i > 0} />)}
            </div>
          </div>

          <div style={{ paddingTop: 28, borderTop: "1px solid var(--border-on-ink)", marginTop: 32 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 48,
              color: "var(--brass-400)", lineHeight: 1 }}>20+</div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "rgba(247,242,233,0.48)", marginTop: 8 }}>
              лет практики
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

window.Hero = Hero;
})();
