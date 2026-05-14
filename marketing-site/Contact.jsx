// PODE · Contact
// Full-bleed Delta Burst gradient. Closing English statement,
// JA verse, single email CTA. The decisive last word.

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true"></div>
      <div className="contact__noise" aria-hidden="true"></div>

      <div className="contact__inner">
        <span className="eyebrow contact__eyebrow">05 · LET'S MOVE</span>
        <h2 className="contact__h">
          What's your next delta?
        </h2>
        <p className="contact__jp">
          次の変化量は、何ですか。<br />
          一緒に、出発点を動かしませんか。
        </p>

        <a className="contact__mail" href="mailto:ohebishi@wvvu.jp">
          <span className="contact__mail-label">CONTACT</span>
          <span className="contact__mail-addr">Let's talk</span>
          <span className="contact__mail-arrow" aria-hidden="true">→</span>
        </a>
        <p className="contact__sub">お問い合わせはこちらから</p>

        <div className="contact__meta">
          <div><span className="contact__meta-k">LOCATION</span> Tokyo · 東京</div>
          <div><span className="contact__meta-k">TIMEZONE</span> JST · UTC+9</div>
          <div><span className="contact__meta-k">CO.</span> 株式会社PODE / PODE Inc.</div>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
