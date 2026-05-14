// PODE · Values
// Δ1〜Δ4. Four cards, each carrying a numbered delta, a JA headline,
// an EN translation, and a one-line body. The Δ number is large
// and orange; the rest is quiet.

const DELTAS = [
  {
    n: '1',
    jp: '問いが先、答えは後',
    en: 'Question first. Answer later.',
    body: 'We ask "why do this" before "can we do this." A right question is worth a hundred shipped features.',
    bodyJp: '「できるか」より「なぜやるか」を先に問う。良い問いは、機能を100個出荷するより価値がある。',
  },
  {
    n: '2',
    jp: '深く入る、広く見る',
    en: 'Go deep. See wide.',
    body: 'We don\'t talk on the surface. We get inside the problem until we can describe it in the team\'s own words.',
    bodyJp: '表面では語らない。チーム自身の言葉で問題を説明できるようになるまで、深く入る。',
  },
  {
    n: '3',
    jp: '変化量で語る',
    en: 'Speak in delta.',
    body: 'Outcomes are measured against a starting point. "What changed, by how much." Hours and features are footnotes.',
    bodyJp: '成果は出発点との差分で測る。「何が、どれだけ変わったか」。時間や機能は脚注に過ぎない。',
  },
  {
    n: '4',
    jp: 'できる、から始まる',
    en: 'Start with "pode" — we can.',
    body: 'pode is Portuguese for "can." Our starting line is the moment a partner believes the next step is possible.',
    bodyJp: 'podeはポルトガル語で「できる」。パートナーが「次の一歩はできる」と信じた瞬間が、私たちのスタート地点。',
  },
];

function Values() {
  return (
    <section className="section" id="values">
      <div className="section__head">
        <span className="eyebrow">03 · VALUES</span>
        <h2 className="section__h">Four deltas.<br />Δ1 — Δ4.</h2>
        <p className="section__sub">
          The shape of how we work. Read in any order; they all point at the same posture.<br />
          <span className="jp-body">私たちの動き方。順番は問いません。どの矢印も、同じ姿勢を指しています。</span>
        </p>
      </div>

      <div className="values__grid">
        {DELTAS.map(d => (
          <article className="value-card" key={d.n}>
            <div className="value-card__top">
              <span className="value-card__delta-glyph" aria-hidden="true">Δ</span>
              <span className="value-card__n">{d.n}</span>
            </div>
            <h3 className="value-card__jp">{d.jp}</h3>
            <div className="value-card__en">{d.en}</div>
            <p className="value-card__body">{d.body}</p>
            <p className="value-card__body jp-body value-card__body--jp">{d.bodyJp}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Values = Values;
