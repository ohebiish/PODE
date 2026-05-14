// PODE · What is PODE
// Bilingual two-column: short, declarative EN left; fuller JA right.
// Below: the PODE name break-down — PO·tential + DE·lta + pode (Pt. 「できる」).

function About() {
  return (
    <section className="section" id="about">
      <div className="section__head">
        <span className="eyebrow">01 · WHAT IS PODE</span>
        <h2 className="section__h">
          A creative-companion org,<br />not a consultancy.
        </h2>
      </div>

      <div className="about__grid">
        <div className="about__col">
          <p className="body-lg">
            PODE sits beside the team, not across from it. We don't write
            phonebook-sized statements of work. We share the backlog, share
            the deadline, and ship what changes — the <em>delta</em> — together.
          </p>
          <p className="body-lg">
            The model is Claude. The work is still craft — questioned by humans,
            written by humans, designed by humans, decided by humans.
          </p>
        </div>
        <div className="about__col">
          <p className="body-lg jp-body">
            私たちは、企業の隣に座って、一緒に動きます。
            分厚いSOWは書きません。バックログも、締切も、共有する。
            一緒に「何がどれだけ変わったか（差分 / Δ）」を出荷します。
          </p>
          <p className="body-lg jp-body">
            エンジンはClaude。仕事はクラフトのまま。
            問うのも、書くのも、デザインするのも、決めるのも、人間です。
          </p>
        </div>
      </div>

      <div className="about__name">
        <div className="about__name-label eyebrow">THE NAME · PODE</div>
        <div className="about__name-grid">
          <div className="about__name-cell">
            <div className="about__name-key"><span className="hl">PO</span>tential</div>
            <div className="about__name-meaning">可能性</div>
          </div>
          <div className="about__name-cell about__name-cell--op">×</div>
          <div className="about__name-cell">
            <div className="about__name-key"><span className="hl">DE</span>lta</div>
            <div className="about__name-meaning">変化量 / Δ</div>
          </div>
          <div className="about__name-cell about__name-cell--op">＝</div>
          <div className="about__name-cell">
            <div className="about__name-key"><span className="hl">pode</span></div>
            <div className="about__name-meaning">「できる」(ポルトガル語)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
