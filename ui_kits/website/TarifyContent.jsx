/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const TIER1_ITEMS = [
  "формирование мышления и навыков предпринимателя",
  "изучение рынка строительных услуг и товаров",
  "анализ конкурентов и построение собственной стратегии",
  "поиск и отбор поставщиков",
  "поиск, проверка и управление подрядчиками",
  "формирование собственной профессиональной сети контактов",
  "создание коммерческих предложений для партнёров и клиентов",
  "работа с заказчиками и долгосрочные отношения с клиентами",
  "создание и управление собственной командой",
  "кризис-менеджмент и управление рисками",
  "логистика, ответственность и организация строительных процессов",
  "управление финансами проекта, формирование смет и контроль бюджета",
  "последовательность реализации проекта от первого контакта до завершения объекта",
  "более 50 этапов строительных и отделочных работ с подробным разбором технологий",
  "личностный и профессиональный рост руководителя строительного бизнеса",
];

const TIER2_PATH = [
  "поиск и привлечение первого клиента",
  "определение стратегии реализации проекта",
  "формирование коммерческого предложения",
  "переговоры и заключение договора",
  "формирование бюджета проекта и подготовка сметной документации",
  "подбор подрядчиков, поставщиков и профильных специалистов",
  "выстраивание взаимодействия с клиентом и командой проекта",
  "организация строительного процесса",
  "контроль качества выполнения работ",
  "сопровождение проекта до запланированного результата",
  "анализ финансовых показателей и итогов проекта",
];

const TIER2_RESULTS = [
  "запуск собственного строительного бизнеса по понятной системе",
  "первый объект, реализованный с пониманием процессов и финансовой модели",
  "практический опыт взаимодействия с клиентами, подрядчиками и поставщиками",
  "собственный реализованный кейс для дальнейшего развития бизнеса",
  "доступ к профессиональной сети контактов и партнёров",
  "уверенность, основанная на практике, а не на теории",
];

const TIER3_DIRECTIONS = [
  "построение и совершенствование системы управления",
  "повышение рентабельности проектов",
  "формирование эффективной команды",
  "развитие клиентской базы",
  "выстраивание взаимодействия с подрядчиками и поставщиками",
  "масштабирование бизнеса",
  "снижение операционных и финансовых рисков",
  "качество управленческих решений",
];

const TIER3_RESULTS = [
  "стратегия развития бизнеса, адаптированная под ваши цели и возможности",
  "система управления, способная поддерживать рост компании",
  "снижение рисков и количества дорогостоящих ошибок",
  "доступ к профессиональной сети поставщиков, подрядчиков и специалистов",
  "ускорение развития бизнеса и уверенность в каждом следующем шаге",
];

function ItemList({ items, dark, arrow = "—" }) {
  const border = dark ? "1px solid rgba(247,242,233,0.12)" : "1px solid var(--sand-200)";
  const color  = dark ? "rgba(247,242,233,0.72)" : "var(--ink-700)";
  const marker = dark ? "var(--brass-400)" : "var(--brass-600)";
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: border }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 10,
          padding: "8px 0", borderBottom: border,
          fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5, color }}>
          <span style={{ color: marker, flexShrink: 0 }}>{arrow}</span>{item}
        </li>
      ))}
    </ul>
  );
}

function ToggleBtn({ open, setOpen, dark }) {
  const color = dark ? "rgba(247,242,233,0.4)" : "var(--stone-400)";
  const hover = dark ? "rgba(247,242,233,0.8)" : "var(--ink-900)";
  return (
    <button onClick={() => setOpen(!open)}
      style={{ background: "none", border: "none", padding: "10px 0 0", cursor: "pointer",
        fontFamily: "var(--font-sans)", fontSize: 12.5, fontWeight: 500,
        color, display: "inline-flex", alignItems: "center", gap: 5,
        transition: "color 0.15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hover)}
      onMouseLeave={(e) => (e.currentTarget.style.color = color)}>
      {open ? "Скрыть ↑" : "Подробнее ↓"}
    </button>
  );
}

function Label({ dark, children }) {
  return (
    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
      letterSpacing: "0.14em", textTransform: "uppercase",
      color: dark ? "rgba(247,242,233,0.35)" : "var(--stone-400)",
      margin: "16px 0 10px" }}>{children}</p>
  );
}

