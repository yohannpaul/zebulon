import { motion } from "motion/react";
import { ReactNode } from "react";
import { EASE_PREMIUM } from "../lib/motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  backdrop?: ReactNode;
}

export default function Section({ children, className = "", id, dark = false, backdrop }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM }}
      className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-24 ${dark ? "bg-deep-navy text-white" : ""} ${backdrop ? "overflow-hidden" : ""} ${className}`}
    >
      {backdrop}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}
