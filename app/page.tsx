import "./landing.css";
import { Stars, SignupForm, ScrollReveal, MobileNav } from "./landing-client";

export default function Home() {
  return (
    <ScrollReveal>
      {/* NAV */}
      <nav>
        <div className="nav-logo">
          Myth<span>ic</span>
        </div>
        <ul className="nav-links">
          <li><a href="#for-kids">For Kids</a></li>
          <li><a href="#for-parents">For Parents</a></li>
          <li><a href="#how">How it works</a></li>
        </ul>
        <div className="nav-right">
          <a href="/discover" className="nav-cta">Open App</a>
          <MobileNav />
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="shape s1" />
        <div className="shape s2" />
        <div className="shape s3" />
        <div className="shape s4" />
        <div className="shape s5" />

        <Stars />

        <div className="hero-inner">
          <div className="hero-badge">
            <div className="badge-dot" />
            Now in early access
          </div>
          <h1>
            Every child is
            <em> the hero</em>
            <span className="line2">of their own story</span>
          </h1>
          <p className="hero-sub">
            Mythic turns your child&apos;s imagination into illustrated stories,
            narrated adventures, and animated movies — powered by AI, guided by
            you.
          </p>
          <div className="hero-actions">
            <a href="#signup" className="btn-primary">
              &#10022; Get early access
            </a>
            <a href="#how" className="btn-secondary">
              See how it works
            </a>
          </div>

          <div className="hero-illustration">
            <div className="book-stage">
              <div className="bubble b1">
                <span className="bubble-icon">&#10024;</span> Story created!
              </div>
              <div className="bubble b2">
                <span className="bubble-icon">&#127912;</span> 4 illustrations
              </div>
              <div className="bubble b3">
                <span className="bubble-icon">&#127916;</span> Movie ready
              </div>

              <div className="book-card">
                <div className="book-header">
                  <div className="book-cover">&#128009;</div>
                  <div className="book-meta">
                    <h3>Zara &amp; the Dragon of Stars</h3>
                    <p>
                      Created by Zara, age 7 &middot; 4 chapters &middot; 8
                      illustrations
                    </p>
                  </div>
                </div>
                <div className="book-pages">
                  <div className="page-thumb p1">
                    <div className="page-scene">
                      Chapter 1 &middot; The discovery
                    </div>
                  </div>
                  <div className="page-thumb p2">
                    <div className="page-scene">
                      Chapter 2 &middot; The journey
                    </div>
                  </div>
                  <div className="page-thumb p3">
                    <div className="page-scene">
                      Chapter 3 &middot; The challenge
                    </div>
                  </div>
                  <div className="page-thumb p4">
                    <div className="page-scene">
                      Chapter 4 &middot; The triumph
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stat">
          <div className="stat-num">60s</div>
          <div className="stat-label">Story created in under a minute</div>
        </div>
        <div className="stat">
          <div className="stat-num">100%</div>
          <div className="stat-label">Parent-controlled content</div>
        </div>
        <div className="stat">
          <div className="stat-num">COPPA</div>
          <div className="stat-label">Compliant &amp; privacy-safe</div>
        </div>
        <div className="stat">
          <div className="stat-num">&infin;</div>
          <div className="stat-label">Worlds to explore</div>
        </div>
      </div>

      {/* FOR KIDS */}
      <section className="features-kids" id="for-kids">
        <div className="inner">
          <div>
            <span className="section-tag tag-amber">For young creators</span>
            <h2 className="section-title">
              Make <em>magic</em>,<br />
              not just media
            </h2>
            <p className="section-sub">
              Children don&apos;t just read stories on Mythic — they build them,
              star in them, and share them with the world.
            </p>
          </div>
          <div className="feat-grid">
            <div className="feat-card">
              <div className="feat-icon icon-amber">&#128214;</div>
              <h4>Write your story</h4>
              <p>
                Pick characters, a setting, and a theme. Mythic writes the
                adventure — in your child&apos;s voice.
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-icon icon-teal">&#127912;</div>
              <h4>AI illustrations</h4>
              <p>
                Every story comes to life with beautiful, unique artwork
                generated for each scene.
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-icon icon-rose">&#127916;</div>
              <h4>Animated movies</h4>
              <p>
                Turn your story into a narrated movie with character voices,
                music, and motion.
              </p>
            </div>
            <div className="feat-card">
              <div className="feat-icon icon-purple">&#127744;</div>
              <h4>Remix others&apos; tales</h4>
              <p>
                Jump into a friend&apos;s adventure and add your own twist —
                stories grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR PARENTS */}
      <section className="features-parents" id="for-parents">
        <div className="inner">
          <div>
            <span className="section-tag tag-teal">For families</span>
            <h2 className="section-title">
              You set the world.
              <br />
              They explore it.
            </h2>
            <p className="section-sub">
              Mythic gives parents meaningful control — from the values woven
              into every story to who can see what your child creates.
            </p>
            <div className="parent-list">
              <div className="parent-item">
                <div className="parent-item-icon">&#128274;</div>
                <div className="parent-item-text">
                  <h4>Theme and lesson controls</h4>
                  <p>
                    Promote kindness, courage, or curiosity. Block themes
                    you&apos;d rather avoid. Every story reflects your
                    family&apos;s values.
                  </p>
                </div>
              </div>
              <div className="parent-item">
                <div className="parent-item-icon">&#128065;</div>
                <div className="parent-item-text">
                  <h4>Private by default</h4>
                  <p>
                    Stories stay within your family circle. You approve
                    everything before it&apos;s shared beyond your household.
                  </p>
                </div>
              </div>
              <div className="parent-item">
                <div className="parent-item-icon">&#128202;</div>
                <div className="parent-item-text">
                  <h4>Activity insights</h4>
                  <p>
                    See what your child is creating, how much time they spend,
                    and which themes they&apos;re exploring.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="phone-frame">
              <div className="phone-top">
                <div className="phone-top-bar">
                  <span>Mythic Parent</span>
                  <span>Zara&apos;s profile</span>
                </div>
                <div className="phone-title">Parental controls</div>
              </div>
              <div className="phone-body">
                <div className="control-row">
                  <span className="control-label">Kindness themes</span>
                  <div className="toggle-on" />
                </div>
                <div className="control-row">
                  <span className="control-label">Adventure stories</span>
                  <div className="toggle-on" />
                </div>
                <div className="control-row">
                  <span className="control-label">Scary content</span>
                  <div className="toggle-off" />
                </div>
                <div className="control-row">
                  <span className="control-label">Public sharing</span>
                  <div className="toggle-off" />
                </div>
                <div className="control-row">
                  <span className="control-label">Daily time limit</span>
                  <span className="control-val">45 min</span>
                </div>
                <div className="control-row">
                  <span className="control-label">Stories this week</span>
                  <span className="control-val">6 created</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="inner">
          <span className="section-tag tag-purple">How it works</span>
          <h2 className="section-title">
            From idea to <em>epic</em> in three steps
          </h2>
          <p className="section-sub" style={{ margin: "14px auto 52px" }}>
            No writing skills needed. No blank page anxiety. Just pure
            imagination.
          </p>
          <div className="steps-row">
            <div className="step-card">
              <div className="step-num">01</div>
              <div
                className="step-icon-wrap"
                style={{ background: "rgba(245,166,35,0.15)" }}
              >
                &#10024;
              </div>
              <h3>Pick your world</h3>
              <p>
                Choose a genre, hero, setting, and the lesson you want the story
                to carry. Dragons? Space? A magical school? Anything goes.
              </p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="step-card">
              <div className="step-num">02</div>
              <div
                className="step-icon-wrap"
                style={{ background: "rgba(42,191,176,0.12)" }}
              >
                &#129668;
              </div>
              <h3>Mythic creates it</h3>
              <p>
                Our AI writes the story, generates illustrations, records a
                narration, and assembles everything into a beautiful book — in
                under a minute.
              </p>
              <div className="step-arrow">&rarr;</div>
            </div>
            <div className="step-card">
              <div className="step-num">03</div>
              <div
                className="step-icon-wrap"
                style={{ background: "var(--color-lilac)" }}
              >
                &#127881;
              </div>
              <h3>Share &amp; explore</h3>
              <p>
                Save it to your library, watch it as a movie, or share it with
                family. Friends can even jump in and remix the adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="inner">
          <span className="section-tag tag-rose">Families love Mythic</span>
          <h2 className="section-title">
            Stories that <em>matter</em>
          </h2>
          <p className="section-sub">
            Early families share what Mythic means to them.
          </p>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testi-text">
                &ldquo;My daughter has made 30 stories in two weeks. She asks for
                &lsquo;Mythic time&rsquo; every night before bed. I&apos;ve never seen her
                this excited about reading — and she made everything
                herself.&rdquo;
              </p>
              <div className="testi-author">
                <div className="testi-avatar av1">SR</div>
                <div>
                  <div className="testi-name">Sarah R.</div>
                  <div className="testi-role">Mom of two, Seattle</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testi-text">
                &ldquo;As a dad, the parental controls give me genuine peace of
                mind. I set the values I care about — kindness, honesty — and
                every story reflects them. It feels like a tool built for
                parents, not around them.&rdquo;
              </p>
              <div className="testi-author">
                <div className="testi-avatar av2">JM</div>
                <div>
                  <div className="testi-name">James M.</div>
                  <div className="testi-role">Dad of three, Austin</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testi-text">
                &ldquo;My son has autism and struggles with traditional reading.
                Mythic lets him tell stories about things he loves — trains,
                robots, weather. He&apos;s created 18 books. He calls himself
                &lsquo;a real author&rsquo; now.&rdquo;
              </p>
              <div className="testi-author">
                <div className="testi-avatar av3">LP</div>
                <div>
                  <div className="testi-name">Lisa P.</div>
                  <div className="testi-role">Mom, Portland</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / SIGNUP */}
      <section className="cta-section" id="signup">
        <div className="cta-glow cta-glow1" />
        <div className="cta-glow cta-glow2" />
        <span className="section-tag tag-amber">Early access</span>
        <h2 className="section-title">
          Your child&apos;s first <em>epic</em>
          <br />
          is waiting to be told
        </h2>
        <p className="cta-sub">
          Join the waitlist. Be first to create when Mythic launches.
        </p>
        <SignupForm />
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          Myth<span>ic</span>
        </div>
        <p>&copy; 2025 Mythic. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </ScrollReveal>
  );
}
