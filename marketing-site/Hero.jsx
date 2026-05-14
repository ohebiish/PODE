// PODE · Hero
// Asymmetric. Massive EN headline. The Delta Burst mark (orange-gradient
// orb with three triangles) floats right at ~45% of viewport and bleeds
// off the canvas. Below the tagline: fuller Japanese context paragraph.

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__orb" aria-hidden="true">
        <img src="../assets/logo-mark-gradient.svg" alt="" />
      </div>

      <div className="hero__main">
        <div className="hero__eyebrow">
          <span className="eyebrow">PODE · 株式会社PODE</span>
          <span className="hero__rule" aria-hidden="true"></span>
          <span className="hero__loc">TOKYO · 2026</span>
        </div>

        <h1 className="hero__h">
          <span className="hero__line">What is potential.</span>
          <span className="hero__line hero__line--accent">
            <span className="hero__line-text">We move like delta force.</span>
          </span>
        </h1>

        <p className="hero__jp">
          株式会社PODE（ポデ）は、<strong>Claudeを日本に普及させる</strong>クリエイティブ伴走組織。
          エンタープライズSIでも、DXコンサルでもありません。
          <br />
          企業の隣に座って、<strong>人間のポテンシャル × AIのポテンシャル</strong> から
          まだ見えていないクリエイティブを一緒に立ち上げ、<strong>変化量（Δ）</strong>を手渡して帰ります。
        </p>

        <div className="hero__cta">
          <a href="mailto:ohebishi@wvvu.jp" className="btn btn--primary btn--lg">
            Let's talk
            <span aria-hidden="true" className="btn__arrow">→</span>
          </a>
          <a href="#about" className="btn btn--ghost btn--lg">
            Learn more
            <span aria-hidden="true" className="btn__arrow">→</span>
          </a>
        </div>
        <p className="hero__cta-sub">お問い合わせはこちらから</p>
      </div>

      <div className="hero__foot">
        <div className="hero__foot-col">
          <div className="micro-label">MISSION</div>
          <div className="hero__foot-text">
            Bringing Claude to Japan as a creative-companion org —
            <br className="show-md" />
            not enterprise SI, not a consultancy.
          </div>
        </div>
        <div className="hero__foot-col">
          <div className="micro-label">ミッション</div>
          <div className="hero__foot-text jp-body">
            Claudeを日本に普及させる、クリエイティブ伴走組織。<br />
            SIでもなく、コンサルでもない。
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
