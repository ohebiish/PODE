// PODE · Footer
// Minimal. Wordmark · tagline · copyright · single link row.

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <img className="site-footer__mark" src="../assets/logo-mark.svg" alt="" />
          <span className="pode-wordmark site-footer__word">PODE</span>
        </div>
        <div className="site-footer__tag">
          What is potential. <em>We move like delta force.</em><br />
          <span className="jp-body" style={{ opacity: 0.7 }}>
            Claudeを日本に普及させるクリエイティブ伴走組織。
          </span>
        </div>
      </div>

      <div className="site-footer__base">
        <div>© 2026 株式会社PODE / PODE Inc.</div>
        <nav className="site-footer__links">
          <a href="#about">About</a>
          <a href="#values">Values</a>
          <a href="#service">How we work</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/ohebiish/PODE" target="_blank" rel="noopener">GitHub ↗</a>
        </nav>
      </div>
    </footer>
  );
}

window.Footer = Footer;
