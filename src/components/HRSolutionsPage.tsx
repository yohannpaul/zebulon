import Section from "./Section";
import GradientBackdrop from "./GradientBackdrop";
import SpotlightCard from "./SpotlightCard";
import GlowCTAButton from "./GlowCTAButton";
import StatementBlock from "./StatementBlock";
import StatPanel from "./StatPanel";
import ProcessSteps from "./ProcessSteps";
import { motion } from "motion/react";
import {
  UserSearch,
  FileText,
  TrendingUp,
  HeartHandshake,
  ListChecks,
  ClipboardCheck,
  Search,
  FileSearch,
  Hammer,
  Rocket,
  LifeBuoy,
  ClipboardList,
  UserPlus,
  Handshake,
  Building2,
  Building,
  Landmark,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function HRSolutionsPage() {
  useDocumentMeta(
    "HR Solutions | Zebulon Consulting",
    "From finding the right talent to building effective HR processes, we help organisations manage their people's needs with practical HR support."
  );

  const services = [
    {
      number: "01",
      icon: UserSearch,
      title: "Recruitment & Talent Acquisition",
      description: "Permanent hiring, contract staffing, consultant deployment, candidate sourcing, screening and volume hiring.",
    },
    {
      number: "02",
      icon: FileText,
      title: "HR Policies & Processes",
      description: "HR policies, employee handbooks, SOPs, HR documentation, process development and improvement.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Performance Management",
      description: "Performance frameworks, goal setting, appraisal processes, KPIs and performance improvement systems.",
    },
    {
      number: "04",
      icon: HeartHandshake,
      title: "Employee Engagement & Experience",
      description: "Engagement surveys, employee feedback, retention initiatives, recognition programmes and employee experience.",
    },
    {
      number: "05",
      icon: ListChecks,
      title: "Competency & Role Frameworks",
      description: "Competency mapping, role definitions, job descriptions, skills frameworks and career progression.",
    },
    {
      number: "06",
      icon: ClipboardCheck,
      title: "HR Audits & Advisory",
      description: "HR process reviews, gap assessments, HR function setup, improvement recommendations and ongoing HR guidance.",
    },
  ];

  const businessNeeds = [
    { need: "Starting an HR function", help: "Establishing policies, processes and basic HR frameworks." },
    { need: "Growing the workforce", help: "Recruitment, hiring processes and onboarding." },
    { need: "Improving HR operations", help: "Reviewing and strengthening existing HR practices." },
    { need: "Managing employee performance", help: "Goal setting, appraisal systems and performance frameworks." },
    { need: "Improving employee engagement", help: "Feedback, engagement assessments and action planning." },
    { need: "Building role clarity", help: "Job descriptions, competencies and role expectations." },
  ];

  const workSteps = [
    { icon: Search, label: "Understand", description: "We discuss your organisation, its current HR practices and what needs attention." },
    { icon: FileSearch, label: "Review", description: "We examine existing processes, documentation and gaps." },
    { icon: Hammer, label: "Build", description: "We develop the policies, frameworks or processes required." },
    { icon: Rocket, label: "Implement", description: "We help put the agreed solutions into practice." },
    { icon: LifeBuoy, label: "Support", description: "Where required, we provide ongoing guidance and improvements." },
  ];

  const engagementModels = [
    { icon: ClipboardList, title: "Project-Based HR Support", description: "For specific requirements such as policy development, HR audits or performance management frameworks." },
    { icon: UserPlus, title: "Recruitment Engagements", description: "For individual positions, multiple vacancies or ongoing hiring requirements." },
    { icon: Handshake, title: "Retained HR Advisory", description: "For organisations requiring HR guidance and support over an agreed period." },
    { icon: Building2, title: "HR Function Setup", description: "For growing organisations looking to establish or improve their HR function." },
  ];

  const audiences = [
    { icon: Rocket, title: "Startups & Growing Businesses", description: "Organisations building their first structured HR practices." },
    { icon: Building, title: "Small & Medium Enterprises", description: "Businesses strengthening existing HR processes and people management." },
    { icon: Landmark, title: "Established Organisations", description: "Companies requiring recruitment, HR process improvements or specific HR projects." },
    { icon: Briefcase, title: "HR & Business Leaders", description: "Leaders looking for external expertise or additional support." },
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
              HR Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-deep-navy leading-[1.1] mb-6">
              Helping you build better HR practices.
            </h1>
            <p className="text-xl text-deep-navy/70 mb-8 leading-relaxed max-w-lg">
              From finding the right talent to building effective HR processes, we help
              organisations manage their people's needs with practical HR support.
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
                src="/images/hr-solutions-hero-illustration.jpg"
                alt="Illustration of HR recruitment and people operations"
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
                <UserSearch size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-deep-navy leading-none">Full-Cycle</p>
                <p className="text-[11px] uppercase tracking-wider text-deep-navy/50 font-bold">HR Support</p>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <StatementBlock
          eyebrow="Why This Matters"
          heading="As organisations grow, managing people becomes more complex."
          side={
            <StatPanel
              stats={[
                { icon: FileText, value: String(services.length), label: "HR Services" },
                { icon: Handshake, value: String(engagementModels.length), label: "Engagement Models" },
                { icon: Building, value: String(audiences.length), label: "Who We Support" },
              ]}
            />
          }
        >
          <p>We help businesses strengthen HR practices, address specific needs and build better HR processes.</p>
        </StatementBlock>
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-14">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <SpotlightCard color={index % 2 === 0 ? "gold" : "blue"} className="rounded-xl h-full">
                <Card className="glass group h-full overflow-hidden relative">
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${index % 2 === 0 ? "bg-gold-accent" : "bg-primary-blue"} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
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

      <Section className="relative overflow-hidden" backdrop={<GradientBackdrop variant="light" />}>
        <div className="text-center mb-14">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Support For Every Stage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">HR Support for Different Business Needs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto relative z-10">
          {businessNeeds.map((item, index) => (
            <motion.div
              key={item.need}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <SpotlightCard color={index % 2 === 0 ? "blue" : "gold"} className="rounded-2xl h-full">
                <div className={`rounded-2xl p-6 flex gap-4 items-start h-full min-h-[128px] ${index % 2 === 0 ? "bg-primary-blue/[0.04]" : "bg-gold-accent/[0.06]"}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${index % 2 === 0 ? "bg-primary-blue/15 text-primary-blue" : "bg-gold-accent/20 text-gold-accent"}`}>
                    <ArrowRight size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-deep-navy mb-1">{item.need}</h3>
                    <p className="text-sm text-deep-navy/60 leading-relaxed">{item.help}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-light">
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <ProcessSteps steps={workSteps} />
      </Section>

      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engagement Models</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((item, index) => (
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

      <Section className="bg-bg-light">
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold uppercase tracking-widest text-sm mb-4 block">
            We Can Keep This Simple
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Work With</h2>
          <div className="w-20 h-1.5 bg-gold-accent mx-auto"></div>
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
              <SpotlightCard color={index % 2 === 0 ? "gold" : "blue"} className="rounded-2xl h-full">
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
            Let's talk about your HR needs.
          </h2>
          <p className="text-white/60 mb-10">
            Whether you're hiring, setting up HR processes or improving existing practices, tell
            us what you're looking for.
          </p>
          <GlowCTAButton to="/contact">
            Talk to Us <ArrowRight size={20} />
          </GlowCTAButton>
        </div>
      </Section>
    </div>
  );
}
