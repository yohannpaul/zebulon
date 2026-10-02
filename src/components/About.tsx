import Section from "./Section";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EASE_PREMIUM } from "../lib/motion";

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group shine-sweep">
            <img
              src="/images/yohannimg.jpg"
              alt="Consulting Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 glass p-5 rounded-xl flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gold-accent/15 flex items-center justify-center text-gold-accent flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-deep-navy font-bold text-2xl">15+ Years</p>
                <p className="text-deep-navy/60 text-sm font-medium uppercase tracking-wider">Industry Experience</p>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-blue/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-accent/10 rounded-full -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_PREMIUM }}
        >
          <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
            About Zebulon
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-navy">People. Performance. Progress.</h2>
          <p className="text-lg text-deep-navy/80 mb-6 leading-relaxed">
            Zebulon Consulting works with organisations to develop their people, strengthen their teams and build better people practices.
          </p>
          <p className="text-lg text-deep-navy/80 mb-6 leading-relaxed">
            Our work spans Learning & Development, HR and People Advisory — from leadership development and corporate learning to recruitment, HR solutions and organisational consulting.
          </p>
          <p className="text-lg text-deep-navy/80 mb-10 leading-relaxed">
            We don't believe in one-size-fits-all solutions. We understand what the organisation needs, identify the gaps and build solutions that are practical, relevant and made to work in the real world.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Button variant="secondary" size="lg" asChild className="rounded-xl group">
              <Link to="/about">
                Know More About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
