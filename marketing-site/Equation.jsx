// PODE · The Equation
// The brand's load-bearing visual: Human × AI = Creative.
// Each variable rendered as a circle the color of its meaning,
// with a label below. The "=" snaps to Creative, which fills with
// the Delta Burst gradient — both type and orb.

function Equation() {
  return (
    <section className="section section--ink" id="equation">
      <div className="equation__inner">
        <div className="section__head section__head--center">
          <span className="eyebrow" style={{ color: '#FFD60A' }}>02 · THE EQUATION</span>
          <h2 className="section__h section__h--reverse">
            Human × AI = Creative.
          </h2>
          <p className="section__sub section__sub--reverse">
            One equation. Three colors. Every project starts here.<br />
            <span className="jp-body" style={{ opacity: 0.78 }}>
              人間のポテンシャル × AI（Claude）のポテンシャル = クリエイティブ。
            </span>
          </p>
        </div>

        <div className="equation__row">
          <Term label="Human" jp="人 / 主体性" color="orange" />
          <Op>×</Op>
          <Term label="AI" jp="Claude / 知性" color="purple" />
          <Op>=</Op>
          <Term label="Creative" jp="閃き × 化学反応" color="burst" />
        </div>

        <div className="equation__legend">
          <div className="equation__legend-row">
            <span className="dot dot--orange"></span><span>Human — オレンジは「人の熱量・主体性」</span>
          </div>
          <div className="equation__legend-row">
            <span className="dot dot--purple"></span><span>AI — パープルは「Claude / 知性」</span>
          </div>
          <div className="equation__legend-row">
            <span className="dot dot--yellow"></span><span>Creative — イエロー〜オレンジ〜パープルのDelta Burstで「閃き」</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Term({ label, jp, color }) {
  return (
    <div className={`term term--${color}`}>
      <div className="term__orb" aria-hidden="true"></div>
      <div className="term__label">{label}</div>
      <div className="term__jp">{jp}</div>
    </div>
  );
}

function Op({ children }) {
  return <div className="equation__op" aria-hidden="true">{children}</div>;
}

window.Equation = Equation;
