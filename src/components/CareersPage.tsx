import Section from "./Section";
import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Management Consultant",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Consulting",
    },
    {
      title: "HR Operations Specialist",
      location: "Remote / Hyderabad",
      type: "Full-time",
      department: "Human Resources",
    },
    {
      title: "Digital Marketing Manager",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Marketing",
    },
    {
      title: "Technical Support Lead",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Help Desk",
    },
  ];

  return (
    <div className="pt-20">
      <Section className="relative bg-gold-accent text-deep-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80" 
            alt="Careers" 
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
            Join Our Team
          </motion.h1>
          <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto font-medium">
            Build your career with a firm that values expertise, integrity and transformation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Our Culture</span>
            <h2 className="text-4xl font-bold mb-8">Why Work With Us?</h2>
            <div className="space-y-8">
              {[
                { title: "Growth Mindset", desc: "We invest in your professional development through continuous learning and mentorship.", icon: "📈" },
                { title: "Impactful Work", desc: "Help organizations transform and see the real-world results of your efforts.", icon: "✨" },
                { title: "Collaborative Culture", desc: "Work alongside industry veterans with 15+ years of experience in a flat hierarchy.", icon: "🤝" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-2xl group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-deep-navy">{item.title}</h3>
                    <p className="text-deep-navy/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
              alt="Office Life" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">Opportunities</span>
          <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row justify-between items-center gap-8 group"
            >
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-deep-navy group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-deep-navy group-hover:text-primary-blue transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 mt-3 text-sm text-deep-navy/50 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-2"><MapPin size={16} className="text-gold-accent" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16} className="text-gold-accent" /> {job.type}</span>
                    <span className="bg-primary-blue/10 text-primary-blue px-4 py-1 rounded-full text-xs">{job.department}</span>
                  </div>
                </div>
              </div>
              <button className="bg-deep-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-blue transition-all w-full md:w-auto shadow-lg hover:shadow-primary-blue/20">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gray-light p-12 rounded-[40px]">
          <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
          <p className="text-deep-navy/60 mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals to join our mission. Send us your CV and we'll keep you in mind for future openings.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary-blue font-bold hover:gap-4 transition-all">
            Contact Recruitment <ArrowRight size={20} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
