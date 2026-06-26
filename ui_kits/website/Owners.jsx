/* global React */
(function () {
const { KFSectionHead, KFOfferCard } = window;

function Owners({ onNav, n = "02" }) {
  return (
    <section id="owners" style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ marginBottom: 60 }}>
          <KFSectionHead n={n} label="Для собственников недвижимости"
            heading="Выберите формат, который соответствует вашей ситуации"
            intro="Для этого я создала несколько форматов участия." max="22ch" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, alignItems: "stretch" }} className="kit-owners-grid">
          <KFOfferCard
            title="Консультация" subtitle="Разбор вашей ситуации"
            price="от 97 $" ctaLabel="Заполнить бриф и записаться" onNav={onNav}>
            <p>Появились вопросы в процессе строительства или ремонта? Вы получаете профессиональный анализ и независимый экспертный взгляд.</p>
            <div>
              <p style={{ fontWeight: 600, color: "var(--ink-800)", margin: "0 0 8px" }}>Подходит, если нужно:</p>
              <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                <li>оценить качество выполненных работ</li>
                <li>разобраться в споре с подрядчиком</li>
                <li>принять объект или этап</li>
                <li>получить второе мнение перед важным решением</li>
              </ul>
            </div>
            <p>По итогу: письменные рекомендации и план дальнейших действий.</p>
          </KFOfferCard>

          <KFOfferCard
            title="Курс для собственников"
            subtitle="Не позволяйте подрядчикам принимать решения за ваши деньги"
            meta="52 модуля · 143 урока · 634 страницы материалов · чек-листы · шаблоны документов"
            tiers={[
              { name: "Базовый", price: "237 $" },
              { name: "Оптимальный", price: "587 $" },
              { name: "Персональное сопровождение", price: "1 570 $" },
            ]}
            ctaLabel="Подробнее о курсе" onNav={onNav}>
            <p>Ремонт — это проект, в котором цена ошибки может исчисляться тысячами долларов. Курс поможет контролировать качество, принимать этапы без ошибок и уверенно управлять строительством, даже без технического образования.</p>
          </KFOfferCard>

          <KFOfferCard
            title="Представление интересов собственника"
            subtitle="Ваши интересы на каждом этапе проекта"
            price="от 2 570 $" ctaLabel="Записаться" onNav={onNav}>
            <p>В проекте десятки специалистов, у каждого свои интересы. Ваши часто остаются без защиты.</p>
            <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>контроль соответствия работ проектной документации</li>
              <li>проверка смет и объёмов</li>
              <li>координация подрядчиков и специалистов</li>
              <li>контроль сроков и качества</li>
              <li>предотвращение необоснованных расходов</li>
            </ul>
            <p>Объём участия и стоимость определяются индивидуально, после знакомства с проектом.</p>
          </KFOfferCard>
        </div>
      </div>
    </section>
  );
}

window.Owners = Owners;
})();
