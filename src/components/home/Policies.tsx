"use client";

import { motion } from "framer-motion";

const policies = [
  {
    title: "Appointment Only",
    description:
      "All services are by appointment only. Please schedule your visit through our Square booking system.",
  },
  {
    title: "$50 Non-Refundable Deposit",
    description:
      "A $50 non-refundable deposit is required to secure your appointment. The deposit will be applied toward your total service cost.",
  },
  {
    title: "Rescheduling",
    description:
      "Appointments may be rescheduled with at least 24 hours' notice. Deposits are transferable to the new appointment time.",
  },
  {
    title: "Late Arrivals",
    description:
      "Clients arriving more than 15 minutes late may need to reschedule depending on availability.",
  },
  {
    title: "Payment",
    description:
      "The remaining balance may be paid by Zelle or card. Card payments are subject to tax and processing fees. Please ensure your ID matches the card used for payment.",
  },
  {
    title: "Before Your Appointment",
    description:
      "Brush your teeth before your session and avoid eating or drinking anything that may stain your teeth immediately before treatment.",
  },
];

export default function Policies() {
  return (
    <section
      id="policies"
      className="bg-black py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 uppercase tracking-[5px] text-red-500">
            Policies
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Before You <span className="text-yellow-400">Book</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            Please review the following policies before scheduling your
            appointment. Booking an appointment confirms that you agree to
            these terms.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-[#111] p-6 transition hover:border-yellow-500/50"
            >
              <h3 className="mb-3 text-xl font-semibold text-yellow-400">
                {policy.title}
              </h3>

              <p className="leading-relaxed text-gray-300">
                {policy.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}