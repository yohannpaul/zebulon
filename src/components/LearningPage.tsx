import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { motion } from "motion/react";
import {
  GraduationCap,
  Users,
  Presentation,
  MessageCircleHeart,
  Handshake,
  Route,
  Target,
  Megaphone,
  UsersRound,
  Brain,
  Headset,
  Globe2,
  Search,
  Stethoscope,
  PencilRuler,
  Rocket,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function LearningPage() {
  useDocumentMeta(
    "Learning & Development Solutions | Zebulon Consulting",
    "Practical learning experiences designed around your people, their roles and the challenges they face at work."
  );

  const solutions = [
    {
      icon: GraduationCap,
      title: "Corporate Training",
      description: "Skill and behaviour-focused learning for employees and teams.",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "First-time managers through experienced leaders, including longer leadership journeys.",
    },
    {
      icon: Presentation,
      title: "Workshops",
      description: "Focused interventions around a specific challenge, behaviour or business need.",
    },
    {
      icon: MessageCircleHeart,
      title: "Coaching",
      description: "Individual or small-group development where a more personalised approach is required.",
    },
    {
      icon: Handshake,
      title: "Team Development",
      description: "Interventions around collaboration, trust, communication, accountability, conflict and team effectiveness.",
    },
    {
      icon: Route,
      title: "Custom Learning Programs",
      description: "Multi-session or longer-term learning journeys designed around a specific organisational need.",
    },
  ];

  const expertiseAreas = [
    {
      icon: Target,
      title: "Leadership & Management",
      topics: ["People Management", "Manager Effectiveness", "Decision Making", "Delegation", "Feedback", "Coaching Skills", "Leading Change"],
    },
    {
      icon: Megaphone,
      title: "Communication & Influence",
      topics: ["Business Communication", "Executive Communication", "Presentation Skills", "Assertiveness", "Influencing", "Stakeholder Management"],
    },
    {
      icon: UsersRound,
      title: "Team Effectiveness",
      topics: ["Collaboration", "Trust", "Accountability", "Conflict Management", "Team Communication"],
    },
    {
      icon: Brain,
      title: "Personal Effectiveness",
      topics: ["Ownership", "Time & Priority Management", "Problem Solving", "Decision Making", "Emotional Intelligence", "Adaptability"],
    },
    {
      icon: Headset,
      title: "Customer & Service Excellence",
      topics: ["Customer Experience", "Customer Communication", "Difficult Conversations", "Service Mindset", "Escalation Management"],
    },
    {
      icon: Globe2,
      title: "Cross-Cultural Effectiveness",
      topics: ["Working Across Cultures", "Global Communication", "Cultural Awareness", "Working with Global Stakeholders"],
    },
  ];

  const buildSteps = [
    { icon: Search, label: "Understand", description: "The business need and context." },
    { icon: Stethoscope, label: "Diagnose", description: "The capability or behaviour gap." },
    { icon: PencilRuler, label: "Design", description: "The right learning intervention." },
    { icon: Rocket, label: "Deliver", description: "Practical, engaging learning." },
    { icon: TrendingUp, label: "Reinforce", description: "Support application beyond the session." },
  ];

  const formats = ["In-person", "Virtual", "Blended", "Workshops", "Learning Journeys", "1:1", "Small Group Coaching"];

  const audienceChain = ["Individual Contributors", "New Managers", "Experienced Managers", "Senior Leaders"];
  const audienceAlso = "Sales Teams, Customer facing teams, Leadership Teams";

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-deep-navy max-w-3xl mx-auto">
              Learning that works beyond the classroom.
            </h1>
            <p className="text-xl text-deep-navy max-w-xl mx-auto">
              Practical learning experiences designed around your people, their roles and the
              challenges they face at work.
            </p>
            <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg shadow-xl mt-8">
              <Link to="/contact">
                Talk to Us <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold text-deep-navy leading-snug">
            We don't start with a training topic.
            <br />
            We start with what needs to change.
          </p>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto mt-8"></div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -8 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass text-center group h-full">
                  <CardContent className="p-8">
                    <div className="icon-pop w-16 h-16 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-6 mx-auto text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <item.icon size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-16">
          <Badge variant="outline" className="h-auto text-primary border-primary/30 bg-primary/5 font-bold uppercase tracking-widest text-sm px-4 py-1.5 mb-4">
            What We Cover
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Areas of Expertise</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div key={index} whileHover={{ y: -6 }}>
              <SpotlightCard color="blue" className="rounded-xl h-full">
                <Card className="glass h-full">
                  <CardContent className="p-7">
                    <div className="icon-pop w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center mb-4 text-primary-blue">
                      <area.icon size={24} />
                    </div>
                    <h3 className="text-base font-bold text-deep-navy mb-2">{area.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">
                      {area.topics.join(" · ")}
                    </p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Build Learning</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {buildSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard color="gold" className="rounded-2xl h-full">
                <div className="glass p-6 rounded-2xl text-center h-full flex flex-col items-center">
                  <div className="icon-pop w-14 h-14 rounded-full bg-primary-blue/5 flex items-center justify-center mb-4 text-primary-blue">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-2">{step.label}</h3>
                  <p className="text-sm text-deep-navy/60 leading-relaxed">{step.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Learning Formats</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-20">
          {formats.map((format) => (
            <Badge
              key={format}
              className="h-auto bg-deep-navy text-white border-transparent rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              {format}
            </Badge>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Work With</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {audienceChain.map((stage) => (
            <div key={stage} className="flex items-center gap-3">
              <span className="glass px-5 py-2.5 rounded-full text-sm font-semibold text-deep-navy whitespace-nowrap">
                {stage}
              </span>
              <ArrowRight size={18} className="text-primary-blue/50 shrink-0" />
            </div>
          ))}
          <span className="glass px-5 py-2.5 rounded-full text-sm font-semibold text-deep-navy">
            {audienceAlso}
          </span>
        </div>
      </Section>

      <Section className="relative bg-deep-navy text-white overflow-hidden">
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What are you trying to develop?
          </h2>
          <p className="text-white/60 mb-10">
            Tell us what's happening with your people or teams. We'll help you work out what kind
            of learning intervention makes sense.
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
