import Section from "./Section";
import { Check } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    "Consulting grounded in 15+ years real business experience",
    "Cross-industry perspective and practical solutions",
    "Integrated multi-service support under one partner",
    "Fully customized — no generic recommendations",
    "Hyderabad-based with a growing professional presence",
  ];

  const stats = [
    { label: "Years Exp.", value: "15+" },
    { label: "Core Services", value: "4" },
    { label: "Founded", value: "2020" },
    { label: "Customized", value: "100%" },
  ];

  return (
    <Section id="why-us" className="bg-gray-light">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Organizations Choose Zebulon</h2>
          <ul className="space-y-5">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-lg text-deep-navy/80 font-medium">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-deep-navy p-8 rounded-2xl text-center shadow-xl">
              <p className="text-gold-accent text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
