import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import { GraduationCap, Users, Compass } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeInUp } from "../lib/motion";

export default function Services() {
  const services = [
    {
      icon: <GraduationCap size={32} className="text-white group-hover:text-deep-navy transition-colors duration-300" />,
      image: "/images/learning-illustration.jpg",
      title: "Learning",
      description:
        "Developing people, managers and teams with learning that is practical, relevant and built around real workplace needs.",
      tags: ["Corporate Training", "Leadership Development", "Workshops", "Coaching"],
      href: "/learning",
      linkText: "Explore Learning",
    },
    {
      icon: <Users size={32} className="text-white group-hover:text-deep-navy transition-colors duration-300" />,
      image: "/images/hr-solutions-illustration.jpg",
      title: "HR Solutions",
      description:
        "Practical HR support to help organisations find the right people and put stronger people practices in place.",
      tags: ["Recruitment", "HR Policies & Process", "Performance Management", "Employee Engagement"],
      href: "/hr-solutions",
      linkText: "Explore HR Solutions",
    },
    {
      icon: <Compass size={32} className="text-white group-hover:text-deep-navy transition-colors duration-300" />,
      image: "/images/people-advisory-illustration.jpg",
      title: "People Advisory",
      description:
        "Helping organisations understand people and performance challenges, identify what needs to change and build the right way forward.",
      tags: ["L&D Strategy", "Capability Building", "Organisation Development", "Performance Consulting"],
      href: "/people-advisory",
      linkText: "Explore People Advisory",
    },
  ];

  return (
    <Section id="services" backdrop={<GradientBackdrop variant="light" />}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
        <p className="text-lg text-deep-navy/60 max-w-2xl mx-auto">
          Learning, HR and people advisory solutions built around what your organisation actually needs.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} custom={index} variants={fadeInUp} whileHover={{ y: -8 }}>
            <SpotlightCard color="gold" className="h-full rounded-xl">
              <Card className="glass group transition-shadow duration-300 hover:shadow-2xl h-full flex flex-col">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <CardHeader>
                  <div className="icon-pop w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-gold-accent transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-serif text-2xl font-bold text-deep-navy">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-deep-navy/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-transparent border-none px-6 pb-6 pt-0">
                  <Button variant="ghost" asChild className="px-0 text-primary font-bold hover:bg-transparent hover:text-primary/70">
                    <Link to={service.href}>
                      {service.linkText}{" "}
                      <span className="inline-block transition-transform duration-300 group-hover/button:translate-x-1.5">→</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
