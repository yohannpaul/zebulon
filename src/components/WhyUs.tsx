import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import { Award, Globe, Handshake, SlidersHorizontal, MapPin, Clock, Layers, Calendar, Target } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    { text: "Consulting grounded in 15+ years real business experience", icon: Award },
    { text: "Cross-industry perspective and practical solutions", icon: Globe },
    { text: "Integrated multi-service support under one partner", icon: Handshake },
    { text: "Fully customized — no generic recommendations", icon: SlidersHorizontal },
    { text: "Hyderabad-based with a growing professional presence", icon: MapPin },
  ];

  const stats = [
    { label: "Years Exp.", value: "15+", icon: Clock },
    { label: "Core Services", value: "4", icon: Layers },
    { label: "Founded", value: "2020", icon: Calendar },
    { label: "Customized", value: "100%", icon: Target },
  ];

  return (
    <Section id="why-us" className="bg-gray-light" backdrop={<GradientBackdrop variant="light" />}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Organizations Choose Zebulon</h2>
          <ul className="space-y-5">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <div className="icon-pop w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white">
                  <reason.icon size={18} />
                </div>
                <span className="text-lg text-deep-navy/80 font-medium">{reason.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-deep-navy p-8 rounded-2xl text-center shadow-xl group hover:-translate-y-1 transition-transform duration-300">
              <div className="icon-pop w-11 h-11 rounded-xl bg-gold-accent mx-auto mb-4 flex items-center justify-center text-deep-navy shadow-md">
                <stat.icon size={20} />
              </div>
              <p className="text-gold-accent text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
