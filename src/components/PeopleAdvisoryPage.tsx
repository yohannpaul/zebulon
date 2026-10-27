import Section from "./Section";
import SpotlightCard from "./SpotlightCard";
import { motion } from "motion/react";
import {
  Compass,
  Network,
  Award,
  Sparkles,
  RefreshCw,
  TrendingUp,
  Search,
  Stethoscope,
  Lightbulb,
  Rocket,
  Eye,
  Briefcase,
  Microscope,
  Handshake,
  GraduationCap,
  Target,
  UsersRound,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function PeopleAdvisoryPage() {
  useDocumentMeta(
    "People Advisory | Zebulon Consulting",
    "We work with organisations to understand their people and performance challenges, identify what needs to change and develop practical ways to address them."
  );

  const services = [
    {
      number: "01",
      icon: Compass,
      title: "L&D Strategy & Advisory",
      description: "Aligning learning strategies with business needs.",
    },
    {
      number: "02",
      icon: Network,
      title: "Organisational Development",
      description: "Improving structures, processes and ways of working.",
    },
    {
      number: "03",
      icon: Award,
      title: "Leadership Advisory",
      description: "Identifying leadership gaps and strengthening effectiveness.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Culture & Behaviour Consulting",
      description: "Building stronger workplace cultures and behaviours.",
    },
    {
      number: "05",
      icon: RefreshCw,
      title: "Change Management & People Transition",
      description: "Helping people adapt to organisational change.",
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Performance Consulting",
      description: "Identifying performance gaps and improving outcomes.",
    },
  ];

  const scenarios = [
    { problem: "Our managers aren't delivering consistently.", response: "We help identify leadership capability gaps and determine what needs to change." },
    { problem: "Our teams aren't working well together.", response: "We examine communication, accountability, team dynamics and ways of working." },
    { problem: "We're investing in training but not seeing improvement.", response: "We review learning priorities, capability gaps and how learning connects to performance." },
    { problem: "Our organisation is growing, but our people practices aren't keeping up.", response: "We help assess organisational readiness, role clarity and leadership requirements." },
    { problem: "We're introducing change and need our people to adapt.", response: "We support the people side of organisational change." },
  ];

  const workSteps = [
    { icon: Search, label: "Understand", description: "We discuss the business challenge, its impact and what the organisation wants to achieve." },
    { icon: Stethoscope, label: "Diagnose", description: "We examine the people, processes, behaviours and capabilities contributing to the issue." },
    { icon: Lightbulb, label: "Recommend", description: "We identify practical options and agree on the right approach." },
    { icon: Rocket, label: "Implement", description: "We support the organisation in putting the agreed interventions into practice." },
    { icon: Eye, label: "Review", description: "We assess progress and identify where further improvements may be needed." },
  ];

  const engagementModels = [
    { icon: Briefcase, title: "Advisory Projects", description: "Focused consulting engagements addressing a defined organisational or people challenge." },
    { icon: Microscope, title: "Assessments & Diagnostics", description: "Shorter engagements to understand capability, leadership, culture or performance gaps." },
    { icon: Handshake, title: "Ongoing Advisory Support", description: "Continued support for organisations working through longer-term people and organisational priorities." },
  ];

  const audiences = [
    { icon: Briefcase, title: "Business Owners & Founders", description: "Looking to strengthen leadership, team effectiveness and organisational capability." },
    { icon: GraduationCap, title: "HR & L&D Leaders", description: "Building people strategies, improving capability and addressing organisational challenges." },
    { icon: Target, title: "Business & Functional Leaders", description: "Working through performance, leadership and team-related challenges." },
    { icon: UsersRound, title: "Leadership Teams", description: "Looking to improve alignment, decision-making and ways of working." },
  ];

  return (
    <div className="pt-20">
      <Section className="relative bg-bg-light text-deep-navy pt-40 pb-32 md:pt-52 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/people-advisory-hero-illustration.jpg"
            alt="Illustration of strategic people advisory and organisational design"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-deep-navy max-w-2xl mx-auto">
              Better decisions about people. Stronger organisations.
            </h1>
            <p className="text-xl text-deep-navy max-w-xl mx-auto">
              We work with organisations to understand their people and performance challenges,
              identify what needs to change and develop practical ways to address them.
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
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6">
            Understanding the problem comes first.
          </h2>
          <p className="text-deep-navy/70 leading-relaxed mb-4">
            Not every people challenge needs another training programme, a new HR policy or a
            change in process.
          </p>
          <p className="text-deep-navy/70 leading-relaxed mb-4">
            Sometimes the real issue is unclear expectations, leadership behaviour, team dynamics
            or gaps in capability.
          </p>
          <p className="text-deep-navy/70 leading-relaxed">
            We help organisations understand what's happening, identify the underlying causes and
            decide what needs to be done.
          </p>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto mt-8"></div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item) => (
            <motion.div key={item.number} whileHover={{ y: -8 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="icon-pop w-14 h-14 bg-primary-blue/5 rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                        <item.icon size={26} />
                      </div>
                      <span className="font-serif font-bold text-3xl text-primary-blue/15">{item.number}</span>
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
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">When Organisations Work With Us</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {scenarios.map((item) => (
            <SpotlightCard key={item.problem} color="blue" className="rounded-2xl">
              <div className="glass rounded-2xl p-6 md:p-8">
                <p className="text-lg font-bold text-deep-navy mb-2">"{item.problem}"</p>
                <p className="text-deep-navy/60 leading-relaxed">{item.response}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {workSteps.map((step, index) => (
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engagement Models</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {engagementModels.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <SpotlightCard color="blue" className="rounded-xl h-full">
                <Card className="glass text-center group h-full">
                  <CardContent className="p-7">
                    <div className="icon-pop w-14 h-14 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-5 mx-auto text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-base font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Work With</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <SpotlightCard color="gold" className="rounded-xl h-full">
                <Card className="glass text-center group h-full">
                  <CardContent className="p-7">
                    <div className="icon-pop w-14 h-14 bg-primary-blue/5 rounded-2xl flex items-center justify-center mb-5 mx-auto text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-base font-bold text-deep-navy mb-2">{item.title}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
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
            Let's understand what's getting in the way.
          </h2>
          <p className="text-white/60 mb-10">
            Tell us about the people, leadership or performance challenge you're facing. We'll
            help you identify what needs attention and explore the right way forward.
          </p>
          <Button variant="accent" size="lg" asChild className="h-14 px-10 rounded-2xl text-lg shadow-xl">
            <Link to="/contact">
              Start a Conversation <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
