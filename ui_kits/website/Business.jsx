/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const WHY_ITEMS = [
  "Люди покупают квартиры",
  "Инвесторы приобретают объекты",
  "Компании открывают офисы",
  "Семьи строят дома",
  "Собственники делают ремонты",
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
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px",
              borderTop: "1px solid var(--sand-300)" }}>
              {WHY_ITEMS.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 14,
                  padding: "11px 0", borderBottom: "1px solid var(--sand-300)",
                  fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5,
                  color: "var(--ink-800)" }}>
                  <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>

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
