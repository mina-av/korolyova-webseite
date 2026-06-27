/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const WHO_ITEMS = [
  "тем, кто хочет создать собственный строительный бизнес с нуля",
  "специалистам, которые хотят перейти от работы по найму к собственным проектам",
  "тем, кто уже работает в строительстве, но хочет систематизировать знания и выстроить устойчивую модель бизнеса",
  "тем, кто понимает потенциал строительного рынка и хочет развиваться в этой сфере профессионально",
  "тем, кто готов брать ответственность за результат и развивать собственное дело",
];

const MANAGE_ITEMS = [
  "как изучать рынок услуг и анализировать конкурентов",
  "как формировать востребованное коммерческое предложение",
  "как привлекать клиентов и выстраивать долгосрочные отношения",
  "как определять потребности заказчика и формировать команду под конкретный запрос",
  "как подбирать подрядчиков, поставщиков и профильных специалистов",
  "как выстраивать эффективное взаимодействие между всеми участниками проекта",
  "как организовывать строительные процессы на каждом этапе реализации объекта",
  "как формируется бюджет проекта и из чего состоит смета",
  "как проверять расчёты подрядчиков и контролировать расходы",
  "как выявлять финансовые риски и предотвращать их последствия",
  "как контролировать качество выполнения работ и соблюдение сроков",
  "как действовать в кризисных ситуациях и доводить объект до результата",
];

const NETWORK_ITEMS = [
  "находить поставщиков и отбирать подрядчиков",
  "проверять их квалификацию",
  "вести переговоры и получать выгодные условия сотрудничества",
  "формировать сильную базу партнёров для развития бизнеса",
];

const FINAL_RESULTS = [
  "знание полного цикла строительного бизнеса",
  "понимание работы с клиентами и подрядчиками",
  "навыки управления объектами и финансовой моделью проекта",
  "собственная профессиональная сеть контактов",
  "практический опыт, который можно сразу применять в работе",
];

function Block({ n, title, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "0 28px",
      paddingBottom: 48, marginBottom: 48, borderBottom: "1px solid var(--sand-300)" }}>
      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 28,
        color: "var(--brass-600)", lineHeight: 1, paddingTop: 3 }}>{n}</div>
      <div>
        <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20,
          color: "var(--ink-900)", margin: "0 0 18px", lineHeight: 1.2 }}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

function List({ items, arrow = "—" }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0,
      borderTop: "1px solid var(--sand-200)" }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 12,
          padding: "9px 0", borderBottom: "1px solid var(--sand-200)",
          fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55,
          color: "var(--ink-700)" }}>
          <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>{arrow}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProgrammaContent() {
  return (
    <React.Fragment>
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>

          <div style={{ maxWidth: "64ch", marginBottom: 56 }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 16px" }}>
              Можно ли за несколько месяцев получить опыт, на который у большинства предпринимателей уходят годы?
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontStyle: "italic", fontSize: 17,
              lineHeight: 1.7, color: "var(--ink-900)", margin: "0 0 16px" }}>
              Да — если не изучать строительство по книгам и видеоурокам, а делать реальные действия на реальных проектах.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--stone-500)", margin: "32px 0 14px" }}>
              Кому подходит эта программа:
            </p>
            <List items={WHO_ITEMS} />
          </div>

          <div style={{ maxWidth: "72ch" }}>

            <Block n="01" title="Вы получите новый практический опыт">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: "0 0 16px" }}>
                По мере изучения программы и работы с реальными задачами приходит не только понимание процессов. Постепенно меняется и взгляд на сам бизнес. Вы начинаете лучше понимать взаимосвязь между людьми, сроками, бюджетом, качеством работ и конечным результатом — замечать риски раньше, видеть больше возможностей и принимать решения с пониманием их последствий.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: 0 }}>
                Именно такой опыт формирует уверенность, на которую можно опираться в работе и развитии бизнеса.
              </p>
            </Block>

            <Block n="02" title="Вы научитесь управлять процессами, командами, бюджетами">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: "0 0 16px" }}>
                Вы будете понимать:
              </p>
              <List items={MANAGE_ITEMS} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: "16px 0 0" }}>
                Именно это позволяет принимать решения на основе цифр, а не эмоций.
              </p>
            </Block>

            <Block n="03" title="Вы создадите собственную профессиональную сеть">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: "0 0 16px" }}>
                Вы научитесь:
              </p>
              <List items={NETWORK_ITEMS} />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: "16px 0 0" }}>
                В результате вы перестанете зависеть от отдельных исполнителей и создадите надёжную систему для развития своего бизнеса. Для участников из Украины дополнительно открывается доступ к профессиональной сети, сформированной более чем за 20 лет работы на рынке.
              </p>
            </Block>

            <Block n="04" title="Вы создадите сильную клиентскую базу">
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: 0 }}>
                Вы поймёте, где искать клиентов, как проводить переговоры, выявлять потребности заказчика, заинтересовывать своё окружение в ваших услугах, выстраивать доверие и создавать долгосрочные отношения, которые приносят рекомендации.
              </p>
            </Block>

            <div style={{ marginBottom: 48 }}>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 28,
                color: "var(--brass-600)", marginBottom: 16 }}>05</div>
              <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20,
                color: "var(--ink-900)", margin: "0 0 18px" }}>Каким будет ваш результат</h2>
              <List items={FINAL_RESULTS} arrow="→" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                color: "var(--stone-500)", margin: "20px 0 0" }}>
                Это практичная основа для создания и развития собственного строительного бизнеса. И самое главное — уверенность, которая появляется только тогда, когда знания подтверждены практикой.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ maxWidth: "56ch", borderLeft: "3px solid var(--brass-500)",
            paddingLeft: 28, marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16,
              color: "var(--ink-900)", margin: "0 0 10px" }}>Самое важное</p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.65,
              color: "var(--ink-700)", margin: 0 }}>
              Я не обещаю лёгких денег и быстрых результатов. Но я могу помочь вам пройти этот путь значительно быстрее и избежать ошибок, которые ежегодно стоят предпринимателям огромных денег, времени и репутации. Потому что сильный строительный бизнес создаётся на опыте, системном подходе и способности доводить проекты до результата.
            </p>
          </div>
          <a href="tarify.html">
            <Button variant="accent" size="lg">Выбрать формат участия</Button>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

window.ProgrammaContent = ProgrammaContent;
})();
