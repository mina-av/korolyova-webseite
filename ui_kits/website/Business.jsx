/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const WHY_ITEMS = [
  { text: "Люди покупают квартиры",       img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" },
  { text: "Инвесторы приобретают объекты", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
  { text: "Компании открывают офисы",      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { text: "Семьи строят дома",             img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
  { text: "Собственники делают ремонты",   img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
];

const OFFER_ITEMS = [
  "помочь вам пройти этот путь на практике",
  "получить опыт, который обычно приобретается годами",
  "научить принимать грамотные решения",
  "создать прочную основу для собственного бизнеса",
];

const PROGRAM_ITEMS = [
  "поиск и привлечение клиентов",
  "формирование коммерческих предложений",
  "работа с бюджетами и финансовой моделью проекта",
  "подбор подрядчиков и поставщиков",
  "организация строительных процессов",
  "управление качеством работ",
  "работа с командой",
  "кризис-менеджмент",
  "развитие профессиональной сети контактов",
];

function Business({ n = "01" }) {
  return (
    <React.Fragment>
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 20px" }}>
              Строительство остаётся одной из самых востребованных и устойчивых сфер бизнеса. Именно поэтому грамотный строительный бизнес остаётся востребованным независимо от изменений рынка:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
              gap: 6, margin: "0 0 28px" }} className="kit-why-grid">
              {WHY_ITEMS.map(({ text, img }) => (
                <div key={text} style={{ position: "relative", overflow: "hidden",
                  aspectRatio: "3/4", minHeight: 160 }}>
                  <img src={img} alt="" loading="lazy"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", filter: "saturate(0.7) brightness(0.55)",
                      transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                  <div style={{ position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(22,19,15,0.72) 0%, rgba(22,19,15,0.1) 55%)" }} />
                  <p style={{ position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "16px 14px", margin: 0,
                    fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
                    lineHeight: 1.35, color: "var(--cream-50)" }}>{text}</p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 20px" }}>
              Если вы умеете организовывать процессы, принимать решения и создавать результат, эта сфера способна открыть для вас большие возможности роста и дохода.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 28px" }}>
              Но опыт не появляется после просмотра уроков и прочтения книг. Он появляется тогда, когда вы начинаете работать с клиентами, подрядчиками, бюджетами, сроками и реальными объектами.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65,
              color: "var(--stone-500)", margin: "0 0 20px" }}>
              Поэтому моё предложение заключается в том, чтобы:
            </p>
            <div style={{ margin: "0 0 48px", borderTop: "1px solid var(--sand-300)" }}>
              {OFFER_ITEMS.map((item, i) => (
                <div key={item} style={{ display: "grid", gridTemplateColumns: "52px 1fr",
                  gap: "0 24px", padding: "20px 0", borderBottom: "1px solid var(--sand-300)",
                  alignItems: "start" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700,
                    fontSize: 26, color: "var(--brass-600)", lineHeight: 1.1 }}>
                    0{i + 1}
                  </span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 500,
                    lineHeight: 1.4, color: "var(--ink-900)", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 12px" }}>
              Я создала программу по созданию и развитию строительного бизнеса. Это не набор теоретических уроков и не очередной курс о том, как быстро заработать в строительстве. Это практическая система, основанная на реальном опыте работы в сфере недвижимости, строительства и управления проектами.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--stone-500)", margin: "20px 0 14px" }}>
              Внутри программы мы разбираем:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 56px",
              borderTop: "1px solid var(--sand-300)" }}>
              {PROGRAM_ITEMS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 14,
                  padding: "11px 0", borderBottom: "1px solid var(--sand-300)",
                  fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5,
                  color: "var(--ink-800)" }}>
                  <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 17,
              lineHeight: 1.6, color: "var(--ink-700)", margin: "0 0 16px" }}>
              Успешный строительный бизнес строится не только на знании технологий и процессов. Он строится на ответственности.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65,
              color: "var(--stone-500)", margin: "0 0 8px" }}>
              За каждым объектом стоят реальные люди: семьи, которые ждут переезда в свой дом; инвесторы, которые рассчитывают на результат; собственники, которые доверяют вам свой бюджет, время и ожидания. И каждое принятое решение влияет на их деньги, сроки и ожидания.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65,
              color: "var(--stone-500)", margin: "0 0 40px" }}>
              Здесь ответственность берётся не только за результат, но и за будущее людей, которые доверяют вам свой проект.
            </p>

            <a href="tarify.html">
              <Button variant="accent" size="lg">Посмотреть программу</Button>
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.Business = Business;
})();
