import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  AnimatePresence,
  MotionConfig,
  motion,
} from "framer-motion";
import {
  Volume2,
  VolumeX,
  Heart,
} from "lucide-react";

import EnvelopeIntro from "./components/EnvelopeIntro";
import Navbar from "./components/Navbar";
import HeroCountdown from "./components/HeroCountdown";
import Families from "./components/Families";
import OurStory from "./components/OurStory";
import Schedule from "./components/Schedule";
import RsvpTravel from "./components/RsvpTravel";

import "./styles.css";

function App() {
  const [opened, setOpened] = useState(false);
  const [muted, setMuted] = useState(false);
  const [toast, setToast] = useState("");

  const audioRef = useRef(null);
  const toastTimer = useRef(null);

  // Notification system
  const notify = (message) => {
    setToast(message);

    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }

    toastTimer.current = window.setTimeout(() => {
      setToast("");
    }, 2800);
  };

  // Clean up notification timer
  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        window.clearTimeout(toastTimer.current);
      }
    };
  }, []);

  // Open wedding invitation and start music
  const openInvitation = async () => {
    setOpened(true);

    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = muted;
    audio.volume = 0.35;

    try {
      await audio.play();
    } catch {
      notify("Tap the sound button to start the wedding music.");
    }
  };

  // Toggle background music
  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextMuted = !muted;

    setMuted(nextMuted);
    audio.muted = nextMuted;

    if (!nextMuted && audio.paused) {
      try {
        await audio.play();
      } catch {
        notify("Please tap again to start the music.");
      }
    }

    notify(nextMuted ? "Music turned off" : "Music turned on");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="wedding-app">

        {/* Background weddingFamilies music */}
        <audio
          ref={audioRef}
          src="/ambient-wedding.wav"
          loop
          preload="auto"
        />

        {/* Envelope opening screen */}
        <AnimatePresence mode="wait">
          {!opened && (
            <motion.div
              key="envelope"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                scale: 1.025,
                filter: "blur(8px)",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <EnvelopeIntro onOpen={openInvitation} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main wedding website */}
        <AnimatePresence>
          {opened && (
            <motion.div
              key="wedding-website"
              className="wedding-website"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Navbar />

              <main>
                <HeroCountdown showToast={notify} />

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <Families />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.8 }}
                >
                  <OurStory />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.8 }}
                >
                  <Schedule />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.8 }}
                >
                  <RsvpTravel />
                </motion.div>
              </main>

              {/* Floating music control */}
              <motion.button
                className="sound-toggle"
                onClick={toggleSound}
                aria-label={muted ? "Turn music on" : "Turn music off"}
                title={muted ? "Turn music on" : "Turn music off"}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                <span className="sound-icon">
                  {muted ? (
                    <VolumeX size={19} />
                  ) : (
                    <Volume2 size={19} />
                  )}
                </span>

                <span className="sound-label">
                  {muted ? "Sound off" : "Sound on"}
                </span>

                {!muted && (
                  <span className="sound-wave">
                    <i />
                    <i />
                    <i />
                  </span>
                )}
              </motion.button>

              {/* Footer */}
              <footer className="site-footer">
                <span>MADE WITH</span>
                <Heart
                  size={13}
                  fill="currentColor"
                  className="footer-heart"
                />
                <span>FOR A BEAUTIFUL BEGINNING</span>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              className="toast"
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <Heart size={15} fill="currentColor" />
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional component styling */}
        <style>{`
          .wedding-app {
            min-height: 100vh;
            overflow: clip;
            position: relative;
          }

          .wedding-website {
            min-height: 100vh;
          }

          .sound-toggle {
            position: fixed;
            z-index: 1000;
            right: 22px;
            bottom: 24px;
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 11px 15px;
            border: 1px solid rgba(218, 181, 112, 0.65);
            border-radius: 50px;
            background: rgba(39, 24, 17, 0.88);
            color: #f5dfb4;
            backdrop-filter: blur(14px);
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            font-size: 11px;
            letter-spacing: 1px;
          }

          .sound-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #eac47f;
          }

          .sound-wave {
            display: flex;
            align-items: center;
            gap: 2px;
            height: 15px;
          }

          .sound-wave i {
            display: block;
            width: 2px;
            height: 5px;
            border-radius: 5px;
            background: #eac47f;
            animation: soundWave 0.8s ease-in-out infinite alternate;
          }

          .sound-wave i:nth-child(2) {
            animation-delay: 0.25s;
          }

          .sound-wave i:nth-child(3) {
            animation-delay: 0.45s;
          }

          @keyframes soundWave {
            from { height: 4px; }
            to { height: 14px; }
          }

          .site-footer {
            min-height: 75px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 9px;
            padding: 22px 18px;
            background: #241811;
            color: #e7c993;
            font-family: Georgia, serif;
            font-size: 9px;
            letter-spacing: 2px;
            text-align: center;
          }

          .footer-heart {
            color: #c77b66;
          }

          .toast {
            position: fixed;
            z-index: 2000;
            left: 50%;
            bottom: 85px;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            max-width: calc(100vw - 30px);
            padding: 13px 20px;
            border: 1px solid rgba(225, 190, 126, 0.6);
            border-radius: 50px;
            background: #302016;
            color: #f7e3bd;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
            font-size: 12px;
            text-align: center;
          }

          .toast svg {
            flex-shrink: 0;
            color: #e7bd77;
          }

          @media (max-width: 600px) {
            .sound-toggle {
              right: 13px;
              bottom: 14px;
              padding: 10px 12px;
            }

            .sound-label {
              font-size: 10px;
            }

            .site-footer {
              font-size: 8px;
              letter-spacing: 1.3px;
              gap: 6px;
            }

            .toast {
              bottom: 70px;
              font-size: 11px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .sound-wave i {
              animation: none;
            }
          }
        `}</style>
      </div>
    </MotionConfig>
  );
}

createRoot(document.getElementById("root")).render(<App />);
