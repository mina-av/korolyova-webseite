/* global React */
(function () {
const { Button } = window.KorolyovaDesignSystem_d31d2b;

const WHAT_INSIDE = [
  "52 модуля",
  "143 урока",
  "634 страницы практических материалов",
  "чек-листы и таблицы контроля",
  "шаблоны документов",
  "инструкции по приёмке работ",
];

const TIERS = [
  {
    name: "Базовый",
    sub: "Последовательность",
    price: "237 $",
    desc: "Для тех, кто хочет самостоятельно разобраться, как всё должно выглядеть и функционировать на объекте, и как к этому прийти без ошибок.",
    items: [
      "45 структурированных модулей по всем этапам работ",
      "полная последовательность всех процессов",
      "как контролировать процесс без технического образования",
      "система приёмки работ и проверки качества",
    ],
    result: "Вы получаете полное понимание ремонта как единой системы и можете самостоятельно принимать решения на протяжении всего проекта.",
  },
  {
    name: "Оптимальный",
    sub: "Стратегическое управление",
    price: "587 $",
    featured: true,
    desc: "Для тех, кто хочет не только понимать последовательность работ, но и научиться управлять всем процессом реализации проекта.",
    items: [
      "всё из Базового тарифа",
      "система поиска и отбора подрядчиков",
      "блок по кризис-менеджменту",
      "алгоритмы предупреждения ошибок и лишних расходов",
      "закрытый чат со мной на 3 месяца",
      "регулярные Zoom-встречи для разбора вопросов",
    ],
    result: "Вы значительно снижаете риски ошибок, необоснованных расходов и потери контроля над объектом.",
  },
  {
    name: "Персональное сопровождение",
    sub: "",
    price: "1 570 $",
    desc: "Для тех, кто хочет получить систему управления ремонтом и возможность обсудить свой проект лично.",
    items: [
      "всё из Оптимального тарифа",
      "персональная консультация по вашему объекту",
      "предварительный анализ предоставленной информации",
      "разбор рисков и слабых мест",
      "доступ к партнёрской сети поставщиков",
    ],
    result: "Вы получаете полную, чёткую и работающую систему управления ремонтом и доступ к личной экспертизе.",
  },
];

function KursContent({ onNav }) {
  return (
    <React.Fragment>
      <section style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <div style={{ maxWidth: "68ch" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 20px" }}>
              Ремонт — это проект, в котором цена ошибки может исчисляться тысячами долларов и месяцами потерянного времени. Этот курс поможет вам понимать, что происходит на объекте, контролировать качество работ, принимать этапы без ошибок и уверенно управлять строительством или ремонтом — даже если вы никогда раньше этим не занимались.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7,
              color: "var(--ink-800)", margin: "0 0 40px" }}>
              Вы научитесь грамотно взаимодействовать с подрядчиками, оценивать предлагаемые решения и защищать свои интересы на каждом этапе реализации проекта.
            </p>

            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--stone-500)", margin: "0 0 16px" }}>
              Внутри курса:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0,
              borderTop: "1px solid var(--sand-300)" }}>
              {WHAT_INSIDE.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 16,
                  padding: "12px 0", borderBottom: "1px solid var(--sand-300)",
                  fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.5,
                  color: "var(--ink-800)" }}>
                  <span style={{ color: "var(--brass-600)", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream-50)", padding: "var(--section-y) 0" }}>
        <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)", lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "var(--ink-900)", margin: "0 0 48px", maxWidth: "24ch" }}>
            Выберите подходящий формат
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, alignItems: "stretch" }}
            className="kit-kurs-grid">
            {TIERS.map((t) => (
              <article key={t.name} style={{ display: "flex", flexDirection: "column",
                background: t.featured ? "var(--ink-900)" : "var(--surface-paper)",
                border: t.featured ? "none" : "1px solid var(--sand-300)",
                padding: "36px 32px 30px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24,
                  lineHeight: 1.1, color: t.featured ? "var(--cream-50)" : "var(--ink-900)",
                  margin: 0 }}>{t.name}</h3>
                {t.sub && <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
                  color: t.featured ? "var(--champagne-200)" : "var(--brass-700)",
                  margin: "8px 0 0", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.sub}</p>}
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, lineHeight: 1.6,
                  color: t.featured ? "rgba(247,242,233,0.7)" : "var(--stone-500)",
                  margin: "20px 0 0", flex: 1 }}>{t.desc}</p>
                <ul style={{ listStyle: "none", padding: 0,
                  margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 0,
                  borderTop: "1px solid " + (t.featured ? "rgba(247,242,233,0.15)" : "var(--sand-200)") }}>
                  {t.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, padding: "9px 0",
                      borderBottom: "1px solid " + (t.featured ? "rgba(247,242,233,0.1)" : "var(--sand-200)"),
                      fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.5,
                      color: t.featured ? "rgba(247,242,233,0.8)" : "var(--ink-700)" }}>
                      <span style={{ color: t.featured ? "var(--champagne-300)" : "var(--brass-600)",
                        flexShrink: 0 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic",
                  fontSize: 15, lineHeight: 1.4,
                  color: t.featured ? "rgba(247,242,233,0.6)" : "var(--stone-400)",
                  margin: "16px 0 24px" }}>{t.result}</p>
                <div style={{ borderTop: "1px solid " + (t.featured ? "rgba(247,242,233,0.2)" : "var(--sand-300)"),
                  paddingTop: 22, display: "flex", flexDirection: "column", gap: 16 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 32,
                    color: t.featured ? "var(--cream-50)" : "var(--ink-900)", lineHeight: 1 }}>
                    {t.price}
                  </span>
                  <Button variant={t.featured ? "accent" : "primary"} size="md"
                    onClick={() => onNav("contact")}>
                    Приобрести
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7,
            color: "var(--stone-500)", margin: "48px 0 0", maxWidth: "60ch" }}>
            Не уверены, какой формат подойдёт именно вам? Заполните форму ниже — я свяжусь с вами и помогу определить наиболее подходящий вариант.
          </p>
          <div style={{ marginTop: 20 }}>
            <Button variant="ghost" size="md" onClick={() => onNav("contact")}>
              Задать вопрос →
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

window.KursContent = KursContent;
})();
