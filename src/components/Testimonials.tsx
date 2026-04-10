import Section from "./Section";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Zebulon Consulting brought real clarity and structure to our team development efforts.",
      author: "Rajesh M.",
      role: "Operations Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Their consulting approach was practical, responsive, and aligned exactly with our business needs.",
      author: "Priya S.",
      role: "HR Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "A reliable partner for capability building, HR support, and operational improvement.",
      author: "Anil K.",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Success Stories</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What Clients Say</h2>
        <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative group"
          >
            <Quote className="text-primary-blue/5 absolute top-6 right-6 group-hover:text-primary-blue/20 transition-colors" size={64} />
            <p className="text-lg text-deep-navy/80 italic mb-10 leading-relaxed relative z-10">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-accent shadow-md">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-bold text-deep-navy text-lg">{t.author}</p>
                <p className="text-sm text-primary-blue font-bold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
