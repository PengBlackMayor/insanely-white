import {
  Sparkles,
  Smile,
  Brush,
} from "lucide-react";

export default function Services() {
  const services = [

    {
      icon: Smile,
      title: "Custom Whitening",
      desc: "Tailored whitening plans for every smile.",
    },
    
    {
      icon: Brush,
      title: "Maintenance",
      desc: "Keep your teeth looking bright for longer.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-red-500 uppercase tracking-[4px] font-semibold">
          Premium Whitening Services
        </p>

        <h2 className="text-center text-5xl font-bold mt-4 mb-16 text-black">
          Professional Treatments
        </h2>

        <div className=" grid-colos-1 md:grid-cols-2 ">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <Icon
                  className="mx-auto text-yellow-500 mb-5"
                  size={45}
                />

                <h3 className="font-bold text-xl text-black">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {service.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}