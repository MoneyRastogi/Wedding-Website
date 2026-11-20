import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CalendarDays, Clock, MapPin } from 'lucide-react';
import { weddingData as d } from '../data/weddingData';

const eventImages = ['/images/wedding-florals.jpg', '/images/sangeet-decor.jpg', '/images/reception-stage.jpg', '/images/royal-mandap.jpg', '/images/palace-hospitality.jpg'];

export default function Schedule() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!active) return undefined;
    const close = (event) => { if (event.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [active]);
  return (
    <section id="schedule" className="section-shell section-pad">
      <motion.div className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="gold-kicker">SCHEDULE OF EVENTS</p>
        <div className="heading-flower">♥</div>
        <h2>A celebration of tradition,<br /><em>love &amp; forever</em></h2>
      </motion.div>
      <div className="event-grid">
        {d.events.map((event, index) => (
          <motion.button
            key={event.title}
            className={`event-card ${event.tone}`}
            style={{ '--event-image': `url(${eventImages[index % eventImages.length]})` }}
            onClick={() => setActive(event)}
            whileHover={{ y: -7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * .07 }}
          >
            <span className="event-index">0{index + 1}</span>
            <span className="event-art"><i>{event.symbol}</i><b>❦</b></span>
            <span className="event-title">{event.title}</span>
            <span className="event-subtitle">{event.subtitle}</span>
            <span className="event-line" />
            <span className="event-date">{event.date}</span>
            <span className="event-open">VIEW INVITATION ↗</span>
          </motion.button>
        ))}
      </div>
      <p className="schedule-note">Five moments. A lifetime of memories. We cannot wait to celebrate with you.</p>
      <AnimatePresence>
        {active && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className={`lightbox-card ${active.tone}`} initial={{ scale: .85 }} animate={{ scale: 1 }} exit={{ scale: .9 }} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
              <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close event invitation"><X /></button>
              <span className="event-art large"><i>{active.symbol}</i><b>❦</b></span>
              <p className="gold-kicker">YOU ARE CORDIALLY INVITED</p>
              <h3>{active.title}</h3>
              <p className="event-subtitle">{active.subtitle}</p>
              <div className="lightbox-detail"><CalendarDays size={16} />{active.date}</div>
              <div className="lightbox-detail"><Clock size={16} />{active.time}</div>
              <div className="lightbox-detail"><MapPin size={16} />{active.venue}</div>
              <p className="lightbox-blessing">With love, {d.couple.groom} &amp; {d.couple.bride}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
