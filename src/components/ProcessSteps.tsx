import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  label: string;
  description: string;
}

/**
 * Shared "how we work" process strip: five steps in a row, connected by a
 * scroll-driven progress line. Used identically across all three service
 * pages so the step cards stay uniformly sized and styled everywhere.
 */
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div ref={ref} className="relative max-w-6xl mx-auto">
      <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-primary-blue/15"></div>
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-primary-blue to-gold-accent"
      ></motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="icon-pop w-14 h-14 rounded-full bg-white border-2 border-primary-blue/20 flex items-center justify-center text-primary-blue mb-4 relative z-10 shadow-sm group-hover:border-gold-accent group-hover:text-gold-accent transition-colors">
              <step.icon size={22} />
            </div>
            <h3 className="text-base font-bold text-deep-navy mb-1.5">{step.label}</h3>
            <p className="text-sm text-deep-navy/60 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
