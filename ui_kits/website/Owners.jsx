/* global React */
(function () {
const { KFSectionHead, KFOfferCard } = window;

function Owners({ onNav, n = "02" }) {
  return (
    <section id="owners" style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ marginBottom: 60 }}>
          <KFSectionHead n={n} label="Для собственников недвижимости"
            heading="На каком этапе вы сейчас?" max="22ch" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, alignItems: "stretch" }} className="kit-owners-grid">
          <KFOfferCard
            title="Процесс ремонта уже идёт"
            subtitle="Консультация"
            price="от 97 $" ctaLabel="Получить консультацию" onNav={onNav}>
            <p>Вроде всё понятно, но есть вопросы — рекомендую консультацию:</p>
            <ul style={{ margin: "8px 0 0", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>разбор вашей ситуации</li>
              <li>рекомендации по дальнейшим действиям</li>
              <li>помощь в принятии важных решений</li>
            </ul>
          </KFOfferCard>

          <KFOfferCard
            title="Планируете или уже делаете ремонт"
            subtitle="Курс для собственников"
            price="от 237 $" ctaLabel="Подробнее о курсе" onNav={onNav}>
            <p>Хотите понимать, что происходит на вашем объекте в любой момент времени — рекомендую курс.</p>
            <p>Для тех, кто хочет понимать все процессы на своём объекте и уверенно контролировать строительство или ремонт. Вы получите систему знаний, которая поможет принимать решения осознанно и не зависеть от чужого мнения.</p>
          </KFOfferCard>

          <KFOfferCard
            title="Хотите не беспокоиться и быть уверены в результате"
            subtitle="Представление интересов собственника"
            price="от 2 570 $" ctaLabel="Подробнее" onNav={onNav}>
            <p>Тогда для вас уместно стратегическое ведение объекта.</p>
            <p>Для тех, кто хочет делегировать контроль проекта и быть уверенным, что его интересы защищены на каждом этапе.</p>
            <p>Я представляю интересы собственника, контролирую процессы, участвую в принятии ключевых решений и помогаю довести проект до результата.</p>
          </KFOfferCard>
        </div>
      </div>
    </section>
  );
}

window.Owners = Owners;
})();
