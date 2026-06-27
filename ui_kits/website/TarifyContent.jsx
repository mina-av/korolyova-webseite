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
  "формирование бюджета проекта",
  "подготовка сметной документации",
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

function ItemList({ items, arrow = "—" }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0,
      borderTop: "1px solid var(--sand-300)" }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 12,
          padding: "9px 0", borderBottom: "1px solid var(--sand-300)",
          fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.5,
          color: "var(--ink-700)" }}>
          <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>{arrow}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function TierCard({ dark, label, title, price, priceNote, ctaLabel, ctaHref, children }) {
  const bg = dark ? "var(--ink-900)" : "var(--paper)";
  const textPrimary = dark ? "var(--cream-50)" : "var(--ink-900)";
  const textSecondary = dark ? "rgba(247,242,233,0.62)" : "var(--stone-500)";
  const border = dark ? "1px solid rgba(247,242,233,0.12)" : "1px solid var(--sand-300)";

  return (
    <div style={{ background: bg, border, padding: "40px 36px",
      display: "flex", flexDirection: "column", gap: 0 }}>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: dark ? "rgba(247,242,233,0.45)" : "var(--stone-400)", margin: "0 0 14px" }}>
        {label}
      </p>
      <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 600,
        fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.15,
        color: textPrimary, margin: "0 0 28px" }}>
        {title}
      </h2>
      {children({ textPrimary, textSecondary, border })}
      <div style={{ borderTop: dark ? "1px solid rgba(247,242,233,0.15)" : "1px solid var(--sand-300)",
        marginTop: 32, paddingTop: 24 }}>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700,
          fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: dark ? "var(--cream-50)" : "var(--ink-900)",
          margin: "0 0 4px" }}>{price}</p>
        {priceNote && <p style={{ fontFamily: "var(--font-sans)", fontSize: 13,
          color: textSecondary, margin: "0 0 20px", lineHeight: 1.5 }}>{priceNote}</p>}
        <a href={ctaHref}>
          <Button variant={dark ? "outline-on-dark" : "accent"} size="md">{ctaLabel}</Button>
        </a>
      </div>
    </div>
  );
}

function TarifyContent() {
  return (
    <React.Fragment>
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ maxWidth: "60ch", marginBottom: 56 }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: 0 }}>
              У всех разные цели, опыт и уровень подготовки. Кому-то достаточно получить систему и внедрять её самостоятельно. Кто-то хочет пройти первый объект под руководством эксперта. А кто-то ищет стратегического партнёра для создания или масштабирования бизнеса.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }} className="kit-tarify-stack">

            <TierCard label="Формат 01" title="Самостоятельное изучение"
              price="587 $" ctaLabel="Получить доступ" ctaHref="#contact">
              {({ textSecondary }) => (
                <React.Fragment>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                    color: textSecondary, margin: "0 0 20px" }}>
                    Полная система создания и развития строительного бизнеса. Для тех, кто готов самостоятельно изучать материалы и внедрять их в свою работу. В программе собран практический опыт более 20 лет работы в сфере недвижимости, строительства и управления проектами.
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--stone-400)", margin: "0 0 12px" }}>В программе:</p>
                  <div style={{ marginBottom: 20 }}><ItemList items={TIER1_ITEMS} /></div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13,
                    color: textSecondary, margin: "12px 0 0", lineHeight: 1.5 }}>
                    95 модулей · 297 уроков · более 1 000 страниц · регламенты · договоры · шаблоны · чек-листы
                  </p>
                </React.Fragment>
              )}
            </TierCard>

            <TierCard dark label="Формат 02 — Основной"
              title="Первый объект под руководством эксперта"
              price="от 3 870 $"
              priceNote="Финальная стоимость определяется после предварительного интервью"
              ctaLabel="Заполнить анкету" ctaHref="#contact">
              {({ textSecondary, border }) => (
                <React.Fragment>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                    color: textSecondary, margin: "0 0 20px" }}>
                    Для тех, кто хочет создать строительный бизнес на практике. Мы вместе проходим весь путь первого проекта — рядом с человеком, который уже более 20 лет работает в сфере недвижимости, строительства и управления проектами.
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "rgba(247,242,233,0.35)", margin: "0 0 12px" }}>Мы вместе проходим:</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px",
                    borderTop: "1px solid rgba(247,242,233,0.12)" }}>
                    {TIER2_PATH.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 12,
                        padding: "9px 0", borderBottom: "1px solid rgba(247,242,233,0.12)",
                        fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.5,
                        color: "rgba(247,242,233,0.72)" }}>
                        <span style={{ color: "var(--brass-400)", flexShrink: 0 }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "rgba(247,242,233,0.35)", margin: "0 0 12px" }}>Ваш результат:</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px",
                    borderTop: "1px solid rgba(247,242,233,0.12)" }}>
                    {TIER2_RESULTS.map((item) => (
                      <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 12,
                        padding: "9px 0", borderBottom: "1px solid rgba(247,242,233,0.12)",
                        fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.5,
                        color: "rgba(247,242,233,0.72)" }}>
                        <span style={{ color: "var(--brass-400)", flexShrink: 0 }}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13,
                    color: "rgba(247,242,233,0.45)", margin: 0, lineHeight: 1.5 }}>
                    5 месяцев сопровождения · закрытый чат · Zoom-встречи · доступ к партнёрской сети · участие после предварительного интервью
                  </p>
                </React.Fragment>
              )}
            </TierCard>

            <TierCard label="Формат 03"
              title="Стратегическое партнёрство"
              price="от 15 000 $"
              priceNote="Финальные условия определяются после личной стратегической встречи"
              ctaLabel="Заполнить анкету" ctaHref="#contact">
              {({ textSecondary }) => (
                <React.Fragment>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.65,
                    color: textSecondary, margin: "0 0 20px" }}>
                    Самый высокий уровень взаимодействия. Для предпринимателей и инвесторов, которым необходим стратегический партнёр, способный видеть ситуацию шире, своевременно выявлять риски и помогать принимать решения в ключевые моменты развития бизнеса.
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--stone-400)", margin: "0 0 12px" }}>Ключевые направления работы:</p>
                  <div style={{ marginBottom: 24 }}><ItemList items={TIER3_DIRECTIONS} /></div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--stone-400)", margin: "0 0 12px" }}>Что вы получите:</p>
                  <div style={{ marginBottom: 20 }}><ItemList items={TIER3_RESULTS} arrow="→" /></div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 13,
                    color: textSecondary, margin: "8px 0 0", lineHeight: 1.5 }}>
                    Регулярные стратегические встречи · персональные консультации · поддержка между встречами · доступ к профессиональной сети · начало с личной встречи
                  </p>
                </React.Fragment>
              )}
            </TierCard>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.TarifyContent = TarifyContent;
})();
