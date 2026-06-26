/* global React */
(function () {
const { KFSectionHead } = window;

const PATHS = [
  { label: "Для собственников", title: "Вы — собственник недвижимости", href: "sobstvennikam.html",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" },
  { label: "Для предпринимателей", title: "Вы создаёте строительный бизнес", href: "biznes.html",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80" },
  { label: "Партнёрство", title: "Закрытая партнёрская сеть", href: "set.html",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" },
];

function PathCard({ p }) {
  const [h, setH] = React.useState(false);
  return (
    <article onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <a href={p.href} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
        <div style={{ overflow: "hidden", aspectRatio: "4 / 3", background: "var(--sand-200)" }}>
          <img src={p.img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover",
            filter: "saturate(0.9)", transform: h ? "scale(1.04)" : "scale(1)",
            transition: "transform var(--dur-slow) var(--ease-out)" }} />
        </div>
        <div style={{ paddingTop: 22 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--brass-600)", margin: 0 }}>{p.label}</p>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 27, lineHeight: 1.12,
            letterSpacing: "-0.01em", color: "var(--ink-900)", margin: "12px 0 18px", maxWidth: "16ch" }}>{p.title}</h3>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-sans)",
            fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
            color: h ? "var(--brass-600)" : "var(--ink-900)",
            transition: "color var(--dur-fast) var(--ease-out)" }}>
            Перейти
            <span aria-hidden="true" style={{ transform: h ? "translateX(4px)" : "none",
              transition: "transform var(--dur-fast) var(--ease-out)" }}>→</span>
          </span>
        </div>
      </a>
    </article>
  );
}

function Paths() {
  return (
    <section id="puti" style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ marginBottom: 60 }}>
          <KFSectionHead n="01" heading="Выберите путь, который актуален для вас сегодня" max="20ch" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} className="kit-paths-grid">
          {PATHS.map((p) => <PathCard key={p.href} p={p} />)}
        </div>
      </div>
    </section>
  );
}

window.Paths = Paths;
})();
