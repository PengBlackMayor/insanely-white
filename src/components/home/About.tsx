"use client";

import { motion } from "framer-motion";
import {
  Car,
  ShieldCheck,
  Sparkles,
  Smile,
} from "lucide-react";

const services = [
  {
    icon: <Smile className="h-8 w-8 text-yellow-400 sm:h-10 sm:w-10" />,
    title: "Mobile Teeth Whitening",
    desc: "Mobile Teeth Whitening Spa Location Available. Services are performed at our spa location.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-yellow-400 sm:h-10 sm:w-10" />,
    title: "Tooth Shade Assessment",
    desc: "See your smile improve with before and after shade matching.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-yellow-400 sm:h-10 sm:w-10" />,
    title: "Safe Whitening Products",
    desc: "Premium enamel-safe whitening products for lasting results.",
  },
  {
    icon: <Car className="h-8 w-8 text-yellow-400 sm:h-10 sm:w-10" />,
    title: "Spa Location",
    desc: "Services are performed at our spa location. Address details are disclosed after booking.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0b0b] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-3 uppercase tracking-[5px] text-red-500 sm:tracking-[6px]">
            About Us
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
             Mobile{" "}
            <span className="text-yellow-400">
              Teeth Whitening
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Insanely White provides safe, mobile teeth whitening services at our spa location. The exact address will be disclosed after your appointment is confirmed. We help you achieve a brighter smile with convenient appointments and premium whitening products.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-2xl border border-yellow-500/20 bg-[#111] p-6 transition duration-300 hover:-translate-y-2 hover:border-yellow-500 sm:p-8"
            >
              <div className="mb-5">
                {service.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold sm:text-xl">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-gray-400 sm:text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}





