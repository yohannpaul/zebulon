import { useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface GlowCTAButtonProps {
  to: string;
  children: ReactNode;
}

/**
 * The same cursor-follow gold glow + accent button used in the homepage's
 * FinalCTA, factored out so the individual service pages' closing CTAs can
 * share the premium, interactive finish instead of a flat static button.
 */
export default function GlowCTAButton({ to, children }: GlowCTAButtonProps) {
  const [glowStyle, setGlowStyle] = useState({ "--x": "50%", "--y": "50%" } as CSSProperties);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowStyle({ "--x": `${x}%`, "--y": `${y}%` } as CSSProperties);
  };

  return (
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
          background: "radial-gradient(circle at var(--x) var(--y), rgba(200,134,46,0.35), transparent 60%)",
        }}
      ></div>
      <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg font-bold shadow-2xl">
        <Link to={to}>{children}</Link>
      </Button>
    </motion.div>
  );
}
