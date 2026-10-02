import { useState, type CSSProperties, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const [glowStyle, setGlowStyle] = useState({ "--x": "50%", "--y": "50%" } as CSSProperties);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowStyle({ "--x": `${x}%`, "--y": `${y}%` } as CSSProperties);
  };

  return (
    <Section dark className="text-center" backdrop={<GradientBackdrop variant="dark" />}>
      <div className="max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-gold-accent mx-auto mb-6 flex items-center justify-center text-deep-navy shadow-md">
          <MessageCircle size={24} />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's talk about what you need.
        </h2>
        <p className="text-lg text-white/70 mb-10 leading-relaxed">
          Tell us what you're trying to solve, and we'll help you figure out the right way forward.
        </p>
        <motion.div
          onMouseMove={handleMouseMove}
          style={glowStyle}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-block"
        >
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at var(--x) var(--y), rgba(200,134,46,0.35), transparent 60%)",
            }}
          ></div>
          <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg font-bold shadow-2xl">
            <Link to="/contact">
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
