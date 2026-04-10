import Section from "./Section";
import { GraduationCap, Users, BarChart3, Headphones, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <GraduationCap size={32} className="text-primary-blue" />,
      title: "Training & Development",
      description: "Tailored learning programs that improve leadership, soft skills, communication, and team performance.",
    },
    {
      icon: <Users size={32} className="text-primary-blue" />,
      title: "HR Operations",
      description: "Structured HR support that improves people processes and workforce coordination.",
    },
    {
      icon: <BarChart3 size={32} className="text-primary-blue" />,
      title: "Digital Marketing",
      description: "Strategic support to enhance digital visibility, brand presence, and audience engagement.",
    },
    {
      icon: <Headphones size={32} className="text-primary-blue" />,
      title: "Help Desk Support",
      description: "Dependable support solutions for smoother internal and customer-facing service experiences.",
    },
  ];

  const courses = [
    { title: "Leadership Excellence", icon: <BookOpen size={24} /> },
    { title: "HR Strategy", icon: <BookOpen size={24} /> },
    { title: "Digital Growth", icon: <BookOpen size={24} /> },
  ];

  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
        <p className="text-lg text-deep-navy/60 max-w-2xl mx-auto">
          Integrated consulting and support services designed to help organizations improve performance and impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-[16px] shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-2xl"
          >
            <div className="w-16 h-16 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
              <div className="group-hover:text-white transition-colors">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-deep-navy">{service.title}</h3>
            <p className="text-deep-navy/70 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Courses Sub-section */}
      <div className="bg-gray-light p-10 md:p-16 rounded-[32px]">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">Professional Courses</h3>
            <p className="text-deep-navy/60 max-w-md">
              Specialized certification programs to empower your workforce with modern skills.
            </p>
          </div>
          <Link to="/services" className="bg-deep-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-blue transition-colors">
            View All Courses
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold-accent/10 text-gold-accent rounded-xl flex items-center justify-center">
                {course.icon}
              </div>
              <span className="font-bold text-lg">{course.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
