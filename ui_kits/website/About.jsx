/* global React */
(function () {
const { KFNumberTag } = window;

const ABOUT_IMG = "../../tamila_korolyova.png";

function About({ n = "05" }) {
  return (
    <section id="about" style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <KFNumberTag n={n} />
        <div style={{ display: "grid", gridTemplateColumns: "0.62fr 0.38fr", gap: 72, alignItems: "center" }} className="kit-about-grid">
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(2.4rem, 4.4vw, 4rem)",
              lineHeight: 1.02, letterSpacing: "-0.01em", color: "var(--ink-900)", margin: 0 }}>
              Тамила Королёва
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.7, color: "var(--stone-500)", margin: "30px 0 0", maxWidth: "54ch" }}>
              За более чем 20 лет практической работы я убедилась в одной простой вещи: для того чтобы успешно
              управлять недвижимостью, строительством или ремонтом, не обязательно становиться строителем. Но важно
              понимать, что происходит внутри процесса и за что именно вы платите свои деньги или деньги своих
              клиентов. Именно этому посвящены все направления моей работы.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <img src={ABOUT_IMG} alt="Тамила Королёва" style={{ width: "100%", aspectRatio: "4 / 5",
              objectFit: "cover", filter: "saturate(0.92)", display: "block" }} />
            <div style={{ position: "absolute", left: -24, bottom: -24, background: "var(--ink-900)",
              color: "var(--cream-50)", padding: "20px 24px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 34, lineHeight: 1, color: "var(--brass-400)" }}>20+</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 6 }}>лет практики</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
})();
