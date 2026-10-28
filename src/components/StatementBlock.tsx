import type { ReactNode } from "react";
import { motion } from "motion/react";

interface StatementBlockProps {
  eyebrow: string;
  heading: ReactNode;
  children: ReactNode;
  side?: ReactNode;
  eyebrowClassName?: string;
}

/**
 * Wide, two-column "statement" layout used for each page's opening point of
 * view: an eyebrow label, a bold heading, a gold accent rule and supporting
 * copy on the left, with an optional panel (stats, a graphic) on the right.
 * Replaces the old centered blockquote-with-quote-mark treatment so the
 * section reads as a real design element and uses the section's full width.
 */
export default function StatementBlock({
  eyebrow,
  heading,
  children,
  side,
  eyebrowClassName = "text-primary-blue",
}: StatementBlockProps) {
  return (
    <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className={side ? "md:col-span-3" : "md:col-span-5 max-w-3xl mx-auto text-center"}
      >
        <span className={`${eyebrowClassName} font-bold uppercase tracking-widest text-sm mb-4 block`}>
          {eyebrow}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-deep-navy leading-tight mb-6">{heading}</h2>
        <div className={`w-16 h-1.5 bg-gold-accent mb-6 ${side ? "" : "mx-auto"}`}></div>
        <div className="space-y-4 text-deep-navy/70 text-lg leading-relaxed">{children}</div>
      </motion.div>
      {side && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          {side}
        </motion.div>
      )}
    </div>
  );
}