function TarifyContent() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  return (
    <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>

        <div style={{ maxWidth: "60ch", marginBottom: 52 }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
            color: "var(--ink-800)", margin: 0 }}>
            У всех разные цели, опыт и уровень подготовки. Кому-то достаточно получить систему и внедрять её самостоятельно. Кто-то хочет пройти первый объект под руководством эксперта. А кто-то ищет стратегического партнёра для создания или масштабирования бизнеса.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0, alignItems: "start" }} className="kit-tarify-grid">

          {/* Tier 1 */}
          <div style={{ background: "var(--paper)", border: "1px solid var(--sand-300)",
            padding: "36px 32px", display: "flex", flexDirection: "column" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--stone-400)", margin: "0 0 12px" }}>Формат 01</p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20,
              lineHeight: 1.2, color: "var(--ink-900)", margin: "0 0 16px" }}>
              Самостоятельное изучение
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.65,
              color: "var(--stone-500)", margin: 0 }}>
              Полная система создания и развития строительного бизнеса для тех, кто готов самостоятельно изучать материалы и внедрять их в работу.
            </p>
            {open1 && (
              <React.Fragment>
                <Label>В программе:</Label>
                <ItemList items={TIER1_ITEMS} />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5,
                  color: "var(--stone-400)", margin: "14px 0 0", lineHeight: 1.5 }}>
                  95 модулей · 297 уроков · более 1 000 страниц · регламенты · договоры · шаблоны · чек-листы
                </p>
              </React.Fragment>
            )}
            <ToggleBtn open={open1} setOpen={setOpen1} />
            <div style={{ borderTop: "1px solid var(--sand-300)", marginTop: "auto", paddingTop: 24, marginTop: 24 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 26,
                color: "var(--ink-900)", margin: "0 0 16px" }}>587 $</p>
              <a href="#contact"><Button variant="accent" size="md">Получить доступ</Button></a>
            </div>
          </div>

          {/* Tier 2 — featured */}
          <div style={{ background: "var(--ink-900)", border: "1px solid var(--ink-900)",
            padding: "36px 32px", display: "flex", flexDirection: "column",
            marginTop: -12, marginBottom: -12 }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "rgba(247,242,233,0.4)", margin: "0 0 12px" }}>Формат 02 — Основной</p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20,
              lineHeight: 1.2, color: "var(--cream-50)", margin: "0 0 16px" }}>
              Первый объект под руководством эксперта
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.65,
              color: "rgba(247,242,233,0.65)", margin: 0 }}>
              Для тех, кто хочет пройти первый проект не в одиночку — рядом с человеком, который уже более 20 лет работает в сфере недвижимости, строительства и управления проектами.
            </p>
            {open2 && (
              <React.Fragment>
                <Label dark>Мы вместе проходим:</Label>
                <ItemList items={TIER2_PATH} dark />
                <Label dark>Ваш результат:</Label>
                <ItemList items={TIER2_RESULTS} dark arrow="→" />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5,
                  color: "rgba(247,242,233,0.35)", margin: "14px 0 0", lineHeight: 1.5 }}>
                  5 месяцев · закрытый чат · Zoom-встречи · доступ к партнёрской сети · после предварительного интервью
                </p>
              </React.Fragment>
            )}
            <ToggleBtn open={open2} setOpen={setOpen2} dark />
            <div style={{ borderTop: "1px solid rgba(247,242,233,0.15)", marginTop: 24, paddingTop: 24 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 26,
                color: "var(--cream-50)", margin: "0 0 6px" }}>от 3 870 $</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5,
                color: "rgba(247,242,233,0.4)", margin: "0 0 16px", lineHeight: 1.5 }}>
                Финальная стоимость определяется после предварительного интервью
              </p>
              <a href="#contact">
                <Button variant="outline-on-dark" size="md">Заполнить анкету</Button>
              </a>
            </div>
          </div>

          {/* Tier 3 */}
          <div style={{ background: "var(--paper)", border: "1px solid var(--sand-300)",
            padding: "36px 32px", display: "flex", flexDirection: "column" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--stone-400)", margin: "0 0 12px" }}>Формат 03</p>
            <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 20,
              lineHeight: 1.2, color: "var(--ink-900)", margin: "0 0 16px" }}>
              Стратегическое партнёрство
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.65,
              color: "var(--stone-500)", margin: 0 }}>
              Для предпринимателей и инвесторов, которым необходим стратегический партнёр, способный видеть ситуацию шире и помогать принимать решения в ключевые моменты.
            </p>
            {open3 && (
              <React.Fragment>
                <Label>Ключевые направления:</Label>
                <ItemList items={TIER3_DIRECTIONS} />
                <Label>Что вы получите:</Label>
                <ItemList items={TIER3_RESULTS} arrow="→" />
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5,
                  color: "var(--stone-400)", margin: "14px 0 0", lineHeight: 1.5 }}>
                  Регулярные стратегические встречи · персональные консультации · доступ к профессиональной сети · начало с личной встречи
                </p>
              </React.Fragment>
            )}
            <ToggleBtn open={open3} setOpen={setOpen3} />
            <div style={{ borderTop: "1px solid var(--sand-300)", marginTop: 24, paddingTop: 24 }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 26,
                color: "var(--ink-900)", margin: "0 0 6px" }}>от 15 000 $</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12.5,
                color: "var(--stone-400)", margin: "0 0 16px", lineHeight: 1.5 }}>
                Финальные условия определяются после личной стратегической встречи
              </p>
              <a href="#contact"><Button variant="accent" size="md">Заполнить анкету</Button></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

window.TarifyContent = TarifyContent;
})();
