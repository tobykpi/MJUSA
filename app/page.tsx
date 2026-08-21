import Image from "next/image";

const divisions = [
  { ages: "Ages 7-10", name: "Little Miss", note: "Confidence begins here." },
  { ages: "Ages 11-14", name: "Junior Miss", note: "Purpose takes the stage." },
  { ages: "Ages 15-18", name: "Miss", note: "Leadership wears the crown." },
];

const pillars = [
  { number: "01", title: "Culture", text: "Honoring Juneteenth history and the generations whose courage made freedom possible." },
  { number: "02", title: "Scholarship", text: "Championing young women who pursue academic excellence with focus and imagination." },
  { number: "03", title: "Service", text: "Turning platforms into action through meaningful work in local communities." },
  { number: "04", title: "Sisterhood", text: "Creating a national network where young women are seen, celebrated, and supported." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Miss Juneteenth USA home">
          <Image className="brand-logo" src="/media/mjusa-logo-transparent.png" alt="Miss Juneteenth USA logo" width={66} height={52} priority />
          <span>MISS JUNETEENTH <b>USA</b></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#mission">Our mission</a>
          <a href="#program">The program</a>
          <a href="#story">Our story</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <a className="header-cta" href="mailto:Info@MJUSAnationals.com?subject=Start%20my%20MJUSA%20journey">Get involved <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/media/mjusa-queens.jpg" alt="Miss Juneteenth USA queens and leadership gathered together" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">A NATIONAL SCHOLARSHIP PAGEANT</p>
          <h1>Where history<br />meets <em>her</em> future.</h1>
          <div className="hero-lower">
            <p>Celebrating the brilliance, purpose, and promise of young African American women—one crown, one community, one legacy at a time.</p>
            <a className="primary-button" href="#mission">Discover MJUSA <span>↓</span></a>
          </div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>BLACK EXCELLENCE</span><b>1865</b><small>FORWARD</small></div>
      </section>

      <section className="mission" id="mission">
        <div className="mission-aside">
          <div className="section-label"><span>01</span> Our mission</div>
          <Image className="mission-logo" src="/media/mjusa-logo-transparent.png" alt="Miss Juneteenth USA official logo" width={320} height={245} />
        </div>
        <div className="mission-copy">
          <p className="kicker">More than a pageant.</p>
          <h2>A platform for <em>bold</em>, brilliant &amp; beautiful young women.</h2>
          <div className="mission-detail">
            <p>Miss Juneteenth USA spotlights African American youth from across the country—nurturing confidence, leadership, cultural pride, and a lifelong commitment to service.</p>
            <p>Our queens are ambassadors of Juneteenth: prepared to speak with purpose, lead with grace, and create change in the communities they call home.</p>
          </div>
        </div>
      </section>

      <section className="pillars" aria-label="Program values">
        {pillars.map((pillar) => (
          <article className="pillar" key={pillar.title}>
            <span>{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="program" id="program">
        <div className="program-intro">
          <div className="section-label light"><span>02</span> The program</div>
          <p className="kicker">A journey with purpose.</p>
          <h2>Three divisions.<br />One powerful legacy.</h2>
          <p>Contestants grow through interview, talent, stage presence, cultural learning, community service, and the development of a personal platform.</p>
        </div>
        <div className="division-list">
          {divisions.map((division, index) => (
            <article className="division" key={division.name}>
              <span className="division-number">0{index + 1}</span>
              <div><small>{division.ages}</small><h3>{division.name}</h3></div>
              <p>{division.note}</p><span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <Image className="story-photo" src="/media/mjusa-queens.jpg" alt="Miss Juneteenth USA queens and leadership in Galveston, Texas" width={1920} height={1280} sizes="(max-width: 900px) 100vw, 60vw" />
        <blockquote>
          <span className="quote-mark">“</span>
          <p>We take great pride in magnifying Black Excellence and showcasing our queens to even higher levels of personal and professional achievement.</p>
          <footer><b>Sylvia Lewis-Harris</b><span>President &amp; Founder</span></footer>
        </blockquote>
      </section>

      <section className="gallery" id="gallery">
        <div className="gallery-heading">
          <div className="section-label light"><span>03</span> Media gallery</div>
          <p className="kicker">Moments in motion.</p>
          <h2>See the <em>journey</em><br />come alive.</h2>
          <p>From the national stage to community moments, experience the energy, sisterhood, and purpose behind Miss Juneteenth USA.</p>
        </div>
        <div className="media-gallery">
          <article className="media-card featured">
            <iframe src="https://www.youtube-nocookie.com/embed/awfwAR73MtU" title="Miss Juneteenth USA video feature one" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <div><span>01</span><h3>MJUSA Spotlight</h3><small>Official video</small></div>
          </article>
          <article className="media-card">
            <a className="youtube-fallback" href="https://www.youtube.com/watch?v=pSEQeyp-zi8" target="_blank" rel="noreferrer" aria-label="Watch Miss Juneteenth USA video feature two on YouTube"><img src="https://i.ytimg.com/vi/pSEQeyp-zi8/hqdefault.jpg" alt="Miss Juneteenth USA video preview" /><span className="youtube-play" aria-hidden="true">▶</span></a>
            <div><span>02</span><h3>MJUSA in Motion</h3><small>Official video</small></div>
          </article>
        </div>
      </section>

      <section className="closing">
        <Image className="closing-logo" src="/media/mjusa-logo-transparent.png" alt="Miss Juneteenth USA official logo" width={260} height={190} />
        <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>
        <h2>Ready to step<br />into your <em>legacy?</em></h2>
        <a className="primary-button dark" href="mailto:Info@MJUSAnationals.com?subject=Start%20my%20MJUSA%20journey">Start your journey <span>↗</span></a>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#top"><Image className="brand-logo" src="/media/mjusa-logo-transparent.png" alt="" width={66} height={52} /><span>MISS JUNETEENTH <b>USA</b></span></a>
        <p>Highlighting &amp; spotlighting African American youth across the nation.</p>
        <div><a href="mailto:Info@MJUSAnationals.com">Info@MJUSAnationals.com</a><a href="https://www.missjuneteenthusa.org">missjuneteenthusa.org</a></div>
        <small>© 2026 Miss Juneteenth USA. All rights reserved.</small>
      </footer>
    </main>
  );
}
