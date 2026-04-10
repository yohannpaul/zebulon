import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

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
      {count}{suffix || (value.includes("+") ? "+" : "")}
    </span>
  );
}

export default function SuccessNumbers() {
  const stats = [
    { label: "Years of Expertise", value: "15+" },
    { label: "Core Services", value: "4" },
    { label: "Year Founded", value: "2020" },
    { label: "Customized Solutions", value: "100%" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
          alt="Business Building" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/95 to-primary-blue/90 mix-blend-multiply"></div>
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

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif group-hover:text-gold-accent transition-colors duration-300">
              <Counter value={stat.value} suffix={stat.value === "100%" ? "%" : ""} />
            </h3>
            <div className="w-12 h-1 bg-gold-accent mx-auto mb-4 group-hover:w-20 transition-all duration-300"></div>
            <p className="text-white/70 text-sm md:text-base font-bold uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
