// PODE · Header
// Sticky thin nav. Logo mark + PODE wordmark left; nav center; CTA right.
// No backgrounds at rest — appears on white. Fades in a subtle glass
// on scroll (handled by parent's scroll state).

function Header({ scrolled }) {
  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#top" className="site-header__brand" aria-label="PODE — top">
        <img className="site-header__mark" src="../assets/logo-mark.svg" alt="" />
        <span className="pode-wordmark site-header__word">PODE</span>
      </a>

      <nav className="site-header__nav" aria-label="primary">
        <a href="#about">What is PODE</a>
        <a href="#equation">The Equation</a>
        <a href="#values">Values</a>
        <a href="#service">How we work</a>
      </nav>

      <a href="#contact" className="btn btn--primary btn--sm">
        Talk to us
        <span aria-hidden="true" className="btn__arrow">→</span>
      </a>
    </header>
  );
}

window.Header = Header;
