import { useEffect, useMemo, useState } from 'react';

const logo = '/assets/images/guru-munish-logo.png';
const whatsappLink = 'https://wa.me/918870221970?text=Hi%2C%20I%20would%20like%20to%20plan%20a%20Rameswaram%20trip.';
const images = {
  temple: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ramanathaswamy%20Temple%20Rameswaram.jpg?width=1400',
  pamban: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pamban%20Bridge.jpg?width=1400',
  dhanushkodi: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dhanushkodi%20Road.jpg?width=1400',
  arichal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Arichal%20Munai.jpg?width=1400',
  agni: 'https://commons.wikimedia.org/wiki/Special:FilePath/Agni%20Theertham%20Rameswaram.jpg?width=1200',
  kalam: 'https://commons.wikimedia.org/wiki/Special:FilePath/APJ%20Abdul%20Kalam%20Memorial.jpg?width=1200',
  kothandaramar: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kothandaramaswamy%20Temple.jpg?width=1200',
  ariyaman: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ariyaman%20Beach.jpg?width=1200',
};
const navItems = [['Home', 'home'], ['About', 'about'], ['Destinations', 'destinations'], ['Tours', 'tours'], ['Services', 'services'], ['Gallery', 'gallery'], ['Contact', 'contact']];
const destinations = [
  ['Ramanathaswamy Temple', 'Walk through the sacred corridors and experience one of India’s most revered pilgrimage landmarks.', images.temple, 'Ramanathaswamy Temple architecture'],
  ['Pamban Bridge', 'See the historic rail bridge and sweeping sea views where Rameswaram meets the mainland.', images.pamban, 'Pamban Bridge over the sea'],
  ['Dhanushkodi', 'Travel to the edge of the island through a stark, beautiful landscape shaped by the sea.', images.dhanushkodi, 'Road through Dhanushkodi'],
  ['Arichal Munai', 'Stand at the island’s dramatic meeting point of waters, wind and endless horizon.', images.arichal, 'Arichal Munai coastal landscape'],
  ['Agni Theertham', 'A peaceful seashore beside the temple, central to the traditional Rameswaram pilgrimage.', images.agni, 'Agni Theertham seashore'],
  ['APJ Abdul Kalam Memorial', 'Visit the memorial honouring India’s beloved former President and Rameswaram native.', images.kalam, 'APJ Abdul Kalam Memorial'],
  ['Kothandaramaswamy Temple', 'A quiet coastal temple surrounded by stories, sea breeze and island scenery.', images.kothandaramar, 'Kothandaramaswamy Temple'],
  ['Ariyaman Beach', 'Slow down beside calm waters and enjoy a quieter side of the Ramanathapuram coast.', images.ariyaman, 'Ariyaman Beach'],
];
const packages = [
  ['Rameswaram Temple Tour', 'Ramanathaswamy Temple and important nearby spiritual attractions.', 'fa-place-of-worship'],
  ['Rameswaram Local Sightseeing', 'Temple, Pamban, Agni Theertham and the island’s essential local highlights.', 'fa-map-location-dot'],
  ['Rameswaram - Dhanushkodi Tour', 'Dhanushkodi, Arichal Munai and the coastal road to the island’s far edge.', 'fa-water'],
  ['Complete Rameswaram Experience', 'A flexible full-day plan covering major attractions at your pace.', 'fa-route'],
];
const services = [
  ['fa-map-location-dot', 'Local Rameswaram Sightseeing'], ['fa-place-of-worship', 'Temple / Pilgrimage Trips'], ['fa-water', 'Dhanushkodi Trips'], ['fa-people-group', 'Family Tours'],
  ['fa-route', 'Customized Tours'], ['fa-car-side', 'Local Cab / Transportation'], ['fa-plane-arrival', 'Pickup & Drop'], ['fa-users', 'Group Travel'],
];
const gallery = [
  ['temple', images.temple, 'Ramanathaswamy Temple'], ['pamban', images.pamban, 'Pamban Bridge'], ['dhanushkodi', images.dhanushkodi, 'Dhanushkodi road'], ['beaches', images.ariyaman, 'Ariyaman Beach'],
  ['pilgrimage', images.agni, 'Agni Theertham'], ['local-travel', images.kalam, 'APJ Abdul Kalam Memorial'], ['temple', images.kothandaramar, 'Kothandaramaswamy Temple'], ['dhanushkodi', images.arichal, 'Arichal Munai'],
];

