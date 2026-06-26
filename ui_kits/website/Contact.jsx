/* global React */
(function () {
const { Button, Input } = window.KorolyovaDesignSystem_d31d2b;
const { KFSectionHead } = window;

const INTERESTS = [
  "Консультация", "Курс для собственников", "Представление интересов собственника",
  "Программа по созданию строительного бизнеса", "Профессиональная партнёрская сеть", "Другое",
];
const METHODS = ["Telegram", "WhatsApp", "Телефон"];

function Contact() {
  const [f, setF] = React.useState({ name: "", contact: "", method: "Telegram", interest: "", message: "", sent: false });
  const set = (k, v) => setF((s) => ({ ...s, [k]: v }));

  const labelStyle = { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600,
    letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--stone-500)", marginBottom: 12, display: "block" };

  return (
    <section id="contact" style={{ background: "var(--paper)", padding: "var(--section-y) 0" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 var(--gutter)" }}>
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <KFSectionHead heading="Не уверены, с чего начать?"
            intro="Каждая ситуация индивидуальна. Напишите, и я помогу определить подходящий формат." max="18ch" />
        </div>

        {f.sent ? (
          <div style={{ border: "1px solid var(--sand-300)", padding: "64px 40px", textAlign: "center", maxWidth: 760 }}>
            <i data-lucide="check-check" style={{ width: 32, height: 32, color: "var(--brass-600)" }}></i>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--ink-900)", margin: "18px 0 0" }}>
              Спасибо за обращение.
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--stone-500)", margin: "10px 0 0" }}>
              Я свяжусь с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); set("sent", true); }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "34px 40px", maxWidth: 900 }} className="kit-form-grid">
            <Input label="Имя" placeholder="Ваше имя" value={f.name} onChange={(e) => set("name", e.target.value)} required />
            <Input label="Ваш контакт" placeholder="Телефон, e-mail или @username" value={f.contact} onChange={(e) => set("contact", e.target.value)} required />

            <div style={{ gridColumn: "1 / -1" }}>
              <span style={labelStyle}>Предпочтительный способ связи</span>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {METHODS.map((m) => (
                  <button type="button" key={m} onClick={() => set("method", m)}
                    style={{ cursor: "pointer", background: f.method === m ? "var(--ink-900)" : "transparent",
                      color: f.method === m ? "var(--cream-50)" : "var(--ink-700)",
                      border: "1px solid " + (f.method === m ? "var(--ink-900)" : "var(--sand-300)"),
                      borderRadius: "var(--radius-pill)", padding: "10px 22px",
                      fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
                      transition: "all var(--dur-fast) var(--ease-out)" }}>
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <span style={labelStyle}>Что вас интересует?</span>
              <select value={f.interest} onChange={(e) => set("interest", e.target.value)} required
                style={{ width: "100%", appearance: "none", background: "transparent",
                  border: "none", borderBottom: "1.5px solid var(--sand-300)", padding: "8px 0",
                  fontFamily: "var(--font-sans)", fontSize: 17, color: f.interest ? "var(--ink-900)" : "var(--stone-400)",
                  outline: "none", cursor: "pointer", borderRadius: 0 }}>
                <option value="" disabled>Выберите</option>
                {INTERESTS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <span style={labelStyle}>Ваш вопрос</span>
              <textarea rows={4} value={f.message} onChange={(e) => set("message", e.target.value)}
                placeholder="Кратко опишите вашу ситуацию"
                style={{ width: "100%", appearance: "none", background: "transparent",
                  border: "1px solid var(--sand-300)", padding: "14px 16px", resize: "vertical",
                  fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--ink-900)", outline: "none",
                  borderRadius: "var(--radius-xs)" }} />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <Button variant="primary" size="lg" type="submit" withArrow>Отправить</Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

window.Contact = Contact;
})();
