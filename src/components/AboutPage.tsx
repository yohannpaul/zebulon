import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { motion } from "motion/react";
import { Shield, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function AboutPage() {
  useDocumentMeta(
    "About Us | Zebulon Consulting",
    "Learn about Zebulon Consulting's mission, values, and the team driving transformation for organizations across industries."
  );

  return (
    <div className="pt-20">
      <Section className="relative bg-bg-light text-deep-navy pt-40 pb-32 md:pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero-illustration.jpg"
            alt="Illustration representing Zebulon Consulting's legacy of excellence and future transformation"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative blurred blobs, tuned for legibility over the illustrated background */}
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
              About Zebulon Consulting
            </h1>
            <p className="text-xl text-deep-navy max-w-3xl mx-auto">
              A legacy of excellence, a future of transformation. We are more than consultants; we are your partners in growth.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-[32px] shadow-2xl shine-sweep bg-bg-light">
            <img
              src="/images/about-story-illustration.jpg"
              alt="Zebulon Consulting's journey of growth and transformation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div>
            <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
              Our Heritage
            </Badge>
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <p className="text-lg text-deep-navy/70 mb-6 leading-relaxed">
              Founded in 2020, Zebulon Consulting was born out of a desire to bridge the gap between traditional management consulting and practical, hands-on business support. Our founders saw that many organizations struggled not with strategy, but with execution and people development.
            </p>
            <p className="text-lg text-deep-navy/70 mb-6 leading-relaxed">
              With over 15 years of experience per consultant, we bring a wealth of cross-industry knowledge to every project. We've worked with startups, SMEs, and large corporations across India and beyond, helping them navigate the complexities of modern business.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-light">
        <div className="text-center mb-16">
          <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
            What Drives Us
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We believe in honest, transparent consulting that puts the client's needs first.",
              icon: Shield
            },
            {
              title: "Excellence",
              desc: "We strive for the highest quality in every deliverable, from training to tech support.",
              icon: Award
            },
            {
              title: "Innovation",
              desc: "We stay ahead of industry trends to provide forward-thinking solutions.",
              icon: Lightbulb
            }
          ].map((value, i) => (
            <motion.div key={i} whileHover={{ y: -8 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass relative overflow-hidden group h-full">
                  <CardContent className="p-8">
                    <div className="icon-pop w-16 h-16 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <value.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-deep-navy group-hover:text-primary-blue transition-colors">{value.title}</h3>
                    <p className="text-deep-navy/70 leading-relaxed">{value.desc}</p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gold-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
