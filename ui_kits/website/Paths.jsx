/* global React */
(function () {
const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

const PATHS = [
  {
    label: "Для собственников",
    title: "Вы — собственник недвижимости",
    text: "Планируете строительство, ремонт или реконструкцию. Хотите понимать, что происходит на объекте. Контролировать бюджет, сроки и качество работ. Принимать решения уверенно и получать результат, который соответствует вашим ожиданиям.",
    cta: "Перейти",
    href: "sobstvennikam.html",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageLeft: true,
  },
  {
    label: "Строительный бизнес",
    title: "Вы создаёте строительный бизнес",
    text: "Хотите создать устойчивую систему, способную приносить прибыль и развиваться долгие годы. Понимать процессы изнутри. Грамотно работать с клиентами, подрядчиками и поставщиками. Принимать решения, которые помогают бизнесу расти, а не создают новые проблемы.",
    cta: "Перейти",
    href: "biznes.html",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageLeft: false,
  },
  {
    label: "Партнёрская сеть",
    title: "Закрытая партнёрская сеть",
    text: "Для тех, кто ценит надёжные деловые связи, профессиональное окружение и проверенные решения. Доступ к поставщикам, подрядчикам, профильным специалистам и специальным условиям сотрудничества.",

    cta: "Подать заявку",
    href: "set.html",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    imageLeft: true,
  },
];

function PathRow({ p }) {
  const [rowH, setRowH] = React.useState(false);
  const [linkH, setLinkH] = React.useState(false);

  const imgPanel = (
    <div style={{ overflow: "hidden", minHeight: 460 }}>
      <img src={p.img} alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover",
          filter: "saturate(0.88) brightness(0.92)",
          transform: rowH ? "scale(1.04)" : "scale(1)",
          transition: "transform 600ms var(--ease-out)",
          display: "block" }} />
    </div>
  );

  const textPanel = (
    <div style={{ background: "var(--paper)",
      padding: "clamp(48px,8vh,96px) clamp(36px,6vw,80px)",
      display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Eyebrow>{p.label}</Eyebrow>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400,
        fontSize: "clamp(1.9rem, 3vw, 2.9rem)", lineHeight: 1.08,
        letterSpacing: "-0.01em", color: "var(--ink-900)",
        margin: "20px 0 0", maxWidth: "20ch" }}>
        {p.title}
      </h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.7,
        color: "var(--stone-500)", margin: "24px 0 36px", maxWidth: "42ch" }}>
        {p.text}
      </p>
      <a href={p.href}
        onMouseEnter={() => setLinkH(true)}
        onMouseLeave={() => setLinkH(false)}
        style={{ display: "inline-flex", alignItems: "center", gap: 10,
          fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
          letterSpacing: "0.04em", textDecoration: "none",
          color: linkH ? "var(--brass-600)" : "var(--ink-900)",
          transition: "color var(--dur-fast) var(--ease-out)",
          alignSelf: "flex-start" }}>
        {p.cta}
        <span aria-hidden="true"
          style={{ transform: linkH ? "translateX(4px)" : "none",
            transition: "transform var(--dur-fast) var(--ease-out)" }}>→</span>
      </a>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setRowH(true)}
      onMouseLeave={() => setRowH(false)}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr",
        borderTop: "1px solid var(--sand-300)" }}
      className="kit-path-row">
      {p.imageLeft ? imgPanel : textPanel}
      {p.imageLeft ? textPanel : imgPanel}
    </div>
  );
}

function Paths() {
  return (
    <section id="puti" style={{ background: "var(--paper)", padding: "0" }}>
      <div style={{ borderBottom: "1px solid var(--sand-300)" }}>
        {PATHS.map((p) => <PathRow key={p.href} p={p} />)}
      </div>
    </section>
  );
}

window.Paths = Paths;
})();
