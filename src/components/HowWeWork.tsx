import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Search, Hammer, Workflow, TrendingUp } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      icon: Search,
      label: "Understand",
      title: "Understand before we recommend.",
      description:
        "We take the time to understand the organisation, the people and the actual challenge before suggesting what needs to be done.",
    },
    {
      number: "02",
      icon: Hammer,
      label: "Build",
      title: "Build around the need.",
      description:
        "We don't start with a ready-made solution. The approach is shaped around the organisation, its context and what it is trying to achieve.",
    },
    {
      number: "03",
      icon: Workflow,
      label: "Apply",
      title: "Keep it practical.",
      description:
        "Ideas are useful only when they can be applied. Our work is designed to make sense in the real situations people and teams deal with every day.",
    },
    {
      number: "04",
      icon: TrendingUp,
      label: "Improve",
      title: "Focus on what changes.",
      description:
        "A completed workshop, hire or consulting project isn't the end goal. What matters is what improves as a result.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <Section backdrop={<GradientBackdrop variant="light" />}>
      <div className="text-center mb-16">
        <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
          Our Approach
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
        <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
      </div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative">
        {/* Connecting line — static track */}
        <div className="hidden md:block absolute left-[52px] top-4 bottom-4 w-px bg-primary-blue/15"></div>
        {/* Connecting line — scroll-driven fill */}
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="hidden md:block absolute left-[52px] top-4 bottom-4 w-px bg-gradient-to-b from-primary-blue to-gold-accent"
        ></motion.div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <SpotlightCard key={step.number} color="gold" className="rounded-[24px]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start glass p-8 md:p-10 rounded-[24px] group"
              >
                <step.icon
                  className="hidden md:block absolute top-6 right-8 text-primary-blue/10 group-hover:text-primary-blue/25 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
                  size={72}
                  strokeWidth={1.5}
                />
                <div className="flex items-center gap-5 md:w-32 flex-shrink-0">
                  <div className="icon-pop w-14 h-14 rounded-full glass-subtle flex items-center justify-center font-serif font-bold text-primary text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <span className="text-lg font-bold text-deep-navy uppercase tracking-wider md:hidden">
                    {step.label}
                  </span>
                </div>
                <div>
                  <span className="hidden md:block text-sm font-bold text-gold-accent uppercase tracking-widest mb-2">
                    {step.label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-deep-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-deep-navy/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
