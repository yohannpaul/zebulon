import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Tint of the cursor-follow glow — matches the section it sits on. */
  color?: "gold" | "blue";
}

/**
 * Wraps a card (e.g. `<SpotlightCard><Card>...</Card></SpotlightCard>`) with a
 * cursor-follow radial glow, replacing the site's old uniform `y: -8` lift with
 * a more tactile, cursor-aware hover. The glow renders as the last child so it
 * always paints on top of the wrapped card, using `soft-light` blend so it warms
 * the surface instead of covering it — works over glass, white, or dark cards.
 */
export default function SpotlightCard({ children, className = "", color = "gold" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ opacity: 0, x: 50, y: 50 });

  const tint = color === "gold" ? "200,134,46" : "45,127,176";

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      opacity: 1,
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleLeave = () => setGlow((g) => ({ ...g, opacity: 0 }));

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] mix-blend-soft-light transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, rgba(${tint},0.9), transparent 70%)`,
        }}
      />
    </div>
  );
}
