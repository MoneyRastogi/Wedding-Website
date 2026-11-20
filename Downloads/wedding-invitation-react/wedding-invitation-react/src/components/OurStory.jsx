import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { weddingData as d } from "../data/weddingData";

const photos = [
  "/pre-wedding/img1.jpeg",
  "/pre-wedding/img2.jpeg",
  "/pre-wedding/img3.jpeg",
  "/pre-wedding/img4.jpeg",
  "/pre-wedding/img5.jpeg",
  "/pre-wedding/img6.jpeg",
  "/pre-wedding/img7.jpeg",
  "/pre-wedding/img8.jpeg",
  "/pre-wedding/img9.jpeg",
  "/pre-wedding/img10.jpeg",
  "/pre-wedding/img11.jpeg",
  "/pre-wedding/img12.jpeg",
  "/pre-wedding/img13.jpeg",
  "/pre-wedding/img14.jpeg",
  "/pre-wedding/img15.jpeg",
];

export default function OurStory() {
  return (
    <section id="story" className="section-shell section-pad story">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="gold-kicker">A BEAUTIFUL BEGINNING</p>

        <div className="story-heading-icon">
          <span />
          <Sparkles size={17} />
          <span />
        </div>

        <h2>
          Two families.
          <br />
          <em>One beautiful forever.</em>
        </h2>

        <p className="story-intro">
          Some journeys begin with a beautiful introduction, and turn into a
          lifetime of togetherness.
        </p>
      </motion.div>

      {/* Continuous photo slider */}
      <motion.div
        className="prewedding-gallery"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="gallery-top-label">
          <span>DIVYA & ASTHA</span>
          <Heart size={15} fill="currentColor" />
          <span>PRE-WEDDING MEMORIES</span>
        </div>

        <div className="gallery-slider">
          <div className="gallery-track">
            {[0, 1].map((group) => (
              <div
                className="gallery-group"
                key={group}
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {photos.map((photo, index) => (
                  <div className="gallery-photo" key={`${group}-${index}`}>
                    <img
                      src={photo}
                      alt={
                        group === 0
                          ? `Divya and Astha pre-wedding photograph ${index + 1}`
                          : ""
                      }
                      loading={group === 0 && index < 4 ? "eager" : "lazy"}
                      draggable="false"
                    />

                    <div className="photo-overlay">
                      <span>✧</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-bottom">
          <span className="gallery-line" />
          <p>15 MOMENTS · A LIFETIME OF MEMORIES</p>
          <span className="gallery-line" />
        </div>
      </motion.div>

      {/* Closing message */}
      <motion.div
        className="story-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="closing-ornament">✧</div>

        <p>From a beautiful beginning to a forever together.</p>

        <h3>
          {d.couple.groom} <span>&</span> {d.couple.bride}
        </h3>

        <div className="closing-heart">
          <Heart size={15} fill="currentColor" />
        </div>
      </motion.div>

      <style>{`
        .story {
          overflow: hidden;
        }

        .story-heading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #b58a4c;
          margin: 18px 0;
        }

        .story-heading-icon span {
          width: 45px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #b58a4c
          );
        }

        .story-heading-icon span:last-child {
          transform: rotate(180deg);
        }

        .story-intro {
          max-width: 490px;
          margin: 18px auto 0;
          color: #887664;
          font-size: 14px;
          line-height: 1.9;
        }

        .prewedding-gallery {
          width: 100%;
          margin: 55px auto 0;
          position: relative;
        }

        .gallery-top-label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin-bottom: 25px;
          color: #9b7445;
          font-size: 9px;
          letter-spacing: 2.5px;
          font-weight: 600;
        }

        .gallery-top-label svg {
          color: #b58a4c;
        }

        .gallery-slider {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 10px 0 22px;
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
          mask-image: linear-gradient(
            90deg,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }

        .gallery-track {
          display: flex;
          width: max-content;
          animation: prewedding-scroll 75s linear infinite;
          will-change: transform;
        }

        .gallery-slider:hover .gallery-track {
          animation-play-state: paused;
        }

        .gallery-group {
          display: flex;
          flex-shrink: 0;
          gap: 20px;
          padding-right: 20px;
        }

        .gallery-photo {
          position: relative;
          flex-shrink: 0;
          width: 245px;
          height: 325px;
          overflow: hidden;
          border-radius: 7px;
          background: #eadfce;
          border: 1px solid rgba(173, 132, 76, 0.35);
          box-shadow: 0 12px 30px rgba(75, 48, 26, 0.12);
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease;
        }

        .gallery-photo:nth-child(even) {
          transform: translateY(18px);
        }

        .gallery-photo:hover {
          transform: translateY(-5px) scale(1.025);
          box-shadow: 0 18px 38px rgba(75, 48, 26, 0.2);
        }

        .gallery-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .gallery-photo:hover img {
          transform: scale(1.08);
        }

        .photo-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding-bottom: 18px;
          background: linear-gradient(
            to top,
            rgba(35, 18, 15, 0.3),
            transparent 35%
          );
          pointer-events: none;
        }

        .photo-overlay span {
          color: #ffe6b4;
          font-size: 22px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        @keyframes prewedding-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .gallery-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          margin-top: 18px;
        }

        .gallery-bottom p {
          color: #9b805f;
          font-size: 9px;
          letter-spacing: 2.5px;
          white-space: nowrap;
          margin: 0;
        }

        .gallery-line {
          width: 45px;
          height: 1px;
          background: #c5a575;
        }

        .story-closing {
          text-align: center;
          margin: 65px auto 10px;
        }

        .closing-ornament {
          color: #b58a4c;
          font-size: 26px;
          margin-bottom: 12px;
        }

        .story-closing p {
          color: #8e7967;
          font-family: Georgia, serif;
          font-size: 16px;
          font-style: italic;
          margin-bottom: 12px;
        }

        .story-closing h3 {
          font-family: Georgia, serif;
          font-size: clamp(27px, 4vw, 40px);
          font-weight: 400;
          color: #755a3c;
          margin: 0;
        }

        .story-closing h3 span {
          color: #b58a4c;
          font-style: italic;
          font-size: 0.8em;
        }

        .closing-heart {
          display: flex;
          justify-content: center;
          margin-top: 17px;
          color: #b58a4c;
        }

        @media (max-width: 768px) {
          .prewedding-gallery {
            margin-top: 35px;
          }

          .gallery-top-label {
            font-size: 8px;
            letter-spacing: 1.5px;
            gap: 9px;
          }

          .gallery-group {
            gap: 13px;
            padding-right: 13px;
          }

          .gallery-photo {
            width: 190px;
            height: 255px;
          }

          .gallery-track {
            animation-duration: 65s;
          }

          .gallery-bottom {
            gap: 9px;
          }

          .gallery-bottom p {
            font-size: 7px;
            letter-spacing: 1.3px;
          }

          .gallery-line {
            width: 22px;
          }

          .story-closing {
            margin-top: 48px;
          }

          .story-closing p {
            font-size: 14px;
            padding: 0 12px;
          }
        }

        @media (max-width: 400px) {
          .gallery-photo {
            width: 165px;
            height: 225px;
          }

          .gallery-track {
            animation-duration: 58s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
