import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowRight, TrendingUp, Sparkles, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function CareersPage() {
  useDocumentMeta(
    "Careers | Zebulon Consulting",
    "Explore open roles at Zebulon Consulting and join a team helping organizations build stronger teams and better processes."
  );

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
      <Section className="relative bg-bg-light text-deep-navy pt-40 pb-32 md:pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/careers-hero-illustration.jpg"
            alt="Join the Zebulon Consulting team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none -z-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl bg-white/20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-deep-navy/10"></div>
        </div>
        <div className="relative text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-12 rounded-3xl inline-block"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-deep-navy">
              Join Our Team
            </h1>
            <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto font-medium">
              Build your career with a firm that values expertise, integrity and transformation.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
              Our Culture
            </Badge>
            <h2 className="text-4xl font-bold mb-8">Why Work With Us?</h2>
            <div className="space-y-8">
              {[
                { title: "Growth Mindset", desc: "We invest in your professional development through continuous learning and mentorship.", icon: TrendingUp },
                { title: "Impactful Work", desc: "Help organizations transform and see the real-world results of your efforts.", icon: Sparkles },
                { title: "Collaborative Culture", desc: "Work alongside industry veterans with 15+ years of experience in a flat hierarchy.", icon: Handshake }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="icon-pop w-16 h-16 bg-bg-light shadow-lg rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                    <item.icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-deep-navy">{item.title}</h3>
                    <p className="text-deep-navy/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden shadow-2xl relative group shine-sweep">
            <img
              src="/images/careers-culture-illustration.jpg"
              alt="Collaborative, mentorship-driven culture at Zebulon Consulting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent"></div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
            Opportunities
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div key={i} whileHover={{ y: -6 }}>
              <SpotlightCard color="blue" className="rounded-xl">
                <Card className="glass flex flex-col md:flex-row justify-between items-center gap-8 group">
                  <CardContent className="flex flex-col md:flex-row justify-between items-center gap-8 w-full p-6">
                    <div className="flex items-center gap-8">
                      <div className="w-16 h-16 glass-subtle rounded-2xl flex items-center justify-center text-deep-navy group-hover:bg-primary-blue group-hover:text-white transition-colors">
                        <Briefcase size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-deep-navy group-hover:text-primary-blue transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-6 mt-3 text-sm text-deep-navy/50 font-bold uppercase tracking-wider">
                          <span className="flex items-center gap-2"><MapPin size={16} className="text-gold-accent" /> {job.location}</span>
                          <span className="flex items-center gap-2"><Clock size={16} className="text-gold-accent" /> {job.type}</span>
                          <Badge variant="secondary" className="h-auto px-4 py-1 rounded-full text-xs">{job.department}</Badge>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="rounded-xl font-bold w-full md:w-auto shadow-lg hover:shadow-primary-blue/20">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gray-light p-12 rounded-[40px]">
          <h3 className="text-2xl font-bold mb-4">Don't see a perfect fit?</h3>
          <p className="text-deep-navy/60 mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals to join our mission. Send us your CV and we'll keep you in mind for future openings.
          </p>
          <Button variant="link" asChild className="gap-2 text-primary-blue font-bold text-base">
            <Link to="/contact">
              Contact Recruitment <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
