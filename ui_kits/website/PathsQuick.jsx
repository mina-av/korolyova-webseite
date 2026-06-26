/* global React */
(function () {
const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

const ITEMS = [
  { label: "Для собственников",    title: "Вы — собственник недвижимости",   href: "sobstvennikam.html" },
  { label: "Для предпринимателей", title: "Вы создаёте строительный бизнес", href: "biznes.html" },
  { label: "Партнёрство",          title: "Закрытая партнёрская сеть",        href: "set.html" },
];

function PathsQuick() {
  return (
    <div style={{ background: "var(--paper)", borderBottom: "1px solid var(--sand-300)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
        className="kit-pq-grid">
        {ITEMS.map((item, i) => <PathItem key={item.href} item={item} first={i === 0} />)}
      </div>
    </div>
  );
}

function PathItem({ item, first }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={item.href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ display: "flex", flexDirection: "column", gap: 14,
        padding: "clamp(28px,4vh,44px) clamp(24px,4vw,48px)",
        borderLeft: first ? "none" : "1px solid var(--sand-300)",
        textDecoration: "none",
        background: h ? "var(--cream-50)" : "var(--paper)",
        transition: "background var(--dur-fast) var(--ease-out)" }}>
      <Eyebrow>{item.label}</Eyebrow>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500,
        fontSize: "clamp(1.25rem, 1.8vw, 1.65rem)", lineHeight: 1.12,
        letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0 }}>
        {item.title}
      </h3>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8,
        fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
        color: h ? "var(--brass-600)" : "var(--ink-700)",
        transition: "color var(--dur-fast) var(--ease-out)", marginTop: 4 }}>
        Перейти
        <span aria-hidden="true"
          style={{ transform: h ? "translateX(4px)" : "none",
            transition: "transform var(--dur-fast) var(--ease-out)" }}>→</span>
      </span>
    </a>
  );
}

window.PathsQuick = PathsQuick;
})();
