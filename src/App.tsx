import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  CircleHelp,
  AtSign,
  Mic,
  UserRound,
  Volume2,
  Waves,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Target,
  X,
  Youtube,
} from 'lucide-react';

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a9.8 9.8 0 0 0-8.47 14.74L2.1 21.9l5.3-1.39A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.15.83.84-3.06-.19-.31A8 8 0 1 1 12 20Zm4.42-5.93c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-1.39-.69-2.31-1.23-3.24-2.79-.24-.41.24-.38.69-1.26.08-.16.04-.29-.02-.41-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.41.06-.63.3-.22.24-.83.81-.83 1.98s.85 2.3.97 2.46c.12.16 1.67 2.55 4.05 3.58 1.51.65 2.1.71 2.85.6.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" /></svg>;
}

function TelegramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M21.7 3.2 2.9 10.45c-1.28.51-1.27 1.22-.23 1.54l4.83 1.5 1.86 5.74c.23.63.12.88.79.88.52 0 .75-.24 1.03-.52l2.5-2.43 5.2 3.84c.96.53 1.65.25 1.89-.89l3.4-15.99c.35-1.42-.54-2.06-1.47-1.7ZM8.24 13.15l10.92-6.9c.54-.33 1.03-.15.63.21l-8.83 7.98-.34 3.61-1.39-4.9Z" /></svg>;
}

