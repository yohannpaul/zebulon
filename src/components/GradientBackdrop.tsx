interface GradientBackdropProps {
  variant?: "light" | "dark";
}

/**
 * Reusable decorative layer of blurred, low-opacity circles sitting behind
 * section content — gives glass surfaces something visually rich to blur over.
 * Mirrors the blob treatment used in Hero.tsx.
 */
export default function GradientBackdrop({ variant = "light" }: GradientBackdropProps) {
  const isDark = variant === "dark";

  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      <div
        className={`absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl ${
          isDark ? "bg-primary-blue/20" : "bg-primary-blue/10"
        }`}
      />
      <div
        className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDark ? "bg-gold-accent/15" : "bg-gold-accent/10"
        }`}
      />
      <div
        className={`absolute top-1/3 right-10 w-56 h-56 rounded-full blur-3xl ${
          isDark ? "bg-white/10" : "bg-primary-blue/10"
        }`}
      />
    </div>
  );
}
