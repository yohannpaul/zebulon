import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { motion } from "motion/react";
import { GraduationCap, Users, Presentation, MessageCircleHeart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function LearningPage() {
  useDocumentMeta(
    "Learning & Development Solutions | Zebulon Consulting",
    "Corporate training, leadership development, and workshop facilitation designed to build stronger, more capable teams."
  );

  const offerings = [
    {
      icon: <GraduationCap size={32} />,
      title: "Corporate Training",
    },
    {
      icon: <Users size={32} />,
      title: "Leadership Development",
    },
    {
      icon: <Presentation size={32} />,
      title: "Workshops",
    },
    {
      icon: <MessageCircleHeart size={32} />,
      title: "Coaching",
    },
  ];

  return (
    <div className="pt-20">
      <Section className="relative bg-bg-light text-deep-navy pt-40 pb-32 md:pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/learning-hero-illustration.jpg"
            alt="Illustration of corporate learning and leadership development"
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
              Learning
            </h1>
            <p className="text-xl text-deep-navy max-w-xl mx-auto">
              Developing people, managers and teams with learning that is practical, relevant and
              built around real workplace needs.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
            What's Included
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Where We Help</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {offerings.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -8 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass text-center group h-full">
                  <CardContent className="p-8">
                    <div className="icon-pop w-16 h-16 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 mx-auto text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy">{item.title}</h3>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="relative bg-deep-navy text-white overflow-hidden">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Talk to us about your learning needs
          </h2>
          <p className="text-white/60 mb-10">
            Tell us where your teams need to grow, and we'll help you build a learning approach
            that fits.
          </p>
          <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg shadow-xl">
            <Link to="/contact">
              Get in Touch <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
