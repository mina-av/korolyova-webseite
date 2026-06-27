/* global React */
(function () {
const { Button, IconButton } = window.KorolyovaDesignSystem_d31d2b;

const LINKS = [
  ["Собственникам", "sobstvennikam.html", [
    ["Консультация", "konsultaciya.html"],
    ["Курс для собственников", "kurs.html"],
    ["Представление интересов", "vvedenie.html"],
  ]],
  ["Строительный бизнес", "biznes.html", [
    ["Программа", "biznes.html"],
    ["Форматы участия", "tarify.html"],
  ]],
  ["Партнёрская сеть", "set.html"],
  ["Об авторе", "index.html#about"],
];

function NavDropdown({ label, href, sub, active, isActive }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);

  const show = () => { clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div style={{ position: "relative" }} onMouseEnter={show} onMouseLeave={hide}>
      <a href={href}
        style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
          letterSpacing: "0.01em", whiteSpace: "nowrap", textDecoration: "none",
          color: active ? "var(--brass-600)" : "var(--ink-700)",
          borderBottom: active ? "1px solid var(--brass-600)" : "1px solid transparent",
          paddingBottom: 2, transition: "color var(--dur-fast) var(--ease-out)",
          display: "inline-flex", alignItems: "center", gap: 4 }}>
        {label} <span style={{ fontSize: 10, opacity: 0.55 }}>▾</span>
      </a>
      {open && (
        <div onMouseEnter={show} onMouseLeave={hide}
          style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8, zIndex: 50, minWidth: 220 }}>
          <div style={{ background: "var(--cream-50)", border: "1px solid var(--sand-300)",
            boxShadow: "var(--shadow-md)" }}>
            {sub.map(([sl, sh]) => (
              <a key={sh} href={sh}
                style={{ display: "block", padding: "11px 18px",
                  fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 500,
                  color: isActive(sh) ? "var(--brass-600)" : "var(--ink-700)",
                  textDecoration: "none", borderBottom: "1px solid var(--sand-200)",
                  transition: "background var(--dur-fast) var(--ease-out)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--sand-100)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
                {sl}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ onNav, mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const isActive = (href) => href.split("#")[0] === currentPage;

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40,
      background: scrolled ? "rgba(247,242,233,0.92)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(12px)" : "none",
      borderBottom: "1px solid " + (scrolled ? "var(--sand-300)" : "transparent"),
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base)" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 var(--gutter)",
        height: 82, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="index.html"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 25,
            letterSpacing: "0.02em", color: "var(--ink-900)", whiteSpace: "nowrap", textDecoration: "none" }}>
          ТАМИЛА КОРОЛЁВА
        </a>

        <nav style={{ display: "flex", gap: 34, alignItems: "center" }} className="kit-desktop-nav">
          {LINKS.map(([l, href, sub]) => {
            const active = isActive(href) || (sub && sub.some(([, sh]) => isActive(sh)));
            if (!sub) return (
              <a key={href} href={href}
                style={{ fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 500,
                  letterSpacing: "0.01em", whiteSpace: "nowrap", textDecoration: "none",
                  color: active ? "var(--brass-600)" : "var(--ink-700)",
                  borderBottom: active ? "1px solid var(--brass-600)" : "1px solid transparent",
                  paddingBottom: 2, transition: "color var(--dur-fast) var(--ease-out)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brass-600)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = active ? "var(--brass-600)" : "var(--ink-700)")}>
                {l}
              </a>
            );
            return <NavDropdown key={href} label={l} href={href} sub={sub} active={active} isActive={isActive} />;
          })}
          <Button size="sm" variant="primary" onClick={() => onNav("contact")}>Записаться на консультацию</Button>
        </nav>

        <div className="kit-mobile-toggle" style={{ display: "none" }}>
          <IconButton icon={mobileOpen ? "x" : "menu"} label="Меню" variant="ghost"
            onClick={() => setMobileOpen(!mobileOpen)} />
        </div>
      </div>

      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--sand-300)", background: "var(--cream-50)", padding: "16px var(--gutter)" }}>
          {LINKS.map(([l, href, sub]) => (
            <React.Fragment key={href}>
              <a href={href} onClick={() => setMobileOpen(false)}
                style={{ display: "block", padding: "13px 0", fontFamily: "var(--font-sans)",
                  fontSize: 16, color: isActive(href) ? "var(--brass-600)" : "var(--ink-800)",
                  borderBottom: sub ? "none" : "1px solid var(--sand-200)", textDecoration: "none" }}>
                {l}
              </a>
              {sub && sub.map(([sl, sh]) => (
                <a key={sh} href={sh} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "10px 0 10px 16px",
                    fontFamily: "var(--font-sans)", fontSize: 14,
                    color: isActive(sh) ? "var(--brass-600)" : "var(--stone-500)",
                    borderBottom: "1px solid var(--sand-200)", textDecoration: "none" }}>
                  {sl}
                </a>
              ))}
            </React.Fragment>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); onNav("contact"); setMobileOpen(false); }}
            style={{ display: "block", padding: "13px 0", fontFamily: "var(--font-sans)",
              fontSize: 16, color: "var(--ink-800)", borderBottom: "1px solid var(--sand-200)", textDecoration: "none" }}>
            Записаться на консультацию
          </a>
        </div>
      )}
    </header>
  );
}

window.Header = Header;
})();
