
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Flower2,
  Crown,
  Star,
  Gem,
} from "lucide-react";

import { weddingData as d } from "../data/weddingData";

const familySides = [
  {
    key: "groom",
    role: "THE GROOM'S FAMILY",
    relation: "Beloved Son of",
    grandRelation: "Grandson of",
    description: "Surrounded by a lifetime of love and blessings",
  },
  {
    key: "bride",
    role: "THE BRIDE'S FAMILY",
    relation: "Beloved Daughter of",
    grandRelation: "Granddaughter of",
    description: "Surrounded by a lifetime of love and blessings",
  },
];

const particles = Array.from({ length: 38 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: `${(i % 11) * 0.65}s`,
  duration: `${4 + (i % 7)}s`,
  size: 2 + (i % 3),
}));

const petals = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 29 + 5) % 100}%`,
  delay: `${i * 1.1}s`,
  duration: `${12 + (i % 5) * 2}s`,
}));

function AnimatedWeddingBackground() {
  return (
    <div className="animated-wedding-bg" aria-hidden="true">
      <div className="bg-golden-glow glow-a" />
      <div className="bg-golden-glow glow-b" />
      <div className="bg-golden-glow glow-c" />

      <div className="bg-mandala mandala-a">
        <MandalaArtwork />
      </div>

      <div className="bg-mandala mandala-b">
        <MandalaArtwork />
      </div>

      <div className="bg-mandala mandala-c">
        <MandalaArtwork />
      </div>

      <div className="bg-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="bg-particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="bg-petals">
        {petals.map((p) => (
          <span
            key={p.id}
            className="bg-petal"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="bg-light-beam beam-one" />
      <div className="bg-light-beam beam-two" />

      <div className="bg-orbit orbit-one" />
      <div className="bg-orbit orbit-two" />
    </div>
  );
}

function MandalaArtwork() {
  return (
    <svg viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="185" />
      <circle cx="200" cy="200" r="160" />
      <circle cx="200" cy="200" r="130" />
      <circle cx="200" cy="200" r="100" />
      <circle cx="200" cy="200" r="65" />

      {Array.from({ length: 24 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 15} 200 200)`}>
          <path d="M200 15 C160 65 165 105 200 125 C235 105 240 65 200 15Z" />
          <path d="M200 75 C175 105 180 135 200 150 C220 135 225 105 200 75Z" />
          <circle cx="200" cy="12" r="3" />
        </g>
      ))}
    </svg>
  );
}

function SmallDivider() {
  return (
    <div className="family-gold-divider" aria-hidden="true">
      <span />
      <Sparkles size={16} />
      <span />
    </div>
  );
}

function CardMandala() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="family-mandala"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="74" />
      <circle cx="80" cy="80" r="63" />
      <circle cx="80" cy="80" r="48" />
      <circle cx="80" cy="80" r="31" />

      {Array.from({ length: 16 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 80 80)`}>
          <path d="M80 6 C65 23 65 40 80 49 C95 40 95 23 80 6Z" />
          <circle cx="80" cy="4" r="2" fill="currentColor" />
        </g>
      ))}

      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 80 80)`}>
          <path d="M80 39 C68 50 68 63 80 70 C92 63 92 50 80 39Z" />
        </g>
      ))}
    </svg>
  );
}

