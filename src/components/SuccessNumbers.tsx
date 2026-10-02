import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Building2, BookOpen, Users, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "./SpotlightCard";
import { staggerContainer, fadeInUp } from "../lib/motion";

function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  // Extract number from string (e.g., "15+" -> 15)
  const target = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}{suffix || (value.includes("+") ? "+" : "")}
    </span>
  );
}

export default function SuccessNumbers() {
  const stats = [
    { label: "Organisations", value: "60+", icon: Building2 },
    { label: "Programs", value: "1200+", icon: BookOpen },
    { label: "Experts", value: "50+", icon: Users },
    { label: "Professionals Trained", value: "30,000+", icon: GraduationCap },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* On-brand gradient mesh background (no generic stock photo) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-deep-navy via-[#1d3b57] to-primary-blue">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-blue/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold-accent/20 blur-3xl"></div>
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0L50 14.4v28.8L25 43.4L0 28.8V14.4z" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <Badge variant="outline" className="h-auto text-gold-accent border-gold-accent/30 bg-gold-accent/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5">
            Our Work in Numbers
          </Badge>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
        {stats.map((stat, index) => (
          <SpotlightCard key={index} color="gold" className="rounded-3xl">
            <motion.div
              custom={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="glass-dark rounded-3xl p-5 sm:p-6 md:p-8 text-center group"
            >
              <div className="icon-pop w-14 h-14 rounded-full bg-gold-accent mx-auto mb-5 flex items-center justify-center text-deep-navy shadow-md">
                <stat.icon size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-serif group-hover:text-gold-accent transition-colors duration-300 break-words">
                <Counter value={stat.value} />
              </h3>
              <div className="w-12 h-1 bg-gold-accent mx-auto mb-4 group-hover:w-20 transition-all duration-300"></div>
              <p className="text-white/70 text-sm md:text-base font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          </SpotlightCard>
        ))}
        </motion.div>
      </div>
    </section>
  );
}
