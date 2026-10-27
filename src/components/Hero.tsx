import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap, Compass } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp, EASE_PREMIUM } from "../lib/motion";

// The three value-prop phrases roll through like a die turning on one axis;
// each one flips up and away while the next flips in from the same direction.
const ROTATING_PHRASES = [
  "Find the Right People",
  "Develop Better Leaders",
  "Build Stronger Organisations",
];

// The three core service nodes that branch out from the logo mark in the
// hero graphic, mapping to Learning / HR Solutions / People Advisory.
const HERO_SERVICES = [
  { icon: GraduationCap, label: "Learning", top: "15%" },
  { icon: Users, label: "HR Solutions", top: "50%" },
  { icon: Compass, label: "People Advisory", top: "85%" },
];

const HERO_BRANCH_PATHS = [
  "M22,50 C40,32 56,20 74,16",
  "M22,50 C44,50 60,50 76,50",
  "M22,50 C40,68 56,80 74,84",
];

export default function Hero() {
  // Cycles the hero headline's value-prop line on a timer, like a die
  // rolling forward on one axis; see the rotateX flip on the span below.
  const [rotatingIndex, setRotatingIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Cursor-parallax for the decorative blur blobs; each blob springs toward
  // the mouse offset at a slightly different multiplier so they don't move in lockstep.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };

  const blob1X = useSpring(useTransform(mouseX, (v) => v * 0.5), springConfig);
  const blob1Y = useSpring(useTransform(mouseY, (v) => v * 0.5), springConfig);
  const blob2X = useSpring(useTransform(mouseX, (v) => v * 0.8), springConfig);
  const blob2Y = useSpring(useTransform(mouseY, (v) => v * 0.8), springConfig);
  const blob3X = useSpring(useTransform(mouseX, (v) => v * 1), springConfig);
  const blob3Y = useSpring(useTransform(mouseY, (v) => v * 1), springConfig);
  const blob4X = useSpring(useTransform(mouseX, (v) => v * 0.65), springConfig);
  const blob4Y = useSpring(useTransform(mouseY, (v) => v * 0.65), springConfig);

  const handleSectionMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(offsetX * 30);
    mouseY.set(offsetY * 30);
  };

  // Continuous tilt-on-hover for the hero image
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateXSpring = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleImageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(offsetX * 12);
    rotateX.set(offsetY * -12);
  };

  const handleImageMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleSectionMouseMove}
      className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-bg-light"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-deep-navy/5 -skew-x-12 transform origin-top-right -z-10"></div>
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -z-10"
      ></motion.div>
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl -z-10"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} custom={0}>
            <Badge className="h-auto gap-2 pl-3 pr-4 py-2 text-sm font-bold border-primary/20 bg-primary/10 text-primary rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
              </span>
              Expert Management Consulting
            </Badge>
          </motion.div>
          <motion.h1 variants={fadeInUp} custom={1} className="font-extrabold text-deep-navy leading-[1.1] mb-6 font-serif">
            <span className="block text-2xl md:text-3xl font-semibold text-deep-navy/50 mb-2">
              Helping you
            </span>
            <span
              className="relative block text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl text-primary-blue min-h-[2.8em] break-words"
              style={{ perspective: 1200 }}
            >
              <AnimatePresence initial={false}>
                <motion.span
                  key={rotatingIndex}
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: 90, opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE_PREMIUM }}
                  className="absolute inset-0"
                  style={{ transformOrigin: "50% 50%", backfaceVisibility: "hidden" }}
                >
                  {ROTATING_PHRASES[rotatingIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} custom={2} className="text-xl text-deep-navy/70 mb-10 leading-relaxed max-w-xl font-medium">
            Learning, HR and people advisory solutions built around what your organisation actually needs.
          </motion.p>
          <motion.div variants={fadeInUp} custom={3} className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="h-14 px-10 rounded-2xl text-lg font-bold shadow-xl hover:shadow-primary/20 group w-full"
              >
                <Link to="/contact">
                  Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button variant="outline" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg font-bold w-full">
                <Link to="#services">What We Do</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
            style={{
              transformPerspective: 1000,
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
            }}
            className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-deep-navy/5 aspect-square bg-gradient-to-br from-white via-bg-light to-white"
          >
            {/* Slow-shimmering brand accent bar across the top */}
            <motion.div
              className="absolute top-0 inset-x-0 h-1.5 z-30"
              style={{
                backgroundImage: "linear-gradient(90deg, var(--color-primary-blue), var(--color-gold-accent), var(--color-primary-blue))",
                backgroundSize: "200% 100%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Soft dot-grid texture for a clean, professional diagram feel */}
            <div
              className="absolute inset-0 opacity-50"
              style={{ backgroundImage: "radial-gradient(rgba(1,30,51,0.07) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            ></div>

            {/* Soft brand-colour glows */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-primary-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-10 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl"></div>

            {/* Contextual label so the diagram reads as informative, not decorative */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
              className="absolute top-7 left-7 z-10 flex items-center gap-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-accent"></span>
              </span>
              <p className="text-[11px] font-bold tracking-[0.18em] text-deep-navy/50 uppercase">Our Expertise</p>
            </motion.div>

            {/* Slow ambient rotating sweep behind the logo, like a radar scanning
                outward; purely decorative but keeps the panel feeling alive even
                once the entrance animations are done */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{ left: "22%", top: "50%" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full pointer-events-none"
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(0,114,189,0.16), transparent 20%, transparent 80%, rgba(220,161,29,0.14))",
                  maskImage: "radial-gradient(circle, transparent 55%, black 56%, black 100%)",
                  WebkitMaskImage: "radial-gradient(circle, transparent 55%, black 56%, black 100%)",
                }}
              />
            </motion.div>

            {/* Radar rings emanating from the logo mark: a static faint ring plus a
                looping expand-and-fade ping, so the panel keeps pulsing outward */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              <motion.circle
                cx="22" cy="50" r="12" fill="none" stroke="rgba(0,114,189,0.12)" strokeWidth="0.4"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE_PREMIUM }}
                style={{ transformOrigin: "22px 50px" }}
              />
              {[0, 1.3, 2.6].map((delay) => (
                <motion.circle
                  key={delay}
                  cx="22" cy="50" r="10" fill="none" stroke="rgba(0,114,189,0.3)" strokeWidth="0.5"
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: [0, 0.6, 0], scale: [0.3, 2.1, 2.1] }}
                  transition={{ duration: 3.9, repeat: Infinity, ease: "easeOut", delay: 1 + delay }}
                  style={{ transformOrigin: "22px 50px" }}
                />
              ))}

              {/* Branching connector lines from the logo mark to each service node.
                  Two staggered travelling dots per path keep a steady flow of
                  "expertise" moving outward instead of one lone pulse. */}
              {HERO_BRANCH_PATHS.map((d, i) => (
                <g key={d}>
                  <motion.path
                    d={d}
                    stroke="rgba(0,114,189,0.4)"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 + i * 0.2, ease: EASE_PREMIUM }}
                  />
                  <circle r="0.9" fill="#DCA11D">
                    <animateMotion dur="2.6s" begin={`${1.9 + i * 0.3}s`} repeatCount="indefinite" path={d} />
                  </circle>
                  <circle r="0.6" fill="var(--color-primary-blue)" opacity="0.7">
                    <animateMotion dur="2.6s" begin={`${1.9 + i * 0.3 + 1.3}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Central logo mark. The outer div only centres the mark on its anchor
                point (a plain, non-motion transform); the inner motion.div owns the
                entrance animation so Framer's animated transform never clobbers the
                Tailwind centering transform on the same element. */}
            <div style={{ left: "22%", top: "50%" }} className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
                className="relative"
              >
                <div className="absolute -inset-5 rounded-full bg-primary-blue/10 blur-xl"></div>
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0 rgba(0,114,189,0.25)", "0 0 0 20px rgba(0,114,189,0)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full"
                />
                <motion.div
                  animate={{ boxShadow: ["0 0 0 0 rgba(220,161,29,0.25)", "0 0 0 12px rgba(220,161,29,0)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.25 }}
                  className="absolute inset-0 rounded-full"
                />
                <motion.div
                  animate={{ rotate: [0, 6, 0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white ring-1 ring-deep-navy/10 shadow-xl flex items-center justify-center p-4"
                >
                  <img src="/images/zc-mark.png" alt="Zebulon Consulting logo mark" className="w-full h-full object-contain" />
                </motion.div>
              </motion.div>
            </div>

            {/* Service nodes branching off the logo mark: a compact, lively pill
                per service with a pulsing icon chip, instead of a static list of
                sub-offerings (those already live on each service's own page) */}
            {HERO_SERVICES.map((service, i) => (
              <div
                key={service.label}
                style={{ left: "77%", top: service.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 max-w-[208px]"
              >
                <motion.div
                  initial={{ opacity: 0, x: 24, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.25, ease: EASE_PREMIUM }}
                >
                  <motion.div
                    animate={{ y: [0, i % 2 === 0 ? -9 : 9, 0] }}
                    transition={{ duration: 2.8 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                    whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? -2 : 2 }}
                    className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-deep-navy/5 pl-2.5 pr-5 py-2.5 cursor-default"
                  >
                    <motion.div
                      animate={{ boxShadow: ["0 0 0 0 rgba(0,114,189,0.3)", "0 0 0 9px rgba(0,114,189,0)"] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: i * 0.4 }}
                      className="w-10 h-10 rounded-xl bg-primary-blue flex items-center justify-center shrink-0 shadow-sm"
                    >
                      <service.icon size={18} className="text-white" />
                    </motion.div>
                    <p className="text-sm font-bold text-deep-navy leading-tight whitespace-nowrap">{service.label}</p>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Floating Stats Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 glass p-8 rounded-[32px] shadow-2xl z-20 hidden lg:block"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gold-accent rounded-2xl flex items-center justify-center text-white">
                <Users size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold text-deep-navy">18+</p>
                <p className="text-xs font-bold text-deep-navy/40 uppercase tracking-widest">Years Expertise</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Success Badge */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-10 bg-primary-blue/80 backdrop-blur-md border border-white/30 p-6 rounded-full shadow-2xl z-20 hidden lg:block"
          >
            <div className="text-center text-white">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter">Success Rate</p>
            </div>
          </motion.div>

          {/* Decorative shapes */}
          <motion.div
            style={{ x: blob3X, y: blob3Y }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl -z-10"
          ></motion.div>
          <motion.div
            style={{ x: blob4X, y: blob4Y }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -z-10"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