function FamilyCard({ side, index }) {
  const family = d.families?.[side.key];

  if (!family) return null;

  return (
    <motion.article
      className={`family-card family-card-${side.key}`}
      initial={{
        opacity: 0,
        x: index === 0 ? -90 : 90,
        y: 45,
        rotateY: index === 0 ? -9 : 9,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1.15,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -12,
        rotateX: 2,
        scale: 1.015,
        transition: { duration: 0.4 },
      }}
    >
      <div className="family-card-inner">
        <div className="family-card-glow" />
        <div className="family-light-sweep" />

        <span className="family-corner corner-tl" />
        <span className="family-corner corner-tr" />
        <span className="family-corner corner-bl" />
        <span className="family-corner corner-br" />

        <div className="family-top-decoration">
          <span />
          <Crown size={20} strokeWidth={1.2} />
          <span />
        </div>

        <motion.div
          className="family-emblem"
          initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.35 + index * 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="family-mandala-wrap"
            animate={{ rotate: 360 }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <CardMandala />
          </motion.div>

          <motion.div
            className="family-initial"
            animate={{
              boxShadow: [
                "0 0 10px rgba(185,145,76,.12)",
                "0 0 35px rgba(185,145,76,.42)",
                "0 0 10px rgba(185,145,76,.12)",
              ],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {family.name?.charAt(0) || ""}
          </motion.div>

          <motion.span
            className="family-emblem-star"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
        </motion.div>

        <motion.p
          className="family-role"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 + index * 0.2 }}
        >
          {side.role}
        </motion.p>

        <motion.h3
          className="family-name"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 + index * 0.2 }}
        >
          {family.name}
        </motion.h3>

        <p className="family-description">{side.description}</p>

        <SmallDivider />

        <motion.div
          className="family-details"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
        >
          <p className="family-label">{side.relation}</p>
          <p className="family-person">{family.parents}</p>
        </motion.div>

        <motion.div
          className="family-heart-divider"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span />
          <Heart size={18} strokeWidth={1.3} />
          <span />
        </motion.div>

        <motion.div
          className="family-details"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85 + index * 0.2 }}
        >
          <p className="family-label">{side.grandRelation}</p>
          <p className="family-person">{family.grandparents}</p>
        </motion.div>

        <div className="family-card-footer">
          <Flower2 size={17} />
          <span>WITH LOVE &amp; BLESSINGS</span>
          <Flower2 size={17} />
        </div>
      </div>
    </motion.article>
  );
}

