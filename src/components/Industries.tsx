import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "../lib/motion";
import {
  ShoppingBag,
  Headphones,
  Cpu,
  Laptop,
  HeartPulse,
  Pill,
  Factory,
  Plane,
  ShoppingCart,
  Store,
  GraduationCap,
} from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Retail & Lifestyle", icon: ShoppingBag },
    { name: "BPO & Customer Operations", icon: Headphones },
    { name: "Consumer Electronics", icon: Cpu },
    { name: "Technology & SaaS", icon: Laptop },
    { name: "Healthcare & Life Sciences", icon: HeartPulse },
    { name: "Pharmaceuticals", icon: Pill },
    { name: "Manufacturing & Engineering", icon: Factory },
    { name: "Hospitality & Travel", icon: Plane },
    { name: "FMCG & Consumer Goods", icon: ShoppingCart },
    { name: "E-commerce & Marketplaces", icon: Store },
    { name: "Education", icon: GraduationCap },
  ];

  return (
    <Section backdrop={<GradientBackdrop variant="light" />}>
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
          Where We've Worked
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Work With</h2>
        <p className="text-lg text-deep-navy/60 leading-relaxed">
          Every industry has its own people, business and capability challenges. Our experience
          across sectors helps us understand the context while building solutions around each
          organisation.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            custom={index}
            variants={fadeInUp}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 rounded-2xl border border-deep-navy/10 bg-white/70 backdrop-blur-sm px-5 py-4 shadow-sm hover:shadow-xl hover:border-primary-blue/40 transition-shadow duration-300 cursor-default"
          >
            <div className="icon-pop w-14 h-14 shrink-0 rounded-xl bg-primary-blue flex items-center justify-center shadow-md group-hover:bg-gold-accent transition-colors duration-300">
              <industry.icon
                size={28}
                className="text-white group-hover:text-deep-navy transition-colors duration-300"
              />
            </div>
            <span className="text-sm md:text-base font-bold text-deep-navy leading-snug">
              {industry.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