function Reveal({ children, className = '' }) { return <div className={`reveal ${className}`}>{children}</div>; }
function SectionHead({ eyebrow, title, children }) { return <div className="section-head center reveal"><span className="section-tag">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>; }
function Logo({ className = '' }) { return <img className={`brand-logo ${className}`} src={logo} alt="Guru Munish Tours & Travels logo" onError={(event) => { event.currentTarget.style.display = 'none'; }} />; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('all');
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  const filteredGallery = useMemo(() => filter === 'all' ? gallery : gallery.filter(([category]) => category === filter), [filter]);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}><div className="wrap nav-inner"><a href="#home" className="brand" onClick={closeMenu}><Logo /><span className="brand-fallback"><strong>Guru Munish</strong><small>Tours &amp; Travels</small></span></a><nav className="links">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="nav-actions"><a className="icon-btn" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp Us"><i className="fa-brands fa-whatsapp" /></a><a className="btn btn-gold nav-cta" href="#contact">Plan Your Trip</a><button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span /><span /><span /></button></div></div></header>
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}><Logo className="mobile-logo" />{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}<a className="btn btn-gold" href="#contact" onClick={closeMenu}>Plan Your Trip</a></div>
    <main>
      <section className="hero" id="home"><div className="wrap hero-wrap"><div className="hero-content"><span className="hero-eyebrow"><i className="fa-solid fa-location-dot" /> Rameswaram, Tamil Nadu</span><h1>Explore Rameswaram <span className="gold">With Guru Munish</span></h1><p className="hero-sub">Your Trusted Local Travel Partner in Rameswaram</p><p className="hero-copy">Comfortable local travel, soulful pilgrimage trips and thoughtful sightseeing across the island, coast and historic places of Rameswaram.</p><div className="hero-btns"><a href="#destinations" className="btn btn-gold">Explore Tours <i className="fa-solid fa-arrow-right" /></a><a href="#contact" className="btn btn-outline">Plan Your Trip</a></div><div className="hero-trust"><span><i className="fa-solid fa-shield-heart" /> Local knowledge</span><span><i className="fa-solid fa-car" /> Comfortable travel</span></div></div></div><div className="hero-scroll">Scroll to discover <span /></div></section>
      <section id="about"><div className="wrap about-grid"><Reveal className="about-visual"><img src={images.pamban} alt="Pamban Bridge and the sea near Rameswaram" /><div className="image-caption"><span>Local journeys</span><strong>Rameswaram, Tamil Nadu</strong></div></Reveal><Reveal className="about-content"><span className="section-tag">A local welcome</span><h2>Travel Rameswaram with <span className="accent-italic">people who know it.</span></h2><p>Guru Munish Tours &amp; Travels helps visitors experience Rameswaram with comfort, care and local insight. From temple visits and pilgrimage assistance to Dhanushkodi road trips and relaxed coastal sightseeing, we plan each journey around your time and your people.</p><div className="divider-line" /><div className="feature-list">{['Local Rameswaram knowledge', 'Comfortable travel', 'Reliable service', 'Family-friendly trips', 'Pilgrimage assistance', 'Customized sightseeing'].map((item) => <span key={item}><i className="fa-solid fa-check" /> {item}</span>)}</div></Reveal></div></section>
      <section className="dark-band"><div className="wrap"><SectionHead eyebrow="The island awaits" title="Discover Rameswaram">Sacred corridors, historic bridges, quiet shores and the road to Dhanushkodi, all in one remarkable destination.</SectionHead><div className="dest-grid" id="destinations">{destinations.map(([title, text, image, alt], index) => <Reveal className="dest-card" key={title}><img src={image} alt={alt} /><div className="dest-overlay"><span className="destination-number">{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p><a href="#contact" className="view-link">Explore <i className="fa-solid fa-arrow-right-long" /></a></div></Reveal>)}</div></div></section>
      <section id="tours"><div className="wrap"><SectionHead eyebrow="Thoughtfully planned" title="Rameswaram Tour Packages">Choose a starting point, then let us shape the day around your family, group or pilgrimage.</SectionHead><div className="package-grid">{packages.map(([title, text, icon]) => <Reveal className="package-card" key={title}><div className="package-icon"><i className={`fa-solid ${icon}`} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" className="text-link">Get Quote <i className="fa-solid fa-arrow-right" /></a></Reveal>)}</div></div></section>
      <section className="experience"><div className="wrap experience-inner"><Reveal><span className="section-tag">More than a visit</span><h2>Experience the Spiritual &amp; Coastal Beauty of <span className="accent-italic">Rameswaram</span></h2><p>Begin with the sacred energy of Ramanathaswamy Temple, follow the sea breeze across Pamban, and take the unforgettable road through Dhanushkodi to Arichal Munai.</p><a className="btn btn-gold" href="#contact">Plan a Local Experience</a></Reveal></div></section>
      <section className="services-bg" id="services"><div className="wrap"><SectionHead eyebrow="Travel made simple" title="Our Travel Services" /><div className="services-grid reveal">{services.map(([icon, label]) => <div className="service-item" key={label}><i className={`fa-solid ${icon}`} /><p>{label}</p></div>)}</div></div></section>
      <section className="why-section"><div className="wrap"><SectionHead eyebrow="Your journey, our responsibility" title="Why Travel With Guru Munish?" /><div className="why-grid">{[['fa-compass', 'Local Rameswaram Expertise'], ['fa-couch', 'Comfortable Travel'], ['fa-handshake', 'Reliable Service'], ['fa-sliders', 'Flexible Trip Planning'], ['fa-people-roof', 'Family-Friendly Experience'], ['fa-headset', 'Personalized Assistance']].map(([icon, title]) => <Reveal className="why-card" key={title}><i className={`fa-solid ${icon}`} /><h3>{title}</h3><p>Thoughtful local support from pickup to your return journey.</p></Reveal>)}</div></div></section>
      <section id="gallery"><div className="wrap"><SectionHead eyebrow="Island stories" title="Rameswaram Through Our Lens" /><div className="gallery-filters reveal">{['all', 'temple', 'beaches', 'pamban', 'dhanushkodi', 'pilgrimage', 'local-travel'].map((category) => <button key={category} className={`gfilter ${filter === category ? 'active' : ''}`} onClick={() => setFilter(category)}>{category === 'all' ? 'All' : category.replace('-', ' ')}</button>)}</div><div className="masonry reveal">{filteredGallery.map(([category, image, alt]) => <div className="g-item" key={image}><img src={image} alt={alt} /><span>{category.replace('-', ' ')}</span></div>)}</div></div></section>
      <section className="enquiry"><div className="wrap enquiry-inner"><Reveal><span className="section-tag">Ready when you are</span><h2>Planning Your Rameswaram Trip?</h2><p>Let Guru Munish Tours &amp; Travels help you plan a comfortable and memorable Rameswaram journey.</p><div className="cta-btns"><a href="#contact" className="btn btn-gold">Send Enquiry</a><a href="tel:+91XXXXXXXXXX" className="btn btn-outline"><i className="fa-solid fa-phone" /> Call Now</a><a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp"><i className="fa-brands fa-whatsapp" /> WhatsApp Us</a></div></Reveal></div></section>
      <section id="contact"><div className="wrap contact-grid">
        <Reveal>
          <span className="section-tag">Let's plan your day</span>
          <h2>Guru Munish Tours &amp; Travels</h2>
          <p className="contact-intro">Tell us what you want to see in Rameswaram. We will help you build a comfortable local plan.</p>
          <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }}>
            <div className="field"><label htmlFor="name">Name</label><input id="name" required placeholder="Your full name" /></div>
            <div className="field"><label htmlFor="phone">Phone Number</label><input id="phone" type="tel" required placeholder="Your phone number" /></div>
            <div className="field"><label htmlFor="date">Travel Date</label><input id="date" type="date" /></div>
            <div className="field"><label htmlFor="travellers">Travellers</label><input id="travellers" type="number" min="1" placeholder="Number of people" /></div>
            <div className="field full"><label htmlFor="message">What would you like to explore?</label><textarea id="message" placeholder="Temple, Dhanushkodi, Pamban or a customized plan..." /></div>
            <div className="submit-row"><button className="btn btn-gold" type="submit">Send Enquiry <i className="fa-solid fa-arrow-right" /></button></div>
            {submitted && <p className="form-msg show">Thank you. Your enquiry has been noted.</p>}
          </form>
        </Reveal>
        <Reveal className="contact-side">
          <div className="map-card"><div className="map-pin"><i className="fa-solid fa-location-dot" /></div><span>Based in</span><strong>Rameswaram, Tamil Nadu</strong><small>Serving local sightseeing, pilgrimage and coastal journeys.</small></div>
          <div className="contact-details">
            <div><i className="fa-solid fa-phone" /><span>Phone<br /><strong>[Add Phone Number]</strong></span></div>
            <div><i className="fa-brands fa-whatsapp" /><span>WhatsApp<br /><strong>[Add WhatsApp Number]</strong></span></div>
            <div><i className="fa-solid fa-envelope" /><span>Email<br /><strong>[Add Email]</strong></span></div>
            <div><i className="fa-solid fa-location-dot" /><span>Address<br /><strong>[Add Business Address]</strong></span></div>
          </div>
        </Reveal>
      </div></section>
    </main>
    <footer><div className="wrap footer-grid"><div className="footer-brand"><Logo /><p>A trusted local travel partner for discovering Rameswaram's temples, shores and timeless stories.</p><a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp" /> WhatsApp Us</a></div><div className="footer-col"><h4>Explore</h4><ul>{navItems.map(([label, id]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul></div><div className="footer-col"><h4>Rameswaram</h4><ul>{['Ramanathaswamy Temple', 'Pamban Bridge', 'Dhanushkodi', 'Arichal Munai', 'Agni Theertham'].map((item) => <li key={item}><a href="#destinations">{item}</a></li>)}</ul></div><div className="footer-col"><h4>Contact</h4><ul><li>Rameswaram, Tamil Nadu</li><li>[Add Phone Number]</li><li>[Add Email]</li><li>[Add Address]</li></ul></div></div><div className="footer-bottom">© 2026 Guru Munish Tours &amp; Travels. All Rights Reserved.</div></footer>
    <a href={whatsappLink} target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp"><i className="fa-brands fa-whatsapp" /></a>
  </>;
}

export default App;