const socials = [
  { label: 'WhatsApp Channel', href: 'https://whatsapp.com/channel/0029VbDhwCkBVJl3gWUlwg0Y', icon: WhatsAppIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/prepore.in?cplk=MWR3aDJsdmlnNHo1OQ==', icon: Instagram },
  { label: 'X', href: 'https://x.com/preporeofficial', icon: X },
  { label: 'Threads', href: 'https://www.threads.com/@prepore.in', icon: AtSign },
  { label: 'Telegram', href: 'https://t.me/Preporeofficial', icon: TelegramIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@Preporeofficial', icon: Youtube },
];

const faqs = [
  ['When is Prepore launching?', 'Prepore is still in development, so we are not announcing a launch date yet. Joining the early-access list is the best way to hear when the first version is ready.'],
  ['What kinds of interviews is Prepore for?', 'Prepore is being shaped for internship interviews, campus placements, entry-level and first-job interviews across fields and sectors. Role coverage is planned and will grow over time; it is not all available today.'],
  ['How is the practice experience intended to work?', 'Prepore is being developed to let you choose a role and interview type, practise through a live voice conversation with an AI interviewer, and receive useful feedback after each attempt. The voice experience is still planned, not live yet.'],
  ['Which languages are planned?', 'English and Hinglish support are planned, with the experience shaped around how students in India actually prepare and speak.'],
  ['Will Prepore be free?', 'Pricing is not finalised yet. We will share clear details before asking anyone to pay for access.'],
  ['How will my information be handled?', 'The free Google Form will collect only the details shown in the waitlist. Your email is intended for early-access and product updates, and you can ask us to remove it by emailing preporeofficial@gmail.com.'],
  ['Can Prepore guarantee a job or offer?', 'No. Prepore is intended to help you practise and reflect. It cannot guarantee an interview outcome, job, placement, or offer.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Prepore home" onClick={closeMenu}>
            <img src="/images/finalprepore.png" alt="Prepore" />
          </a>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#why" onClick={closeMenu}>Why practice</a>
            <a href="#how" onClick={closeMenu}>How it works</a>
            <a href="#planned" onClick={closeMenu}>Planned features</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav-cta" href="#waitlist" onClick={closeMenu}>Join early access <ArrowRight size={16} /></a>
          </nav>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-dot" /> Coming soon · Early access</div>
              <h1>Interview mein ghabrahat se <em>mauka</em> haath se nikal jaata hai.</h1>
              <p className="hero-lead">Prepore pe AI ke saath practice karo, confident bano.</p>
              <p className="hero-description">For students and freshers preparing for internships, placements, and their next opportunity across sectors. Prepore is being developed to support text-first practice today, with live voice practice with an AI interviewer planned for a later stage.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#waitlist">Join the early access list <ArrowRight size={18} /></a>
                <a className="text-link" href="#how">See how it’s planned to work <ArrowDown size={16} /></a>
              </div>
              <div className="hero-note"><Check size={15} /> Meaningful updates as we build.</div>
            </div>
            <div className="hero-visual reveal-up delay-one" aria-label="Concept preview of a planned voice practice session">
              <div className="visual-glow" />
              <div className="preview-window voice-preview">
                <div className="preview-topbar"><div className="window-dots"><span /><span /><span /></div><span className="preview-label">Concept preview — live voice practice is in development</span><span className="preview-menu">•••</span></div>
                <div className="preview-content">
                  <div className="voice-preview-head"><div><span className="mini-kicker">PLANNED VOICE PRACTICE · HR ROUND</span><h2>Tell me about yourself.</h2></div><span className="live-pill"><span /> Listening</span></div>
                  <div className="interviewer-row"><div className="interviewer-avatar"><UserRound size={20} /></div><div><strong>AI interviewer</strong><small>Ready when you are</small></div><Volume2 className="voice-volume" size={18} /></div>
                  <div className="waveform" aria-label="Subtle listening waveform"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
                  <div className="voice-controls"><button className="mic-button" aria-label="Microphone concept control"><Mic size={19} /></button><span>Tap to speak</span><span className="voice-timer">00:18</span></div>
                  <div className="transcript-card"><div className="transcript-label"><span>TRANSCRIPT PREVIEW</span><Waves size={14} /></div><p>“I’m a final-year student interested in solving practical problems...”</p></div>
                  <div className="feedback-heading"><span>After your answer</span><span className="feedback-score">Feedback planned <span>↗</span></span></div>
                  <div className="feedback-card compact-feedback"><div className="feedback-row"><span className="feedback-icon positive"><Check size={14} /></span><div><strong>Strength · Clear direction</strong><small>Your answer gets to the point.</small></div></div><div className="feedback-row"><span className="feedback-icon improve"><Target size={14} /></span><div><strong>Suggestion · Add one example</strong><small>Make your experience more memorable.</small></div></div></div>
                </div>
              </div>
              <div className="float-card float-card-top"><span className="float-check"><Check size={13} /></span><span>Voice practice planned</span></div>
              <div className="float-card float-card-bottom"><span className="float-spark"><Sparkles size={14} /></span><span>Useful feedback, next step</span></div>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Prepore focus areas"><div className="ticker-track"><span>For the next interview</span><i /> <span>For campus placements</span><i /> <span>For confident answers</span><i /> <span>For students in India</span><i /> <span>For the next interview</span><i /> <span>For campus placements</span></div></section>

        <section className="section-pad problem-section" id="why">
          <div className="container two-column align-center">
            <div className="section-intro"><span className="section-number">01 / WHY PRACTICE</span><h2>Reading about interviews is not the same as <span>answering one.</span></h2><p>When the moment comes, even prepared students can freeze, ramble, or wonder if their answer made sense. That doesn’t mean you aren’t capable. It means practice needs to feel closer to the real thing.</p></div>
            <div className="problem-list"><div className="problem-item"><span className="problem-mark">01</span><div><h3>Know the answer, lose the words</h3><p>Ideas can feel clearer in your head than they do when you write them down.</p></div></div><div className="problem-item"><span className="problem-mark">02</span><div><h3>Practise alone, get no useful signal</h3><p>It’s hard to improve when you don’t know what to change next.</p></div></div><div className="problem-item"><span className="problem-mark">03</span><div><h3>Build confidence one attempt at a time</h3><p>Small, specific improvements can make the next answer feel lighter.</p></div></div></div>
          </div>
        </section>

        <section className="section-pad how-section" id="how">
          <div className="container"><div className="section-heading centered"><span className="section-number">02 / HOW IT’S PLANNED</span><h2>A better way to prepare, <span>step by step.</span></h2><p>Simple practice for the moments that matter.</p></div><div className="steps-grid"><div className="step-card"><div className="step-top"><span>01</span><div className="step-icon"><Target size={20} /></div></div><h3>Choose your direction</h3><p>Pick a role and interview type that feels relevant to your next opportunity.</p></div><div className="step-card featured-step"><div className="step-top"><span>02</span><div className="step-icon"><MessageCircle size={20} /></div></div><h3>Practise with an AI interviewer</h3><p>Practise answers in text, at your own pace, without the pressure of an audience.</p></div><div className="step-card"><div className="step-top"><span>03</span><div className="step-icon"><Sparkles size={20} /></div></div><h3>Learn from the attempt</h3><p>See what worked, what to strengthen, and come back for another round.</p></div></div></div>
        </section>

        <section className="section-pad planned-section" id="planned"><div className="container"><div className="planned-header"><div><span className="section-number">03 / WHAT WE’RE BUILDING</span><h2>Designed for the <span>first opportunity.</span></h2></div><span className="planned-badge"><Sparkles size={15} /> Planned features</span></div><div className="feature-grid"><div className="feature-card large-feature"><span className="feature-index">01</span><h3>Role-based mock interviews</h3><p>Practise for growing role coverage across internships, placements, and first-job interviews. More roles are planned over time.</p><div className="role-pills"><span>Software developer</span><span>Business analyst</span><span>More roles planned</span></div></div><div className="feature-card"><span className="feature-index">02</span><h3>HR, technical & behavioural</h3><p>Prepare for HR, technical, and behavioural conversations across internships, placements, and entry-level opportunities.</p></div><div className="feature-card"><span className="feature-index">03</span><h3>English & Hinglish support</h3><p>Practise in the language that helps you express your thinking naturally.</p></div><div className="feature-card"><span className="feature-index">04</span><h3>Feedback that you can use</h3><p>Understand answer strengths, areas to improve, and your progress across attempts.</p></div></div></div></section>

        <section className="section-pad audience-section"><div className="container audience-grid"><div className="audience-copy"><span className="section-number">04 / WHO IT’S FOR</span><h2>For students preparing for their <span>next opportunity.</span></h2><p>Prepore is being shaped for students and freshers across India preparing for internship interviews, campus placements, entry-level and first-job interviews — across fields and sectors, including students at Tier-2 and Tier-3 colleges.</p><a className="text-link" href="#waitlist">Be part of the early group <ArrowRight size={16} /></a></div><div className="audience-art"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-note note-one"><span>Practice</span><b>→</b></div><div className="art-note note-two"><span>Reflect</span><b>→</b></div><div className="art-note note-three"><span>Improve</span><b>→</b></div><div className="art-center"><Sparkles size={28} /><span>your next<br /><b>answer</b></span></div></div></div></section>

        <section className="section-pad why-section"><div className="container why-grid"><div className="why-visual"><div className="quote-mark">“</div><p>Practice should feel approachable enough to come back to — and specific enough to make a difference.</p><span>Prepore’s product intention</span></div><div className="why-copy"><span className="section-number">05 / WHY PREPORE</span><h2>Built around the way <span>Indian freshers</span> prepare.</h2><div className="intention-list"><div><span>01</span><p><b>Relevant by design</b><br />Focused on internships, placements, and first-job interview moments.</p></div><div><span>02</span><p><b>Approachable practice</b><br />A low-pressure space to try, reflect, and try again.</p></div><div><span>03</span><p><b>Language that feels natural</b><br />English and Hinglish support are part of the plan.</p></div></div></div></div></section>

        <section className="section-pad waitlist-section" id="waitlist"><div className="container waitlist-card"><div className="waitlist-copy"><span className="section-number light-number">06 / EARLY ACCESS</span><h2>Be there when practice gets <span>more personal.</span></h2><p>Join the early-access list with your email. We’ll share meaningful updates as Prepore takes shape.</p></div><div className="form-wrap embedded-form-wrap"><div className="google-form-card"><div className="form-heading"><h3>Join the list</h3><span>Early access</span></div><div className="form-embed"><iframe title="Prepore early access waitlist" src="https://docs.google.com/forms/d/e/1FAIpQLSe2bCFq7qLqEw7ZQmQf-1ZCGZG5VyVVvJ5m7LqhOwMsn9CP4Q/viewform?embedded=true" loading="lazy" /></div><a className="form-fallback-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe2bCFq7qLqEw7ZQmQf-1ZCGZG5VyVVvJ5m7LqhOwMsn9CP4Q/viewform?usp=publish-editor" target="_blank" rel="noreferrer">Open the form in a new tab</a></div></div></div></section>

        <section className="section-pad faq-section" id="faq"><div className="container faq-grid"><div className="faq-intro"><span className="section-number">07 / QUESTIONS, ANSWERED</span><h2>Good to know, <span>before you join.</span></h2><p>We’re early, so we’ll always be clear about what’s planned and what’s ready.</p><div className="faq-icon"><CircleHelp size={26} /></div></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={activeFaq === index ? 'faq-item active' : 'faq-item'} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} aria-expanded={activeFaq === index}><span>{question}</span><ChevronDown size={19} /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="brand footer-logo" href="#top"><img src="/images/finalprepore.png" alt="Prepore" /></a><p>Practice for the moment<br />you’ve been preparing for.</p></div><div className="footer-links"><div><span>Explore</span><a href="#why">Why practice</a><a href="#how">How it works</a><a href="#planned">Planned features</a><a href="#faq">FAQ</a></div><div><span>Say hello</span><a href="mailto:preporeofficial@gmail.com"><Mail size={15} /> preporeofficial@gmail.com</a><div className="social-links">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} /></a>)}</div></div></div></div><div className="footer-bottom"><span>© 2026 Prepore. Built for better practice.</span><div><a href="#privacy">Privacy starter</a><a href="#terms">Terms starter</a></div></div><div className="footer-policies"><div id="privacy"><b>Privacy starter</b><p>Prepore currently collects only early-access details submitted through the waitlist. Email preporeofficial@gmail.com to request removal.</p></div><div id="terms"><b>Terms starter</b><p>Prepore is an early-stage practice product in development. It does not guarantee jobs, placements, interviews, or offers.</p></div></div></div></footer>
    </div>
  );
}

export default App;
