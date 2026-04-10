import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg-light">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-deep-navy/5 -skew-x-12 transform origin-top-right -z-10"></div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-bold mb-6 border border-primary-blue/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
            </span>
            Expert Management Consulting
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-deep-navy leading-[1.1] mb-6 font-serif">
            Transforming <span className="text-primary-blue">People</span>, Performance & Business Outcomes
          </h1>
          <p className="text-xl text-deep-navy/70 mb-10 leading-relaxed max-w-xl font-medium">
            Zebulon Consulting partners with organizations across industries to deliver high-quality training, HR operations, digital marketing and help desk support services backed by 15+ years of real-world consulting expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-deep-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-blue transition-all shadow-xl hover:shadow-primary-blue/20 flex items-center justify-center gap-2 group">
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="bg-white text-deep-navy border-2 border-deep-navy/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-light transition-all flex items-center justify-center">
              Our Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80" 
              alt="Consulting Excellence" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy/40 to-transparent"></div>
          </div>

          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl z-20 border border-gray-100 hidden lg:block"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gold-accent rounded-2xl flex items-center justify-center text-white">
                <Users size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold text-deep-navy">15+</p>
                <p className="text-xs font-bold text-deep-navy/40 uppercase tracking-widest">Years Expertise</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Success Badge */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-10 bg-primary-blue p-6 rounded-full shadow-2xl z-20 border-4 border-white hidden lg:block"
          >
            <div className="text-center text-white">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter">Success Rate</p>
            </div>
          </motion.div>

          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-accent/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
