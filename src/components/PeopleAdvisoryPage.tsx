import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import GlowCTAButton from "./GlowCTAButton";
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
  Quote,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
      <Section className="relative overflow-hidden bg-bg-light pt-40 pb-20 md:pt-52 md:pb-28" backdrop={<GradientBackdrop variant="light" />}>
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="h-auto gap-2 pl-3 pr-4 py-2 text-sm font-bold border-primary/20 bg-primary/10 text-primary rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
              </span>
              People Advisory
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-deep-navy leading-[1.1] mb-6">
              Better decisions about people. Stronger organisations.
            </h1>
            <p className="text-xl text-deep-navy/70 mb-8 leading-relaxed max-w-lg">
              We work with organisations to understand their people and performance challenges,
              identify what needs to change and develop practical ways to address them.
            </p>
            <GlowCTAButton to="/contact">
              Talk to Us <ArrowRight size={20} />
            </GlowCTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shine-sweep aspect-[4/5] md:aspect-square">
              <img
                src="/images/people-advisory-hero-illustration.jpg"
                alt="Illustration of strategic people advisory and organisational design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/30 to-transparent"></div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-full bg-gold-accent flex items-center justify-center text-deep-navy shrink-0">
                <Compass size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-deep-navy leading-none">Trusted</p>
                <p className="text-[11px] uppercase tracking-wider text-deep-navy/50 font-bold">Advisory Partner</p>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative">
          <Quote className="text-primary-blue/10 mx-auto mb-4" size={48} />
          <div className="text-center">
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
        </div>
      </Section>

      <Section dark className="relative overflow-hidden">
        <div className="text-center mb-14 relative z-10">
          <span className="text-gold-accent font-bold uppercase tracking-widest text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-5xl mx-auto relative z-10">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="group flex items-start gap-5 py-7 border-b border-white/10"
            >
              <span className="font-serif font-bold text-4xl text-white/10 group-hover:text-gold-accent/50 transition-colors w-14 shrink-0">
                {item.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon size={18} className="text-gold-accent" />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light relative overflow-hidden" backdrop={<GradientBackdrop variant="light" />}>
        <div className="text-center mb-14 relative z-10">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">When Organisations Work With Us</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 relative z-10">
          {scenarios.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={index % 2 === 0 ? "mr-0 md:mr-10" : "ml-0 md:ml-10"}
            >
              <SpotlightCard color="blue" className="rounded-2xl">
                <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  <Quote className="absolute -top-2 -right-2 text-primary-blue/5" size={72} />
                  <p className="text-lg font-bold text-deep-navy mb-2 relative z-10">"{item.problem}"</p>
                  <p className="text-deep-navy/60 leading-relaxed relative z-10">{item.response}</p>
                </div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="hidden md:block absolute left-[27px] top-4 bottom-4 w-px bg-primary-blue/15"></div>
          <div className="space-y-6">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 md:gap-6 items-start group"
              >
                <div className="icon-pop w-14 h-14 rounded-full bg-white border-2 border-primary-blue/15 flex items-center justify-center text-primary-blue shrink-0 relative z-10 shadow-sm group-hover:border-gold-accent group-hover:text-gold-accent transition-colors">
                  <step.icon size={22} />
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-bold text-deep-navy mb-1">{step.label}</h3>
                  <p className="text-sm text-deep-navy/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engagement Models</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {engagementModels.map((item, index) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <SpotlightCard color={index % 2 === 0 ? "blue" : "gold"} className="rounded-xl h-full">
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
          {audiences.map((item, index) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <SpotlightCard color={index % 2 === 0 ? "gold" : "blue"} className="rounded-xl h-full">
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

      <Section dark className="relative overflow-hidden text-center" backdrop={<GradientBackdrop variant="dark" />}>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's understand what's getting in the way.
          </h2>
          <p className="text-white/60 mb-10">
            Tell us about the people, leadership or performance challenge you're facing. We'll
            help you identify what needs attention and explore the right way forward.
          </p>
          <GlowCTAButton to="/contact">
            Start a Conversation <ArrowRight size={20} />
          </GlowCTAButton>
        </div>
      </Section>
    </div>
  );
}
