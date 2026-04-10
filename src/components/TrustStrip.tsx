export default function TrustStrip() {
  const stats = [
    { label: "Founded", value: "2020" },
    { label: "Expertise", value: "15+ Years" },
    { label: "Location", value: "Hyderabad, India" },
    { label: "Core Services", value: "4" },
  ];

  return (
    <div className="bg-deep-navy py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center border-r last:border-r-0 border-white/10">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-white font-bold text-lg md:text-xl">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