function CoupleCrest() {
  return (
    <motion.div
      className="families-crest"
      initial={{ opacity: 0, scale: 0.4, rotate: -35 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.3,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="crest-glow"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="crest-orbit"
        animate={{ rotate: 360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span />
        <span />
        <span />
        <span />
      </motion.div>

      <div className="crest-border">
        <div className="crest-content">
          <span className="crest-top">TWO FAMILIES</span>
          <span className="crest-monogram">{d.couple.monogram}</span>
          <Heart size={15} className="crest-heart" />
          <span className="crest-bottom">ONE FOREVER</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Families() {
  return (
    <section id="families" className="section-shell section-pad families-section">
      <AnimatedWeddingBackground />

      <motion.header
        className="section-heading families-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="family-heading-icon"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={28} strokeWidth={1.1} />
        </motion.div>

        <p className="script-line">The people behind our happiness</p>

        <SmallDivider />

        <h2>Two Families, One Beautiful Beginning</h2>

        <span className="gold-kicker">
          UNITED BY LOVE · BLESSED BY TRADITIONS
        </span>

        <p className="families-intro">
          A beautiful celebration where two families come together,
          hearts unite and a new journey begins with love,
          laughter and endless blessings.
        </p>
      </motion.header>

      <div className="families-container">
        <motion.div
          className="family-connection"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.6 }}
        >
          <span />
          <Star size={15} />
          <span />
        </motion.div>

        <div className="families-cards">
          <FamilyCard side={familySides[0]} index={0} />

          <div className="family-mobile-crest">
            <CoupleCrest />
          </div>

          <FamilyCard side={familySides[1]} index={1} />
        </div>

        <div className="family-desktop-crest">
          <CoupleCrest />
        </div>
      </div>

      <motion.footer
        className="families-footer"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <SmallDivider />

        <p className="families-quote">
          Two hearts, two families,
          <span> one forever.</span>
        </p>

        <p className="families-blessing">
          WITH LOVE, RESPECT &amp; BLESSINGS
        </p>

        <motion.div
          className="footer-sparkle"
          animate={{
            rotate: 360,
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ✧
        </motion.div>
      </motion.footer>

      <style>{`
        .families-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          color: #4c332a;
          background: #fbf5e9;
        }

        /* BACKGROUND LAYER */

        .animated-wedding-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 50% 45%, rgba(210,170,105,.18), transparent 65%),
            linear-gradient(145deg, #fffaf1, #f8eedf 50%, #fffaf1);
        }

        .families-heading,
        .families-container,
        .families-footer {
          position: relative;
          z-index: 1;
        }

        .bg-golden-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: .25;
          background: #d5aa68;
          animation: glow-float 13s ease-in-out infinite alternate;
        }

        .glow-a {
          top: 3%;
          left: -12%;
        }

        .glow-b {
          top: 32%;
          right: -15%;
          background: #b98255;
          animation-delay: -5s;
        }

        .glow-c {
          bottom: -18%;
          left: 30%;
          background: #e3c58f;
          animation-delay: -8s;
        }

        @keyframes glow-float {
          0% { transform: translate3d(0,0,0) scale(.8); }
          50% { transform: translate3d(85px,55px,0) scale(1.2); }
          100% { transform: translate3d(-40px,-45px,0) scale(.95); }
        }

        /* MANDALA BACKGROUND */

        .bg-mandala {
          position: absolute;
          width: min(470px,75vw);
          aspect-ratio: 1;
          color: #ad8448;
          opacity: .075;
        }

        .bg-mandala svg {
          width: 100%;
          height: 100%;
          stroke: currentColor;
          stroke-width: 1;
        }

        .mandala-a {
          top: -155px;
          left: -140px;
          animation: mandala-rotate 100s linear infinite;
        }

        .mandala-b {
          right: -155px;
          bottom: -155px;
          width: min(520px,80vw);
          opacity: .065;
          animation: mandala-reverse 120s linear infinite;
        }

        .mandala-c {
          top: 38%;
          left: 50%;
          width: min(300px,55vw);
          opacity: .035;
          transform: translateX(-50%);
          animation: mandala-rotate 150s linear infinite;
        }

        @keyframes mandala-rotate {
          to { rotate: 360deg; }
        }

        @keyframes mandala-reverse {
          to { rotate: -360deg; }
        }

        /* PARTICLES */

        .bg-particles,
        .bg-petals {
          position: absolute;
          inset: 0;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: #bd985d;
          box-shadow: 0 0 10px rgba(189,152,93,.8);
          opacity: 0;
          animation: particle-twinkle 7s ease-in-out infinite;
        }

        @keyframes particle-twinkle {
          0%,100% {
            opacity: 0;
            transform: scale(.3);
          }
          50% {
            opacity: .8;
            transform: scale(1.8);
          }
        }

        /* FALLING PETALS */

        .bg-petal {
          position: absolute;
          top: -35px;
          width: 11px;
          height: 16px;
          border-radius: 80% 10% 80% 10%;
          background: linear-gradient(145deg,#e7c99a,#b78b57);
          opacity: 0;
          transform: rotate(35deg);
          box-shadow: 0 2px 8px rgba(155,111,59,.2);
          animation: petal-fall 16s linear infinite;
        }

        @keyframes petal-fall {
          0% {
            transform: translate3d(0,-5vh,0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: .65; }
          50% {
            transform: translate3d(55px,50vh,0) rotate(220deg);
            opacity: .65;
          }
          90% { opacity: .35; }
          100% {
            transform: translate3d(-35px,110vh,0) rotate(440deg);
            opacity: 0;
          }
        }

        /* MOVING LIGHT BEAMS */

        .bg-light-beam {
          position: absolute;
          top: -40%;
          left: -80%;
          width: 38%;
          height: 180%;
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.35),
            transparent
          );
          animation: background-shimmer 17s ease-in-out infinite;
        }

        .beam-two {
          width: 20%;
          opacity: .45;
          animation-delay: -8s;
          animation-duration: 22s;
        }

        @keyframes background-shimmer {
          0%,55% { left: -80%; }
          100% { left: 150%; }
        }

        .bg-orbit {
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(180,137,75,.12);
          border-radius: 50%;
          animation: orbit-float 18s ease-in-out infinite alternate;
        }

        .orbit-one {
          top: 20%;
          right: 8%;
        }

        .orbit-two {
          bottom: 10%;
          left: 5%;
          width: 180px;
          height: 180px;
          animation-delay: -7s;
        }

        @keyframes orbit-float {
          from { transform: translateY(-15px) rotate(0deg) scale(.9); }
          to { transform: translateY(20px) rotate(35deg) scale(1.08); }
        }

        /* HEADING */

        .families-heading {
          max-width: 760px;
          margin: 0 auto 65px;
          padding: 0 16px;
          text-align: center;
        }

        .family-heading-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 13px;
          color: #a67c43;
        }

        .families-heading .script-line {
          color: #a47b4a;
          font-size: clamp(17px,2vw,22px);
        }

        .family-gold-divider {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          margin: 20px auto;
          color: #ad8448;
        }

        .family-gold-divider span {
          width: 53px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ad8448,transparent);
        }

        .families-heading h2 {
          margin: 12px auto 16px;
          color: #63332e;
          font-family: var(--font-heading,Georgia,serif);
          font-size: clamp(32px,4.4vw,49px);
          font-weight: 500;
          line-height: 1.2;
        }

        .families-heading .gold-kicker {
          color: #a47b4a;
          font-size: 10px;
          letter-spacing: .25em;
        }

        .families-intro {
          max-width: 540px;
          margin: 20px auto 0;
          color: #88735f;
          font-size: 14px;
          line-height: 1.9;
        }

        /* CARD LAYOUT */

        .families-container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          perspective: 1400px;
        }

        .families-cards {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: clamp(25px,5vw,70px);
          align-items: stretch;
        }

        .family-card {
          position: relative;
          min-width: 0;
          padding: 9px;
          overflow: hidden;
          border: 1px solid rgba(174,135,75,.65);
          background: linear-gradient(145deg,#fffdf9,#f9f0e3);
          box-shadow: 0 18px 55px rgba(75,47,30,.10);
          transform-style: preserve-3d;
          transition: box-shadow .6s ease, border-color .6s ease;
        }

        .family-card:hover {
          border-color: #bd985d;
          box-shadow: 0 30px 75px rgba(75,47,30,.18);
        }

        .family-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            125deg,
            transparent 10%,
            rgba(191,151,88,.8) 30%,
            transparent 50%,
            rgba(255,255,255,.9) 70%,
            transparent 90%
          );
          background-size: 250% 250%;
          animation: card-border-shine 9s linear infinite;
          pointer-events: none;
          opacity: .65;
        }

        @keyframes card-border-shine {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 200%; }
        }

        .family-card-inner {
          position: relative;
          box-sizing: border-box;
          min-height: 555px;
          height: 100%;
          padding: 34px 25px 27px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
          border: 1px solid rgba(174,135,75,.35);
          background:
            radial-gradient(circle at 50% 20%,rgba(255,255,255,.9),transparent 55%),
            linear-gradient(145deg,rgba(255,255,255,.4),rgba(247,235,215,.45));
        }

        .family-card-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          transform: translateX(-50%);
          background: rgba(218,184,127,.13);
          filter: blur(50px);
          pointer-events: none;
          animation: card-glow 6s ease-in-out infinite alternate;
        }

        @keyframes card-glow {
          from { opacity: .35; transform: translateX(-50%) scale(.8); }
          to { opacity: .9; transform: translateX(-50%) scale(1.2); }
        }

        .family-light-sweep {
          position: absolute;
          z-index: 2;
          top: -100%;
          left: -85%;
          width: 45%;
          height: 300%;
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.75),
            transparent
          );
          animation: family-light 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes family-light {
          0%,55% { left: -85%; }
          85%,100% { left: 150%; }
        }

        /* ORNAMENTAL CORNERS */

        .family-corner {
          position: absolute;
          z-index: 3;
          width: 32px;
          height: 32px;
          border-color: #ae874b;
          border-style: solid;
          opacity: .85;
          transition: width .5s ease, height .5s ease, opacity .5s ease;
        }

        .family-card:hover .family-corner {
          width: 43px;
          height: 43px;
          opacity: 1;
        }

        .corner-tl {
          top: 10px;
          left: 10px;
          border-width: 1px 0 0 1px;
        }

        .corner-tr {
          top: 10px;
          right: 10px;
          border-width: 1px 1px 0 0;
        }

        .corner-bl {
          bottom: 10px;
          left: 10px;
          border-width: 0 0 1px 1px;
        }

        .corner-br {
          bottom: 10px;
          right: 10px;
          border-width: 0 1px 1px 0;
        }

        .family-top-decoration {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #a98249;
        }

        .family-top-decoration span {
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#a98249,transparent);
        }

        /* FAMILY EMBLEM */

        .family-emblem {
          position: relative;
          z-index: 1;
          width: 150px;
          height: 150px;
          margin: 24px auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b18b4d;
        }

        .family-mandala-wrap {
          position: absolute;
          inset: 0;
        }

        .family-mandala {
          width: 100%;
          height: 100%;
          stroke: currentColor;
          stroke-width: .8;
          opacity: .9;
        }

        .family-initial {
          position: relative;
          width: 82px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #b18b4d;
          background: radial-gradient(circle at 30% 25%,#fffaf0,#f1dfbf);
          color: #753d37;
          font-family: Georgia,serif;
          font-size: 48px;
          box-shadow: 0 0 25px rgba(185,145,76,.25);
        }

        .family-emblem-star {
          position: absolute;
          right: 12px;
          bottom: 3px;
          font-size: 20px;
          color: #a98249;
        }

        .family-role {
          position: relative;
          z-index: 1;
          margin: 9px 0 11px;
          color: #a17a45;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .3em;
        }

        .family-name {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #60332e;
          font-family: var(--font-heading,Georgia,serif);
          font-size: clamp(27px,3vw,38px);
          font-weight: 500;
          line-height: 1.25;
          overflow-wrap: anywhere;
        }

        .family-description {
          position: relative;
          z-index: 1;
          margin: 10px 0 0;
          color: #947e68;
          font-size: 12px;
          font-style: italic;
          line-height: 1.7;
        }

        .family-details {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 4px 0;
        }

        .family-label {
          margin: 0 0 9px;
          color: #a98249;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .family-person {
          margin: 0 auto;
          color: #604832;
          font-family: Georgia,serif;
          font-size: clamp(16px,1.8vw,20px);
          line-height: 1.65;
          overflow-wrap: anywhere;
        }

        .family-heart-divider {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 20px 0;
          color: #ae874b;
        }

        .family-heart-divider span {
          width: 55px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ae874b,transparent);
        }

        .family-heart-divider svg {
          fill: rgba(174,135,75,.15);
        }

        .family-card-footer {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 27px;
          color: #a98249;
        }

        .family-card-footer span {
          font-size: 8px;
          letter-spacing: .2em;
        }

        /* CENTRAL CREST */

        .family-connection {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transform: translate(-50%,-50%);
          color: #ae874b;
        }

        .family-connection span {
          width: 25px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ae874b);
        }

        .family-connection span:last-child {
          transform: rotate(180deg);
        }

        .family-desktop-crest {
          position: absolute;
          z-index: 4;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        .family-mobile-crest {
          display: none;
        }

        .families-crest {
          position: relative;
          width: 132px;
          height: 132px;
          padding: 6px;
          box-sizing: border-box;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 25%,#955d50,#713b35 70%);
          border: 4px solid #fff8ed;
          outline: 1px solid #ae874b;
          box-shadow: 0 12px 35px rgba(65,39,26,.25);
        }

        .crest-glow {
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          border: 1px solid rgba(174,135,75,.65);
          pointer-events: none;
        }

        .crest-orbit {
          position: absolute;
          inset: -9px;
          border: 1px dashed rgba(174,135,75,.7);
          border-radius: 50%;
          pointer-events: none;
        }

        .crest-orbit span {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c49a5d;
        }

        .crest-orbit span:nth-child(1) {
          top: 50%;
          left: -3px;
        }

        .crest-orbit span:nth-child(2) {
          top: 50%;
          right: -3px;
        }

        .crest-orbit span:nth-child(3) {
          top: -3px;
          left: 50%;
        }

        .crest-orbit span:nth-child(4) {
          bottom: -3px;
          left: 50%;
        }

        .crest-border {
          width: 100%;
          height: 100%;
          padding: 6px;
          box-sizing: border-box;
          border: 1px solid rgba(255,237,205,.7);
          border-radius: 50%;
        }

        .crest-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px dashed rgba(255,237,205,.4);
          border-radius: 50%;
          color: #fff1d9;
        }

        .crest-top,
        .crest-bottom {
          font-size: 7px;
          letter-spacing: .2em;
        }

        .crest-monogram {
          margin: 4px 0 1px;
          font-family: Georgia,serif;
          font-size: 25px;
          letter-spacing: .06em;
        }

        .crest-heart {
          margin-bottom: 3px;
          color: #f5d8ae;
          fill: #f5d8ae;
        }

        /* FOOTER */

        .families-footer {
          margin: 55px auto 0;
          padding: 0 15px;
          text-align: center;
        }

        .families-quote {
          margin: 0;
          color: #76563b;
          font-family: Georgia,serif;
          font-size: clamp(23px,3vw,33px);
          font-style: italic;
          line-height: 1.5;
        }

        .families-quote span {
          color: #8b4540;
        }

        .families-blessing {
          margin-top: 15px;
          color: #a17a45;
          font-size: 9px;
          letter-spacing: .28em;
        }

        .footer-sparkle {
          margin-top: 20px;
          color: #ae874b;
          font-size: 25px;
        }

        /* TABLET */

        @media (max-width: 900px) and (min-width: 641px) {
          .families-cards {
            gap: 28px;
          }

          .family-card-inner {
            padding-left: 18px;
            padding-right: 18px;
          }

          .family-connection {
            display: none;
          }

          .families-crest {
            width: 108px;
            height: 108px;
          }

          .crest-monogram {
            font-size: 21px;
          }
        }

        /* MOBILE */

        @media (max-width: 640px) {
          .families-heading {
            margin-bottom: 40px;
          }

          .families-heading h2 {
            font-size: clamp(29px,8vw,37px);
          }

          .families-intro {
            font-size: 13px;
          }

          .families-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            padding: 0 5px;
          }

          .family-card {
            width: 100%;
            max-width: 440px;
            box-sizing: border-box;
          }

          .family-card-inner {
            min-height: 0;
            padding: 29px 20px 25px;
          }

          .family-emblem {
            width: 130px;
            height: 130px;
            margin-top: 19px;
          }

          .family-initial {
            width: 70px;
            height: 70px;
            font-size: 42px;
          }

          .family-name {
            font-size: clamp(28px,8vw,35px);
          }

          .family-person {
            font-size: 17px;
          }

          .family-desktop-crest,
          .family-connection {
            display: none;
          }

          .family-mobile-crest {
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 4;
            margin: -2px 0;
          }

          .families-crest {
            width: 112px;
            height: 112px;
          }

          .families-footer {
            margin-top: 40px;
          }

          .families-quote {
            font-size: 23px;
          }

          .bg-golden-glow {
            width: 300px;
            height: 300px;
            filter: blur(60px);
            opacity: .18;
          }

          .bg-mandala {
            opacity: .055;
          }

          .bg-petal {
            width: 8px;
            height: 12px;
          }

          .bg-light-beam {
            opacity: .5;
          }

          .family-card:hover {
            transform: none;
          }
        }

        @media (max-width: 380px) {
          .family-card-inner {
            padding: 26px 14px 22px;
          }

          .family-name {
            font-size: 27px;
          }

          .family-person {
            font-size: 15px;
          }

          .family-label {
            font-size: 9px;
            letter-spacing: .14em;
          }

          .families-heading h2 {
            font-size: 28px;
          }

          .families-blessing {
            font-size: 8px;
            letter-spacing: .18em;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .bg-golden-glow,
          .bg-mandala,
          .bg-particle,
          .bg-petal,
          .bg-light-beam,
          .bg-orbit,
          .family-light-sweep,
          .family-card::before {
            animation: none !important;
          }

          .bg-particle {
            opacity: .25;
          }

          .family-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
