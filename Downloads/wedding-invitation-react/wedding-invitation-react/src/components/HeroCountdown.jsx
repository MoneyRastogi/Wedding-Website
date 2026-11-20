
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Share2,
  MapPin,
  Heart,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import { weddingData as d } from "../data/weddingData";

const calculateCountdown = () => {
  const remaining = Math.max(
    0,
    new Date(d.date.iso).getTime() - Date.now()
  );

  return [
    Math.floor(remaining / 86400000),
    Math.floor(remaining / 3600000) % 24,
    Math.floor(remaining / 60000) % 60,
    Math.floor(remaining / 1000) % 60,
  ];
};

export default function HeroCountdown({ showToast = () => {} }) {
  const [countdown, setCountdown] = useState(calculateCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const share = async () => {
    const invitation = {
      title: `${d.couple.groom} & ${d.couple.bride}`,
      text: `Join us ${d.date.hero} in ${d.location.city}, Rajasthan`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(invitation);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Invitation link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        showToast("Please copy the invitation link from your browser.");
      }
    }
  };

  const countdownItems = [
    { label: "DAYS", value: countdown[0] },
    { label: "HOURS", value: countdown[1] },
    { label: "MINUTES", value: countdown[2] },
    { label: "SECONDS", value: countdown[3] },
  ];

  return (
    <section className="royal-hero">
      {/* Background image */}
      <div className="royal-hero-bg" />
      <div className="royal-hero-overlay" />

      {/* Decorative glow */}
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      {/* Floating particles */}
      <div className="hero-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      {/* Side decorations */}
      <div className="hero-side-label">
        <span>EST. IN LOVE</span>
        <Heart size={13} fill="currentColor" />
        <span>2026</span>
      </div>

      <motion.div
        className="royal-hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {/* Ganesh blessing */}
        <motion.div
          className="hero-ganesh"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          ॐ
        </motion.div>

        <p className="hero-blessing">
          ॥ Shree Ganeshaya Namah ॥
        </p>

        <div className="hero-divider">
          <span />
          <Sparkles size={17} />
          <span />
        </div>

        {/* Couple names */}
        <p className="hero-kicker">TOGETHER WITH THEIR FAMILIES</p>

        <h1 className="royal-couple-title">
          <span>{d.couple.groom}</span>
          <small>WEDS</small>
          <span>{d.couple.bride}</span>
        </h1>

        <div className="hero-heart">
          <span />
          <Heart size={17} fill="currentColor" />
          <span />
        </div>

        <p className="hero-getting-married">
          WE ARE GETTING MARRIED
        </p>

        {/* Date card */}
        <motion.div
          className="hero-date-card"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="date-card-top">SAVE THE DATE</div>

          <div className="date-card-date">
            <CalendarDays size={19} />
            <strong>{d.date.hero}</strong>
          </div>

          <div className="date-card-location">
            <MapPin size={15} />
            <span>{d.location.venue}</span>
          </div>
        </motion.div>

        {/* Countdown */}
        <div className="hero-countdown-heading">
          <span />
          THE COUNTDOWN BEGINS
          <span />
        </div>

        <div className="royal-countdown">
          {countdownItems.map((item, index) => (
            <motion.div
              className="royal-count-box"
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + index * 0.12 }}
            >
              <strong>
                {String(item.value).padStart(2, "0")}
              </strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="royal-hero-actions">
          <button className="hero-share-btn" onClick={share}>
            <Share2 size={17} />
            SHARE INVITATION
          </button>

          <a
            className="hero-call-btn"
            href={`tel:${d.phone}`}
          >
            <Phone size={17} />
            CALL US
          </a>
        </div>

        {/* Closing message */}
        <div className="hero-closing">
          <div className="closing-divider">
            <span />
            <Heart size={13} fill="currentColor" />
            <span />
          </div>

          <p>Until our forever begins</p>
          <small>
            Thank you for being a part of our special day.
          </small>
        </div>
      </motion.div>

      <style>{`
        .royal-hero {
          --gold: #e8c27b;
          --gold-light: #f8e7bd;
          --cream: #fff6e5;
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 85px 22px 65px;
          color: var(--cream);
          background: #24150f;
        }

        .royal-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          background-image: url("/images/royal-wedding-bg.jpg");
          background-size: cover;
          background-position: center 48%;
          transform: scale(1.025);
          animation: heroBgReveal 1.8s ease-out both;
        }

        .royal-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            linear-gradient(
              90deg,
              rgba(20, 10, 7, 0.48),
              rgba(25, 13, 8, 0.30) 50%,
              rgba(20, 10, 7, 0.48)
            ),
            linear-gradient(
              180deg,
              rgba(15, 8, 5, 0.42),
              rgba(20, 10, 6, 0.25) 45%,
              rgba(15, 8, 5, 0.65)
            );
        }

        .hero-glow {
          position: absolute;
          z-index: -1;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          background: rgba(232, 194, 123, 0.15);
          filter: blur(90px);
          pointer-events: none;
        }

        .hero-glow-left {
          top: 10%;
          left: -180px;
        }

        .hero-glow-right {
          bottom: 5%;
          right: -180px;
        }

        .hero-particles {
          position: absolute;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-particles span {
          position: absolute;
          left: calc((var(--i) * 5.7%) + 2%);
          bottom: -15px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #ffe3a0;
          box-shadow: 0 0 12px 3px rgba(255, 203, 110, 0.45);
          opacity: 0;
          animation: goldenFloat
            calc(6s + (var(--i) * 0.35s))
            linear infinite;
          animation-delay: calc(var(--i) * -0.7s);
        }

        .hero-side-label {
          position: absolute;
          top: 50%;
          right: 28px;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 9px;
          letter-spacing: 3px;
          writing-mode: vertical-rl;
          padding: 20px 11px;
          border: 1px solid rgba(232, 194, 123, 0.55);
          border-radius: 30px;
          background: rgba(31, 17, 11, 0.28);
          backdrop-filter: blur(8px);
        }

        .royal-hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 920px;
          margin: auto;
          text-align: center;
        }

        .hero-ganesh {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 58px);
          line-height: 1;
          color: var(--gold);
          text-shadow: 0 0 28px rgba(255, 198, 103, 0.45);
          margin-bottom: 13px;
        }

        .hero-blessing {
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 13px;
          letter-spacing: 3px;
          margin: 0;
        }

        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: var(--gold);
          margin: 21px auto 28px;
        }

        .hero-divider span,
        .hero-heart span,
        .closing-divider span {
          display: block;
          width: 65px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold)
          );
        }

        .hero-divider span:last-child,
        .hero-heart span:last-child,
        .closing-divider span:last-child {
          transform: rotate(180deg);
        }

        .hero-kicker {
          font-size: 10px;
          letter-spacing: 5px;
          color: #f3d9a7;
          margin-bottom: 13px;
        }

        .royal-couple-title {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin: 0;
          color: #ffdda0;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(48px, 8vw, 92px);
          font-weight: 500;
          line-height: 1.05;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.35);
        }

        .royal-couple-title small {
          font-family: Georgia, serif;
          font-size: 15px;
          letter-spacing: 5px;
          color: #fff0d2;
          font-weight: 400;
        }

        .hero-heart {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          color: var(--gold);
          margin: 13px auto 17px;
        }

        .hero-getting-married {
          color: #fff0d7;
          font-size: 12px;
          letter-spacing: 7px;
          margin: 0 0 28px;
        }

        .hero-date-card {
          width: min(100%, 390px);
          margin: 0 auto 27px;
          padding: 17px 22px;
          color: #4b2a17;
          background:
            linear-gradient(
              135deg,
              #fff4d9,
              #f2d6a1 48%,
              #fff1d2
            );
          border: 1px solid #e4b96d;
          outline: 1px solid rgba(255, 236, 193, 0.65);
          outline-offset: 5px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
          clip-path: polygon(
            4% 0, 96% 0, 100% 50%,
            96% 100%, 4% 100%, 0 50%
          );
        }

        .date-card-top {
          font-family: Georgia, serif;
          font-size: 10px;
          letter-spacing: 4px;
          margin-bottom: 8px;
        }

        .date-card-date {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 11px;
          font-family: Georgia, serif;
          font-size: clamp(18px, 3vw, 25px);
        }

        .date-card-date svg {
          color: #8b5a25;
        }

        .date-card-location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-size: 12px;
          margin-top: 7px;
        }

        .hero-countdown-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: var(--gold-light);
          font-family: Georgia, serif;
          font-size: 12px;
          letter-spacing: 4px;
          margin-bottom: 17px;
        }

        .hero-countdown-heading span {
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .royal-countdown {
          display: flex;
          justify-content: center;
          gap: 13px;
          margin-bottom: 29px;
        }

        .royal-count-box {
          width: 91px;
          min-height: 91px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          background: rgba(255, 243, 218, 0.94);
          border: 1px solid #e9c37d;
          outline: 1px solid rgba(255, 231, 180, 0.45);
          outline-offset: 3px;
          color: #4c2b18;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .royal-count-box strong {
          font-family: Georgia, serif;
          font-size: 31px;
          font-weight: 500;
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .royal-count-box span {
          font-size: 9px;
          letter-spacing: 2px;
        }

        .royal-hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .hero-share-btn,
        .hero-call-btn {
          min-width: 190px;
          min-height: 48px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 40px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-share-btn {
          border: 1px solid #f0c578;
          color: #3e2415;
          background: linear-gradient(135deg, #f8d89d, #dba44d);
          box-shadow: 0 5px 22px rgba(0, 0, 0, 0.2);
        }

        .hero-call-btn {
          border: 1px solid rgba(255, 226, 174, 0.8);
          color: #fff0d7;
          background: rgba(30, 16, 10, 0.3);
          backdrop-filter: blur(8px);
        }

        .hero-share-btn:hover,
        .hero-call-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .hero-closing {
          margin-top: 27px;
          color: var(--gold-light);
        }

        .closing-divider {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          color: var(--gold);
          margin-bottom: 10px;
        }

        .closing-divider span {
          width: 42px;
        }

        .hero-closing p {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 24px;
          font-style: italic;
          margin: 0 0 5px;
        }

        .hero-closing small {
          font-size: 11px;
          letter-spacing: 0.5px;
          color: #f3dfbd;
        }

        @keyframes goldenFloat {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          15% { opacity: 0.8; }
          85% { opacity: 0.6; }
          100% {
            transform: translateY(-100vh) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes heroBgReveal {
          from { transform: scale(1.1); }
          to { transform: scale(1.025); }
        }

        @media (min-width: 1400px) {
          .royal-hero {
            min-height: 100vh;
          }
        }

        @media (max-width: 768px) {
          .royal-hero {
            min-height: 100svh;
            padding: 75px 18px 45px;
          }

          .royal-hero-bg {
            background-position: 52% center;
          }

          .royal-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(20, 10, 7, 0.52),
                rgba(20, 10, 7, 0.35) 45%,
                rgba(20, 10, 7, 0.68)
              );
          }

          .hero-side-label {
            display: none;
          }

          .hero-kicker {
            font-size: 8px;
            letter-spacing: 3px;
          }

          .royal-couple-title {
            gap: 7px 12px;
            font-size: clamp(43px, 11vw, 65px);
          }

          .royal-couple-title small {
            font-size: 11px;
            letter-spacing: 3px;
          }

          .hero-getting-married {
            font-size: 9px;
            letter-spacing: 4px;
          }

          .hero-date-card {
            max-width: 340px;
            padding: 15px 16px;
          }

          .royal-countdown {
            gap: 10px;
          }

          .royal-count-box {
            width: min(21vw, 78px);
            min-height: 76px;
          }

          .royal-count-box strong {
            font-size: 26px;
          }

          .royal-count-box span {
            font-size: 8px;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 420px) {
          .royal-hero {
            padding: 65px 15px 35px;
          }

          .hero-ganesh {
            font-size: 40px;
          }

          .hero-blessing {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .hero-divider {
            margin: 17px auto 23px;
          }

          .royal-couple-title {
            font-size: clamp(39px, 10.5vw, 48px);
          }

          .hero-getting-married {
            letter-spacing: 3px;
            font-size: 8px;
            margin-bottom: 23px;
          }

          .hero-countdown-heading {
            font-size: 10px;
            letter-spacing: 2px;
            gap: 8px;
          }

          .hero-countdown-heading span {
            width: 19px;
          }

          .royal-countdown {
            gap: 8px;
          }

          .royal-count-box {
            width: calc((100vw - 65px) / 4);
            min-height: 69px;
          }

          .royal-count-box strong {
            font-size: 23px;
          }

          .royal-count-box span {
            font-size: 7px;
          }

          .hero-share-btn,
          .hero-call-btn {
            min-width: 155px;
            min-height: 44px;
            font-size: 9px;
          }

          .hero-closing p {
            font-size: 21px;
          }

          .hero-closing small {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-particles span,
          .royal-hero-bg {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
