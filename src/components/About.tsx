import Section from "./Section";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const bullets = [
    "Cross-industry consulting support",
    "15+ years of professional expertise per consultant",
    "Customized solutions built around business needs",
  ];

  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
            <img 
              src="src/yohannimg.jpg" 
              alt="Consulting Team" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <p className="text-deep-navy font-bold text-2xl">15+ Years</p>
              <p className="text-deep-navy/60 text-sm font-medium uppercase tracking-wider">Industry Experience</p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-blue/10 rounded-full -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-accent/10 rounded-full -z-10"></div>
        </div>

        <div>
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-navy">About Zebulon Consulting</h2>
          <p className="text-lg text-deep-navy/80 mb-8 leading-relaxed">
            Zebulon Consulting is a management consulting firm committed to helping organizations build stronger teams, better processes, and more effective business support systems. We work across diverse industries to deliver training, human resource operations, digital marketing, and help desk support backed by over 15 years of real-world experience per consultant.
          </p>
          <ul className="space-y-4 mb-10">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-deep-navy/90 font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="inline-flex items-center gap-2 bg-deep-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-blue transition-all group">
            Learn More About Us <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
