
import { motion } from 'framer-motion';
import {
  MapPin,
  Heart,
  Sparkles,
  Navigation,
  ArrowUpRight,
  Crown,
} from 'lucide-react';

import { weddingData as d } from '../data/weddingData';

export default function RsvpTravel() {
  return (
    <section id="rsvp" className="section-shell section-pad rsvp-section">

      {/* Background decoration */}
      <div className="rsvp-background" aria-hidden="true">
        <div className="rsvp-bg-circle rsvp-circle-one" />
        <div className="rsvp-bg-circle rsvp-circle-two" />
        <Sparkles className="rsvp-sparkle rsvp-sparkle-one" />
        <Sparkles className="rsvp-sparkle rsvp-sparkle-two" />
      </div>

      {/* RSVP Heading */}
      <motion.div
        className="section-heading rsvp-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="script-line">
          We would be delighted by your presence
        </p>

        <div className="rsvp-ornament">
          <span />
          <Crown size={19} />
          <span />
        </div>

        <p className="gold-kicker">KINDLY REPLY</p>

        <div className="rsvp-monogram">
          <span>{d.couple.monogram}</span>
          <div className="rsvp-monogram-ring" />
        </div>

        <h2>RSVP</h2>

        <p className="rsvp-intro">
          Your presence will make our celebration even more special.
          We look forward to celebrating this beautiful occasion with you.
        </p>
      </motion.div>

      {/* Celebration / Directions */}
      <motion.div
        className="rsvp-footer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="rsvp-footer-inner">

          <div className="footer-decoration">
            <MapPin size={25} strokeWidth={1.2} />
          </div>

          <p className="script-line">
            We can't wait to see you
          </p>

          <h3>Celebrate This New Chapter With Us.</h3>

          <p className="rsvp-footer-description">
            Join us as we begin a beautiful journey filled with
            love, laughter and lifelong memories.
          </p>

          <a
            className="rsvp-directions"
            href={d.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation size={17} />
            <span>GET DIRECTIONS</span>
            <ArrowUpRight size={16} />
          </a>

          <div className="rsvp-footer-bottom">
            <span />
            <Heart size={14} />
            <span />
          </div>

        </div>
      </motion.div>

      {/* All CSS in the same component */}
      <style>{`

        /* MAIN SECTION */

        .rsvp-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background:
            radial-gradient(
              ellipse at 50% 40%,
              rgba(214,185,133,.12),
              transparent 65%
            ),
            #fbf8f1;
          color: #493725;
        }

        .rsvp-background {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .rsvp-bg-circle {
          position: absolute;
          border: 1px solid rgba(177,139,77,.13);
          border-radius: 50%;
        }

        .rsvp-circle-one {
          width: 430px;
          height: 430px;
          top: -220px;
          right: -170px;
        }

        .rsvp-circle-two {
          width: 500px;
          height: 500px;
          bottom: -280px;
          left: -220px;
        }

        .rsvp-sparkle {
          position: absolute;
          color: #b18b4d;
          opacity: .35;
        }

        .rsvp-sparkle-one {
          top: 16%;
          left: 9%;
        }

        .rsvp-sparkle-two {
          bottom: 20%;
          right: 10%;
        }

        /* RSVP HEADING */

        .rsvp-heading {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto 55px;
          text-align: center;
        }

        .rsvp-ornament {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          color: #b18b4d;
          margin: 20px auto;
        }

        .rsvp-ornament span {
          width: 55px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #b18b4d,
            transparent
          );
        }

        .rsvp-monogram {
          position: relative;
          width: 90px;
          height: 90px;
          margin: 22px auto;
          border-radius: 50%;
          background: #f8f0e1;
          border: 1px solid #bd9a5b;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8c693c;
          font-family: Georgia, serif;
          font-size: 27px;
          letter-spacing: 2px;
        }

        .rsvp-monogram-ring {
          position: absolute;
          inset: 6px;
          border: 1px dashed rgba(177,139,77,.7);
          border-radius: 50%;
        }

        .rsvp-heading h2 {
          font-family: var(--font-heading, Georgia, serif);
          font-size: clamp(42px, 7vw, 62px);
          color: #4b3727;
          letter-spacing: .12em;
          margin: 12px 0;
        }

        .rsvp-intro {
          max-width: 520px;
          margin: 15px auto 0;
          color: #8c7860;
          font-size: 14px;
          line-height: 1.9;
        }

        /* CELEBRATION FOOTER */

        .rsvp-footer {
          position: relative;
          z-index: 1;
          max-width: 850px;
          margin: 0 auto;
          padding: 10px;
          background: rgba(255,253,248,.8);
          border: 1px solid rgba(189,154,91,.55);
          box-shadow: 0 15px 45px rgba(83,58,29,.07);
          text-align: center;
        }

        .rsvp-footer-inner {
          position: relative;
          padding: 45px 25px;
          border: 1px solid rgba(189,154,91,.22);
        }

        .footer-decoration {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border: 1px solid #bd9a5b;
          border-radius: 50%;
          background: #f8f0e1;
          color: #9b7847;
        }

        .rsvp-footer h3 {
          font-family: var(--font-heading, Georgia, serif);
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.3;
          font-weight: 500;
          color: #4b3727;
          margin: 12px 0;
        }

        .rsvp-footer-description {
          max-width: 480px;
          margin: 15px auto 25px;
          color: #8c7860;
          font-size: 13px;
          line-height: 1.9;
        }

        .rsvp-directions {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 49px;
          padding: 0 26px;
          background: #8c693c;
          color: #fff9eb;
          border: 1px solid #8c693c;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .2em;
          text-decoration: none;
          transition: all .3s ease;
        }

        .rsvp-directions:hover {
          background: #6d4e2d;
          border-color: #6d4e2d;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(83,58,29,.18);
        }

        .rsvp-footer-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          color: #bd9a5b;
          margin-top: 30px;
        }

        .rsvp-footer-bottom span {
          width: 45px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #bd9a5b,
            transparent
          );
        }

        /* TABLET */

        @media (max-width: 768px) {
          .rsvp-heading {
            margin-bottom: 40px;
          }

          .rsvp-footer {
            max-width: 650px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .rsvp-heading {
            padding: 0 10px;
            margin-bottom: 35px;
          }

          .rsvp-monogram {
            width: 78px;
            height: 78px;
            font-size: 23px;
          }

          .rsvp-intro {
            font-size: 13px;
          }

          .rsvp-footer {
            margin-top: 20px;
          }

          .rsvp-footer-inner {
            padding: 35px 17px;
          }

          .rsvp-footer-description {
            font-size: 12px;
          }

          .rsvp-directions {
            width: 100%;
            max-width: 260px;
            box-sizing: border-box;
            padding: 0 12px;
          }

          .rsvp-sparkle {
            opacity: .18;
          }
        }

        @media (max-width: 380px) {
          .rsvp-footer h3 {
            font-size: 25px;
          }

          .rsvp-footer-inner {
            padding: 30px 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rsvp-directions {
            transition: none;
          }
        }

      `}</style>

    </section>
  );
}
  