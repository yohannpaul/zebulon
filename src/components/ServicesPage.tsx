import Section from "./Section";
import { motion } from "motion/react";
import { GraduationCap, Users, BarChart3, Headphones, BookOpen, Award, Clock, Star, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <GraduationCap size={40} />,
      title: "Training & Development",
      description: "Tailored learning programs that improve leadership, soft skills, communication, and team performance.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users size={40} />,
      title: "HR Operations",
      description: "Structured HR support that improves people processes and workforce coordination.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Digital Marketing",
      description: "Strategic support to enhance digital visibility, brand presence, and audience engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Headphones size={40} />,
      title: "Help Desk Support",
      description: "Dependable support solutions for smoother internal and customer-facing service experiences.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const courses = [
    { title: "Leadership Excellence", duration: "8 Weeks", level: "Advanced", rating: 4.9 },
    { title: "Strategic HR Management", duration: "6 Weeks", level: "Intermediate", rating: 4.8 },
    { title: "Digital Growth Hacking", duration: "4 Weeks", level: "Beginner", rating: 4.7 },
    { title: "Customer Success Mastery", duration: "5 Weeks", level: "Intermediate", rating: 4.9 },
  ];

  return (
    <div className="pt-20">
      <Section className="relative bg-gold-accent text-deep-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&w=1920&q=80" 
            alt="Services" 
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
            Our Services
          </motion.h1>
          <p className="text-xl text-deep-navy max-w-3xl mx-auto">
            Comprehensive business solutions designed to empower your organization and drive sustainable growth.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="w-20 h-20 bg-primary-blue/10 rounded-[32px] flex items-center justify-center text-primary-blue mb-6">
                  {service.icon}
                </div>
                <h2 className="text-4xl font-bold mb-6 text-deep-navy">{service.title}</h2>
                <p className="text-lg text-deep-navy/70 leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="bg-deep-navy text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-blue transition-all">
                  Learn More <ArrowRight size={20} />
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Courses Sub-section */}
      <Section className="relative bg-deep-navy text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-4 block">Skill Transformation</span>
            <h2 className="text-4xl font-bold mb-4">Professional Courses</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Upskill your team with our industry-leading certification programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 bg-gold-accent/10 text-gold-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-accent group-hover:text-deep-navy transition-all">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock size={16} /> {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} /> {course.level}
                  </div>
                  <div className="flex items-center gap-2 text-gold-accent">
                    <Star size={16} fill="currentColor" /> {course.rating} / 5.0
                  </div>
                </div>
                <button className="w-full mt-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-gold-accent hover:text-deep-navy transition-all">
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
