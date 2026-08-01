import { ShieldCheck, Sparkles, Gem, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe & Effective",
      text: "Professional whitening with safe products.",
    },
    {
      icon: Sparkles,
      title: "Visible Results",
      text: "See a brighter smile after one visit.",
    },
    {
      icon: Gem,
      title: "Premium Quality",
      text: "Luxury mobile whitening experience.",
    },
    {
      icon: Award,
      title: "Professional Care",
      text: "Experienced whitening specialist.",
    },
  ];

  return (
    <section className="bg-[#111] py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-black border border-yellow-500/20 rounded-xl p-6 text-center hover:border-yellow-500 transition"
            >
              <Icon className="mx-auto text-yellow-400 mb-4" size={40} />

              <h3 className="font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}