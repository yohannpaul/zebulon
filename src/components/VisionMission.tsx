import Section from "./Section";

export default function VisionMission() {
  return (
    <Section className="bg-gray-light">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="group relative bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
              alt="Vision" 
              className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative p-10 md:p-12">
            <div className="w-16 h-1 bg-gold-accent mb-8"></div>
            <h3 className="text-3xl font-bold mb-6 text-deep-navy">Our Vision</h3>
            <p className="text-xl text-deep-navy/70 leading-relaxed font-medium">
              To be a trusted consulting partner for organizations seeking long-term growth through stronger people, smarter systems, and more effective business support.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>

        {/* Mission Card */}
        <div className="group relative bg-deep-navy rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
              alt="Mission" 
              className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative p-10 md:p-12">
            <div className="w-16 h-1 bg-gold-accent mb-8"></div>
            <h3 className="text-3xl font-bold mb-6 text-white">Our Mission</h3>
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              To deliver high-quality consulting and support services that build workforce capability, improve operational efficiency, strengthen brand presence, and create better service outcomes for every client.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </div>
      </div>
    </Section>
  );
}
