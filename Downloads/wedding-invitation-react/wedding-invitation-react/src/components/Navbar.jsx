import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [['Families', '#families'], ['Story', '#story'], ['Events', '#schedule'], ['RSVP', '#rsvp']];
  return (
    <motion.nav className="quick-nav" initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      {links.map(([name, href], index) => (
        <span className="nav-unit" key={href}>
          <a href={href}>{name}</a>
          {index < 3 && <b>✦</b>}
        </span>
      ))}
    </motion.nav>
  );
}
