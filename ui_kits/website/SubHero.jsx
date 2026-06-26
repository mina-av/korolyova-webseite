/* global React */
(function () {
const { Eyebrow } = window.KorolyovaDesignSystem_d31d2b;

const CONTENT = {
  owners: {
    label: "Для собственников недвижимости",
    heading: "Вы — собственник недвижимости",
    sub: "Вы не обязаны знать всё о строительстве и ремонте. Это нормально. Но, когда речь идёт о вашем объекте, все ошибки, их исправление и дополнительные расходы оплачиваете именно вы.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  },
  business: {
    label: "Строительный бизнес",
    heading: "Вы создаёте строительный бизнес",
    sub: "Хотите создать устойчивую систему, способную приносить прибыль и развиваться долгие годы. Понимать процессы изнутри. Грамотно работать с клиентами, подрядчиками и поставщиками. Принимать решения, которые помогают бизнесу расти, а не создают новые проблемы.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
  },
  network: {
    label: "Закрытая партнёрская сеть",
    heading: "Закрытая партнёрская сеть",
    sub: "Более 20 лет я выстраиваю профессиональные отношения с поставщиками, производителями, подрядчиками и участниками рынка недвижимости. За это время вокруг меня сформировалась сеть проверенных специалистов, компаний, застройщиков и экспертов, с которыми меня связывают реализованные проекты и взаимное доверие.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
  },
};

function SubHero({ page }) {
  const c = CONTENT[page];
  return (
    <section style={{ position: "relative", overflow: "hidden", paddingTop: 100, paddingBottom: 80 }}>
      {c.img && (
        <img src={c.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "saturate(0.8) brightness(0.6)" }} />
      )}
      <div style={{ position: "absolute", inset: 0,
        background: "linear-gradient(112deg, rgba(22,19,15,0.88) 0%, rgba(22,19,15,0.55) 60%, rgba(22,19,15,0.3) 100%)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <a href="index.html"
          style={{ display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
            color: "rgba(247,242,233,0.55)", textDecoration: "none", marginBottom: 40,
            transition: "color var(--dur-fast) var(--ease-out)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream-50)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247,242,233,0.55)")}>
          ← На главную
        </a>
        <div>
          <Eyebrow onDark>{c.label}</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(2.2rem, 4.5vw, 4.2rem)", lineHeight: 1.04, letterSpacing: "-0.015em",
            color: "var(--cream-50)", margin: "24px 0 0", maxWidth: "22ch" }}>
            {c.heading}
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
            lineHeight: 1.65, color: "rgba(247,242,233,0.78)", maxWidth: "60ch", margin: "28px 0 0" }}>
            {c.sub}
          </p>
        </div>
      </div>
    </section>
  );
}

window.SubHero = SubHero;
})();
