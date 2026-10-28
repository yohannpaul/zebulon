import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import GlowCTAButton from "./GlowCTAButton";
import StatementBlock from "./StatementBlock";
import StatPanel from "./StatPanel";
import ProcessSteps from "./ProcessSteps";
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
  Building2,
  Laptop,
  Layers,
  UserCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

  const formats = [
    { label: "In-person", icon: Building2 },
    { label: "Virtual", icon: Laptop },
    { label: "Blended", icon: Layers },
    { label: "Workshops", icon: Presentation },
    { label: "1:1", icon: UserCheck },
    { label: "Small Group Coaching", icon: Users },
  ];

  const audiences = [
    { icon: UserCheck, title: "Individual Contributors", description: "Building skills and confidence early in their careers." },
    { icon: Users, title: "New Managers", description: "Developing the fundamentals of managing people and performance." },
    { icon: Target, title: "Experienced Managers", description: "Strengthening leadership range as responsibilities grow." },
    { icon: Award, title: "Senior Leaders", description: "Sharpening strategic and organisational leadership." },
    { icon: TrendingUp, title: "Sales Teams", description: "Building selling, negotiation and client conversation skills." },
    { icon: Headset, title: "Customer-Facing Teams", description: "Strengthening service, communication and problem-solving skills." },
    { icon: UsersRound, title: "Leadership Teams", description: "Aligning leadership groups around shared ways of working." },
  ];

  return (
    <div className="pt-20">
      <Section className="relative overflow-hidden bg-bg-light pt-28 pb-16 md:pt-36 md:pb-20" backdrop={<GradientBackdrop variant="light" />}>
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge className="h-auto gap-2 pl-3 pr-4 py-2 text-sm font-bold border-primary/20 bg-primary/10 text-primary rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
              </span>
              Learning & Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-deep-navy leading-[1.1] mb-6">
              Learning that works beyond the classroom.
            </h1>
            <p className="text-xl text-deep-navy/70 mb-8 leading-relaxed max-w-lg">
              Practical learning experiences designed around your people, their roles and the
              challenges they face at work.
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
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl shine-sweep aspect-video">
              <img
                src="/images/learning-hero-illustration.jpg"
                alt="Illustration of corporate learning and leadership development"
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
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-deep-navy leading-none">6 Tracks</p>
                <p className="text-[11px] uppercase tracking-wider text-deep-navy/50 font-bold">Learning Solutions</p>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <StatementBlock
          eyebrow="Our Learning Philosophy"
          heading="We don't start with a training topic. We start with what needs to change."
          side={
            <StatPanel
              stats={[
                { icon: GraduationCap, value: String(solutions.length), label: "Learning Solutions" },
                { icon: Target, value: String(expertiseAreas.length), label: "Focus Areas" },
                { icon: Layers, value: String(formats.length), label: "Delivery Formats" },
              ]}
            />
          }
        >
          <p>Every learning intervention we design starts with your context, not a course catalogue.</p>
        </StatementBlock>
      </Section>

      <Section>
        <div className="text-center mb-14">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Solutions</h2>
        </div>

        <div className="max-w-5xl mx-auto divide-y divide-deep-navy/10">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group flex items-center gap-5 sm:gap-6 py-6 px-4 -mx-4 rounded-xl hover:bg-bg-light transition-colors"
            >
              <span className="hidden sm:block font-serif font-bold text-4xl md:text-5xl text-primary-blue/10 group-hover:text-gold-accent/40 transition-colors w-16 shrink-0 text-center">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-primary-blue/5 flex items-center justify-center text-primary-blue shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-deep-navy mb-1">{item.title}</h3>
                <p className="text-sm text-deep-navy/60 leading-relaxed">{item.description}</p>
              </div>
              <ArrowRight className="hidden sm:block text-deep-navy/15 group-hover:text-gold-accent group-hover:translate-x-1 transition-all shrink-0" size={20} />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light relative overflow-hidden" backdrop={<GradientBackdrop variant="light" />}>
        <div className="text-center mb-14 relative z-10">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            What We Cover
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Areas of Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <SpotlightCard color={index % 2 === 0 ? "blue" : "gold"} className="rounded-2xl h-full">
                <div className="glass rounded-2xl p-7 h-full relative overflow-hidden">
                  <area.icon className="absolute -right-5 -bottom-5 text-primary-blue/[0.06]" size={110} />
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className="icon-pop w-14 h-14 rounded-2xl bg-primary-blue flex items-center justify-center text-white shadow-md shrink-0">
                      <area.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-deep-navy text-base leading-tight">{area.title}</h3>
                      <span className="text-xs font-bold text-primary-blue/60 uppercase tracking-wider">
                        {area.topics.length} Focus Areas
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-blue/8 text-primary-blue"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Build Learning</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <ProcessSteps steps={buildSteps} />
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-10">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Ways We Deliver
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Learning Formats</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-16">
          {formats.map((format, index) => (
            <motion.div
              key={format.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 text-center group"
            >
              <div className="icon-pop w-12 h-12 rounded-xl bg-primary-blue/8 flex items-center justify-center mx-auto mb-3 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <format.icon size={22} />
              </div>
              <p className="text-sm font-bold text-deep-navy leading-snug">{format.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            The People We Support
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Who We Work With</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <SpotlightCard color={index % 2 === 0 ? "blue" : "gold"} className="rounded-2xl h-full">
                <div className="glass rounded-2xl p-7 h-full relative overflow-hidden group">
                  <item.icon className="absolute -right-4 -bottom-4 text-primary-blue/[0.06] group-hover:text-primary-blue/10 transition-colors" size={96} />
                  <div className="icon-pop w-14 h-14 rounded-2xl bg-primary-blue flex items-center justify-center text-white shadow-md mb-5 relative z-10 group-hover:bg-gold-accent transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-2 relative z-10">{item.title}</h3>
                  <p className="text-sm text-deep-navy/60 leading-relaxed relative z-10">{item.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section dark className="relative overflow-hidden text-center" backdrop={<GradientBackdrop variant="dark" />}>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What are you trying to develop?
          </h2>
          <p className="text-white/60 mb-10">
            Tell us what's happening with your people or teams. We'll help you work out what kind
            of learning intervention makes sense.
          </p>
          <GlowCTAButton to="/contact">
            Get in Touch <ArrowRight size={20} />
          </GlowCTAButton>
        </div>
      </Section>
    </div>
  );
}
