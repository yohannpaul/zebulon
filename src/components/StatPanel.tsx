import type { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

/**
 * Glass panel of 2-3 quick stat rows, used as the decorative "side" content
 * next to a StatementBlock so the opening section depicts something concrete
 * instead of sitting empty.
 */
export default function StatPanel({ stats }: { stats: Stat[] }) {
  return (
    <div className="glass rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="relative z-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex items-center gap-4 ${i > 0 ? "mt-6 pt-6 border-t border-deep-navy/10" : ""}`}
          >
            <div className="icon-pop w-12 h-12 rounded-xl bg-primary-blue/8 flex items-center justify-center text-primary-blue shrink-0">
              <stat.icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-bold text-deep-navy leading-none">{stat.value}</p>
              <p className="text-sm text-deep-navy/50">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
