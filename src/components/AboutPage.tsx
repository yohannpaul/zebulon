import Section from "./Section";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section className="relative bg-gold-accent text-deep-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About Zebulon Consulting
          </motion.h1>
          <p className="text-xl text-deep-navy max-w-3xl mx-auto">
            A legacy of excellence, a future of transformation. We are more than consultants; we are your partners in growth.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-[32px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary-blue/20 mix-blend-multiply"></div>
          </div>
          <div>
            <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Heritage</span>
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-deep-navy/70 mb-6 leading-relaxed">
              Founded in 2020, Zebulon Consulting was born out of a desire to bridge the gap between traditional management consulting and practical, hands-on business support. Our founders saw that many organizations struggled not with strategy, but with execution and people development.
            </p>
            <p className="text-lg text-deep-navy/70 mb-6 leading-relaxed">
              With over 15 years of experience per consultant, we bring a wealth of cross-industry knowledge to every project. We've worked with startups, SMEs, and large corporations across India and beyond, helping them navigate the complexities of modern business.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-light">
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">What Drives Us</span>
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Integrity", 
              desc: "We believe in honest, transparent consulting that puts the client's needs first.",
              icon: "⚖️"
            },
            { 
              title: "Excellence", 
              desc: "We strive for the highest quality in every deliverable, from training to tech support.",
              icon: "🏆"
            },
            { 
              title: "Innovation", 
              desc: "We stay ahead of industry trends to provide forward-thinking solutions.",
              icon: "💡"
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 relative overflow-hidden group"
            >
              <div className="text-4xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-deep-navy group-hover:text-primary-blue transition-colors">{value.title}</h3>
              <p className="text-deep-navy/70 leading-relaxed">{value.desc}</p>
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
