
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ArrowDown } from "lucide-react";
import { weddingData as d } from "../data/weddingData";

function GaneshIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="ganesh-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Lord Ganesha"
    >
      {/* Crown */}
      <path d="M35 29 L38 13 L50 21 L62 13 L65 29" />
      <path d="M38 29 Q50 35 62 29" />
      <path d="M43 19 L50 12 L57 19" />
      <circle cx="50" cy="12" r="2" />

      {/* Ears */}
      <path d="M37 36 C24 26 12 34 17 49 C20 58 29 57 38 48" />
      <path d="M63 36 C76 26 88 34 83 49 C80 58 71 57 62 48" />

      {/* Face */}
      <path d="M36 31 Q50 25 64 31 L65 48 Q64 63 50 68 Q36 63 35 48 Z" />

      {/* Eyes */}
      <path d="M40 43 Q44 40 48 43" />
      <path d="M52 43 Q56 40 60 43" />

      {/* Forehead mark */}
      <path d="M46 35 Q50 32 54 35" />

      {/* Trunk */}
      <path d="M48 48 C48 57 57 57 58 64 C60 72 51 78 43 72" />
      <path d="M43 72 Q39 68 42 65" />

      {/* Tusks */}
      <path d="M38 51 L32 58" />
      <path d="M62 51 L68 58" />

      {/* Body */}
      <path d="M36 68 Q24 74 27 88 Q50 98 73 88 Q76 74 64 68" />
      <path d="M40 73 Q50 82 60 73" />
      <path d="M50 80 L50 92" />

      {/* Arms */}
      <path d="M29 77 L19 72" />
      <path d="M71 77 L81 72" />

      {/* Decorative details */}
      <circle cx="50" cy="27" r="2" />
      <path d="M22 91 L28 94 M78 91 L72 94" />
    </svg>
  );
}

