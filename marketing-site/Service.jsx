// PODE · Service / How we work
// NOT a service grid. NOT a feature matrix. A three-row "tie-up rhythm":
// the way an engagement actually moves. Each row is a phase, written
// in plain language. Below: a short comparison strip — Tie-up vs. SI.

const RHYTHM = [
  {
    n: '01',
    h: 'Sit down. Ask.',
    jp: '隣に座って、問う。',
    body: 'A short, embedded discovery — two or three of us, beside the team, asking the questions that surface what\'s actually at stake.',
  },
  {
    n: '02',
    h: 'Move with Claude.',
    jp: 'Claudeと一緒に動く。',
    body: 'We pair the team with Claude on the real work. Drafts, prototypes, copy, decisions — shipped in days, not quarters.',
  },
  {
    n: '03',
    h: 'Hand over the delta.',
    jp: '変化量を、手渡す。',
    body: 'When we leave, the team owns what changed. Not a binder. Not a dashboard. A different starting point for tomorrow.',
  },
];

const COMPARE = [
  { left: 'Quarter-long SOWs', right: 'Two-to-six week residencies' },
  { left: 'Vendor / client posture', right: 'Shared backlog, shared deadline' },
  { left: 'Hours billed', right: 'Delta measured' },
  { left: 'Discovery → spec → build → handoff', right: 'Sit down → ask → move → hand over' },
];

function Service() {
  return (
    <section className="section" id="service">
      <div className="section__head">
        <span className="eyebrow">04 · HOW WE WORK</span>
        <h2 className="section__h">Companion, not contractor.</h2>
        <p className="section__sub">
          The tie-up rhythm in three movements. No SOW the size of a phonebook.<br />
          <span className="jp-body">三つのリズムで動きます。電話帳サイズのSOWは書きません。</span>
        </p>
      </div>

      <ol className="rhythm">
        {RHYTHM.map(r => (
          <li className="rhythm__row" key={r.n}>
            <div className="rhythm__n">{r.n}</div>
            <div className="rhythm__body">
              <div className="rhythm__h">{r.h}</div>
              <div className="rhythm__jp">{r.jp}</div>
              <p className="rhythm__p">{r.body}</p>
            </div>
            <div className="rhythm__delta" aria-hidden="true">Δ</div>
          </li>
        ))}
      </ol>

      <div className="compare">
        <div className="compare__head">
          <div className="compare__head-cell">
            <div className="compare__head-tag">ENTERPRISE SI</div>
            <div className="compare__head-jp">これではなく</div>
          </div>
          <div className="compare__head-cell compare__head-cell--right">
            <div className="compare__head-tag compare__head-tag--accent">PODE TIE-UP</div>
            <div className="compare__head-jp">こうやる</div>
          </div>
        </div>
        <div className="compare__rows">
          {COMPARE.map((c, i) => (
            <div className="compare__row" key={i}>
              <div className="compare__left">{c.left}</div>
              <div className="compare__arrow" aria-hidden="true">→</div>
              <div className="compare__right">{c.right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Service = Service;