export default function EnvelopeIntro({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const open = () => {
    if (opening) return;

    setOpening(true);

    window.setTimeout(() => {
      onOpen?.();
    }, 1900);
  };

  return (
    <motion.section
      className="royal-envelope-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
        transition: { duration: 0.9 },
      }}
    >
      <div className="envelope-bg" />
      <div className="envelope-bg-overlay" />

      <div className="envelope-glow envelope-glow-one" />
      <div className="envelope-glow envelope-glow-two" />

      {/* Floating golden particles */}
      <div className="envelope-particles">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} style={{ "--particle": i }} />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="corner-ornament top-left">✧</div>
      <div className="corner-ornament top-right">✧</div>
      <div className="corner-ornament bottom-left">✧</div>
      <div className="corner-ornament bottom-right">✧</div>

      <motion.div
        className="royal-envelope-container"
        initial={{ opacity: 0, y: 35, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Header */}
        <div className="envelope-heading">
          <div className="heading-ganesh">
            <GaneshIcon />
          </div>

          <p className="heading-blessing">
            ॥ SHREE GANESHAYA NAMAH ॥
          </p>

          <div className="heading-decoration">
            <span />
            <Sparkles size={15} />
            <span />
          </div>

          <p className="heading-location">
            A ROYAL WEDDING INVITATION
          </p>
        </div>

        {/* Envelope */}
        <div className="envelope-scene">
          <div className="envelope-perspective">
            <motion.div
              className="royal-envelope"
              animate={
                opening
                  ? { y: 35, scale: 0.97 }
                  : { y: [0, -5, 0], scale: 1 }
              }
              transition={
                opening
                  ? { duration: 0.8, ease: "easeInOut" }
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
            >
              <div className="envelope-shadow" />

              {/* Envelope back */}
              <div className="envelope-back" />

              {/* Invitation letter */}
              <motion.div
                className="royal-letter"
                initial={false}
                animate={
                  opening
                    ? {
                        y: -205,
                        scale: 1.02,
                        opacity: 1,
                      }
                    : {
                        y: 0,
                        scale: 0.96,
                        opacity: 0.96,
                      }
                }
                transition={{
                  duration: 1.15,
                  delay: opening ? 0.45 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="letter-border">
                  <div className="letter-inner">
                    <div className="royal-divider">
                      <span />
                      <b>✧</b>
                      <span />
                    </div>

                    <p className="letter-small">
                      WITH THE BLESSINGS OF OUR FAMILIES
                    </p>

                    <div className="letter-line" />

                    <p className="letter-invite">
                      JOYFULLY INVITE YOU TO CELEBRATE
                    </p>

                    <h2>
                      {d.couple.groom}
                      <span>&</span>
                      {d.couple.bride}
                    </h2>

                    <div className="letter-heart">
                      <span />
                      <Heart size={13} fill="currentColor" />
                      <span />
                    </div>

                    <p className="letter-date">
                      {d.date.envelope}
                    </p>

                    <p className="letter-place">
                      Dausa · RAJASTHAN
                    </p>

                    <div className="royal-bottom-ornament">
                      ◇
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Envelope front */}
              <div className="envelope-front">
                <div className="front-left-fold" />
                <div className="front-right-fold" />
                <div className="front-bottom-fold" />

                <div className="front-border" />

                <div className="envelope-front-content">
                  <div className="front-floral">✧</div>

                  <p className="front-kicker">
                    THE BEGINNING OF FOREVER
                  </p>

                  <p className="front-title">
                    WEDDING INVITATION
                  </p>

                  <h1>
                    {d.couple.groom}
                    <span>&</span>
                    {d.couple.bride}
                  </h1>

                  <div className="front-divider">
                    <span />
                    <Sparkles size={14} />
                    <span />
                  </div>

                  <p className="front-date">
                    {d.date.envelope}
                  </p>

                  <p className="front-venue">
                    {d.location.venue}
                  </p>
                </div>
              </div>

              {/* Opening flap */}
              <motion.div
                className="envelope-flap"
                animate={
                  opening
                    ? { rotateX: -180 }
                    : { rotateX: 0 }
                }
                transition={{
                  duration: 0.95,
                  delay: opening ? 0.12 : 0,
                  ease: [0.6, 0, 0.3, 1],
                }}
              >
                <div className="flap-inner">
                  <div className="flap-ornament">◇</div>
                </div>
              </motion.div>

              {/* Golden wax seal with the couple's initials */}
              <AnimatePresence>
                {!opening && (
                  <motion.button
                    type="button"
                    className="royal-wax-seal"
                    onClick={open}
                    aria-label={`Open ${d.couple.groom} and ${d.couple.bride}'s wedding invitation`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{
                      scale: 1.5,
                      opacity: 0,
                      rotate: 25,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "backOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                    }}
                    whileTap={{ scale: 0.88 }}
                  >
                    <span className="wax-outer-ring">
                      <span className="wax-monogram">Press here</span>
                      <span className="wax-small-detail">✧</span>
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Gold flecks */}
              <div className="envelope-gold-flecks">
                {Array.from({ length: 12 }).map((_, i) => (
                  <i key={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Instruction */}
        <motion.div
          className="envelope-instruction"
          animate={
            opening
              ? { opacity: 0, y: 10 }
              : { opacity: 1, y: 0 }
          }
        >
          <motion.div
            className="instruction-icon"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={15} />
          </motion.div>

          <p>
            {opening
              ? "PREPARING YOUR INVITATION"
              : "TOUCH THE GOLDEN SEAL TO OPEN"}
          </p>
        </motion.div>

        <div className="envelope-footer">
          <span>{d.date.hero}</span>
          <i>✧</i>
          <span>WITH LOVE, WE INVITE YOU</span>
        </div>
      </motion.div>

      {/* Opening light */}
      <AnimatePresence>
        {opening && (
          <motion.div
            className="envelope-opening-light"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{
              opacity: [0, 0.7, 1, 0],
              scale: [0.2, 1.1, 2.5, 4],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        .royal-envelope-screen {
          --env-gold: #d9ad66;
          --env-light: #f8e6c1;
          --env-cream: #fff4dc;
          position: fixed;
          inset: 0;
          z-index: 9999;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 25px 18px;
          color: var(--env-cream);
          background: #24110f;
          isolation: isolate;
        }

        .envelope-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          background:
            radial-gradient(ellipse at 50% 35%, rgba(135, 74, 43, 0.55), transparent 55%),
            linear-gradient(135deg, #160b0d, #45201c 48%, #170c0c);
        }

        .envelope-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background: radial-gradient(ellipse at center, transparent 20%, rgba(8, 4, 5, 0.6) 100%);
        }

        .envelope-glow {
          position: absolute;
          z-index: -1;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: rgba(221, 166, 91, 0.15);
          filter: blur(100px);
          pointer-events: none;
        }

        .envelope-glow-one {
          top: -170px;
          left: -100px;
        }

        .envelope-glow-two {
          right: -140px;
          bottom: -180px;
        }

        .envelope-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .envelope-particles span {
          position: absolute;
          left: calc(var(--particle) * 4.2% + 2%);
          bottom: -12px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #f9d18c;
          box-shadow: 0 0 12px 3px rgba(243, 185, 94, 0.55);
          opacity: 0;
          animation: envelopeParticle calc(7s + var(--particle) * 0.28s) linear infinite;
          animation-delay: calc(var(--particle) * -0.65s);
        }

        @keyframes envelopeParticle {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1.3); opacity: 0; }
        }

        .corner-ornament {
          position: absolute;
          color: rgba(219, 176, 109, 0.55);
          font-size: 55px;
          line-height: 1;
          pointer-events: none;
        }

        .top-left { top: 20px; left: 25px; }
        .top-right { top: 20px; right: 25px; }
        .bottom-left { bottom: 20px; left: 25px; }
        .bottom-right { bottom: 20px; right: 25px; }

        .royal-envelope-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 660px;
          text-align: center;
        }

        .envelope-heading {
          margin-bottom: 27px;
        }

        .heading-ganesh {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          color: #e6bd7b;
          filter: drop-shadow(0 0 12px rgba(225, 172, 97, 0.4));
        }

        .ganesh-icon {
          width: 65px;
          height: 65px;
        }

        .heading-blessing {
          font-family: Georgia, serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: #f3d9ac;
          margin: 0;
        }

        .heading-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--env-gold);
          margin: 17px auto;
        }

        .heading-decoration span {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--env-gold));
        }

        .heading-decoration span:last-child {
          transform: rotate(180deg);
        }

        .heading-location {
          font-size: 9px;
          letter-spacing: 4px;
          color: #e7c99b;
          margin: 0;
        }

        .envelope-scene {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          perspective: 1400px;
        }

        .envelope-perspective {
          width: min(100%, 440px);
          perspective: 1400px;
        }

        .royal-envelope {
          position: relative;
          width: 100%;
          aspect-ratio: 1.55 / 1;
          transform-style: preserve-3d;
          isolation: isolate;
        }

        .envelope-shadow {
          position: absolute;
          inset: 12% 5% -12%;
          border-radius: 12px;
          background: #080405;
          filter: blur(25px);
          opacity: 0.7;
          z-index: -2;
        }

        .envelope-back {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(145deg, #8e5937, #5a3028 60%, #3b1d1c);
          border: 1px solid #d8ad69;
          border-radius: 7px;
          box-shadow: inset 0 0 25px rgba(20, 8, 7, 0.35);
        }

        .royal-letter {
          position: absolute;
          z-index: 2;
          left: 9%;
          top: 5%;
          width: 82%;
          height: 90%;
          padding: 9px;
          background: #f8edda;
          color: #593a25;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
          transform-origin: bottom center;
        }

        .letter-border {
          width: 100%;
          height: 100%;
          border: 1px solid #c9a46a;
          padding: 5px;
        }

        .letter-inner {
          height: 100%;
          border: 1px solid rgba(190, 147, 84, 0.55);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        .royal-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #ad7b3f;
          margin-bottom: 9px;
        }

        .royal-divider span,
        .letter-heart span,
        .front-divider span {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b98a4c);
        }

        .royal-divider span:last-child,
        .letter-heart span:last-child,
        .front-divider span:last-child {
          transform: rotate(180deg);
        }

        .royal-divider b {
          font-size: 22px;
          font-weight: 400;
        }

        .letter-small {
          font-size: 7px;
          letter-spacing: 1.5px;
          margin: 0 0 8px;
        }

        .letter-line {
          width: 65%;
          height: 1px;
          background: #c7a46e;
          margin: 5px 0 10px;
        }

        .letter-invite {
          font-size: 7px;
          letter-spacing: 1px;
          margin: 0;
        }

        .letter-inner h2 {
          font-family: Georgia, serif;
          font-size: clamp(18px, 4vw, 27px);
          font-weight: 400;
          margin: 10px 0;
          line-height: 1.15;
        }

        .letter-inner h2 span {
          display: block;
          font-size: 15px;
          color: #ae814b;
          font-style: italic;
          margin: 3px 0;
        }

        .letter-heart {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a96d50;
          margin: 4px 0 8px;
        }

        .letter-heart span { width: 24px; }

        .letter-date {
          font-family: Georgia, serif;
          font-size: 12px;
          margin: 0 0 6px;
        }

        .letter-place {
          font-size: 7px;
          letter-spacing: 2px;
          margin: 0;
        }

        .royal-bottom-ornament {
          color: #b98a4c;
          font-size: 22px;
          margin-top: 8px;
        }

        .envelope-front {
          position: absolute;
          inset: 0;
          z-index: 4;
          overflow: hidden;
          border-radius: 7px;
          background: linear-gradient(145deg, #824d35, #613128 55%, #482321);
          border: 1px solid rgba(236, 196, 126, 0.8);
          box-shadow: inset 0 0 30px rgba(24, 9, 8, 0.35);
        }

        .front-left-fold,
        .front-right-fold,
        .front-bottom-fold {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .front-left-fold {
          background: linear-gradient(135deg, rgba(207, 156, 91, 0.28), transparent 50%);
          clip-path: polygon(0 0, 52% 51%, 0 100%);
        }

        .front-right-fold {
          background: linear-gradient(225deg, rgba(32, 10, 9, 0.28), transparent 50%);
          clip-path: polygon(100% 0, 48% 51%, 100% 100%);
        }

        .front-bottom-fold {
          background: linear-gradient(0deg, #4b2522, #81503a);
          clip-path: polygon(0 100%, 50% 43%, 100% 100%);
        }

        .front-border {
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(236, 195, 125, 0.55);
          pointer-events: none;
        }

        .envelope-front-content {
          position: absolute;
          z-index: 5;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }

        .front-floral {
          font-size: 34px;
          line-height: 1;
          color: #e4bd7b;
          margin-bottom: 9px;
          text-shadow: 0 0 15px rgba(255, 215, 151, 0.35);
        }

        .front-kicker {
          font-size: 8px;
          letter-spacing: 2px;
          color: #f0d7ad;
          margin: 0 0 7px;
        }

        .front-title {
          font-size: 9px;
          letter-spacing: 3px;
          color: #f3d6a6;
          margin: 0 0 10px;
        }

        .envelope-front-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(24px, 5vw, 37px);
          font-weight: 400;
          line-height: 1.15;
          color: #ffdfaa;
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
          margin: 0;
        }

        .envelope-front-content h1 span {
          display: block;
          font-size: 17px;
          font-style: italic;
          color: #e5c18c;
          margin: 3px 0;
        }

        .front-divider {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #edcc91;
          margin: 11px 0;
        }

        .front-divider span {
          width: 28px;
          background: #d4ad72;
        }

        .front-date {
          color: #f5dfba;
          font-family: Georgia, serif;
          font-size: 12px;
          margin: 0 0 6px;
        }

        .front-venue {
          font-size: 8px;
          letter-spacing: 1px;
          color: #e9cba0;
          margin: 0;
        }

        .envelope-flap {
          position: absolute;
          z-index: 7;
          top: 0;
          left: 0;
          width: 100%;
          height: 58%;
          transform-origin: top center;
          transform-style: preserve-3d;
          backface-visibility: visible;
          background: linear-gradient(155deg, #a66d46, #79432f 65%, #58302a);
          clip-path: polygon(0 0, 100% 0, 50% 100%);
          border-top: 1px solid #e5bd7b;
        }

        .flap-inner {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          padding-top: 20px;
          background: linear-gradient(145deg, rgba(255, 220, 159, 0.16), transparent);
        }

        .flap-ornament {
          color: #f2d49e;
          font-size: 30px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .royal-wax-seal {
          position: absolute;
          z-index: 10;
          left: 43%;
          top: 53%;
          transform: translate(-50%, -50%);
          width: 75px;
          height: 75px;
          padding: 0;
          border: 1px solid rgba(255, 221, 153, 0.8);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 25%, #d9a65e, #9d5d36 55%, #633323);
          color: #ffe6b3;
          box-shadow:
            0 5px 14px rgba(0, 0, 0, 0.4),
            inset 0 0 0 4px rgba(255, 226, 172, 0.12),
            inset 0 0 0 7px rgba(255, 226, 172, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .wax-outer-ring {
          width: 57px;
          height: 57px;
          border: 1px solid rgba(255, 229, 177, 0.8);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .wax-monogram {
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #fff0ce;
          line-height: 1;
        }

        .wax-small-detail {
          font-size: 9px;
          color: #f5d397;
          line-height: 1;
        }

        .envelope-gold-flecks {
          position: absolute;
          inset: 0;
          z-index: 6;
          pointer-events: none;
        }

        .envelope-gold-flecks i {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #f5d397;
          border-radius: 50%;
          box-shadow: 0 0 8px #e4b86d;
        }

        .envelope-gold-flecks i:nth-child(1) { top: 18%; left: 14%; }
        .envelope-gold-flecks i:nth-child(2) { top: 24%; right: 15%; }
        .envelope-gold-flecks i:nth-child(3) { bottom: 19%; left: 17%; }
        .envelope-gold-flecks i:nth-child(4) { bottom: 20%; right: 17%; }
        .envelope-gold-flecks i:nth-child(5) { top: 42%; left: 8%; }
        .envelope-gold-flecks i:nth-child(6) { top: 43%; right: 8%; }
        .envelope-gold-flecks i:nth-child(7) { top: 13%; left: 48%; }
        .envelope-gold-flecks i:nth-child(8) { bottom: 13%; left: 49%; }
        .envelope-gold-flecks i:nth-child(9) { top: 32%; left: 27%; }
        .envelope-gold-flecks i:nth-child(10) { top: 32%; right: 27%; }
        .envelope-gold-flecks i:nth-child(11) { bottom: 32%; left: 29%; }
        .envelope-gold-flecks i:nth-child(12) { bottom: 32%; right: 29%; }

        .envelope-instruction {
          margin-top: 40px;
          color: #f1d7a8;
        }

        .instruction-icon {
          color: var(--env-gold);
          margin-bottom: 9px;
        }

        .envelope-instruction p {
          font-size: 9px;
          letter-spacing: 3px;
          margin: 0;
        }

        .envelope-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          color: #cfae7c;
          font-size: 9px;
          letter-spacing: 2px;
          margin-top: 27px;
        }

        .envelope-footer i {
          color: #e4bb77;
          font-style: normal;
          font-size: 13px;
        }

        .envelope-opening-light {
          position: absolute;
          z-index: 20;
          left: 50%;
          top: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(255, 232, 180, 0.9), rgba(222, 168, 92, 0.35) 40%, transparent 70%);
          filter: blur(15px);
        }

        @media (max-width: 600px) {
          .royal-envelope-screen {
            padding: 20px 16px;
          }

          .envelope-heading {
            margin-bottom: 32px;
          }

          .ganesh-icon {
            width: 58px;
            height: 58px;
          }

          .heading-blessing {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .heading-location {
            font-size: 8px;
            letter-spacing: 2.5px;
          }

          .heading-decoration {
            margin: 13px auto;
          }

          .envelope-perspective {
            width: min(100%, 390px);
          }

          .royal-envelope {
            aspect-ratio: 1.38 / 1;
          }

          .royal-letter {
            left: 8%;
            width: 84%;
            height: 91%;
          }

          .letter-inner {
            padding: 5px;
          }

          .letter-small,
          .letter-invite,
          .letter-place {
            font-size: 6px;
          }

          .letter-inner h2 {
            font-size: clamp(17px, 5vw, 24px);
          }

          .letter-date {
            font-size: 10px;
          }

          .royal-wax-seal {
            width: 66px;
            height: 66px;
          }

          .wax-outer-ring {
            width: 50px;
            height: 50px;
          }

          .wax-monogram {
            font-size: 17px;
          }

          .front-floral {
            font-size: 27px;
            margin-bottom: 6px;
          }

          .front-kicker {
            font-size: 6px;
            letter-spacing: 1.5px;
          }

          .front-title {
            font-size: 7px;
            margin-bottom: 6px;
          }

          .envelope-front-content h1 {
            font-size: clamp(22px, 6vw, 30px);
          }

          .front-divider {
            margin: 7px 0;
          }

          .front-date {
            font-size: 10px;
          }

          .front-venue {
            font-size: 7px;
          }

          .envelope-instruction {
            margin-top: 34px;
          }

          .envelope-instruction p {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .envelope-footer {
            font-size: 8px;
            letter-spacing: 1px;
            gap: 9px;
            margin-top: 23px;
          }

          .corner-ornament {
            font-size: 37px;
          }

          .top-left,
          .top-right {
            top: 12px;
          }

          .bottom-left,
          .bottom-right {
            bottom: 12px;
          }

          .top-left,
          .bottom-left {
            left: 12px;
          }

          .top-right,
          .bottom-right {
            right: 12px;
          }
        }

        @media (max-height: 700px) and (min-width: 601px) {
          .envelope-heading {
            margin-bottom: 12px;
          }

          .ganesh-icon {
            width: 48px;
            height: 48px;
          }

          .royal-envelope-container {
            transform: scale(0.86);
          }

          .envelope-instruction {
            margin-top: 25px;
          }

          .envelope-footer {
            margin-top: 17px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .envelope-particles span {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </motion.section>
  );
}
