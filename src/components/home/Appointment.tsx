"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="bg-[#080808] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 uppercase tracking-[5px] text-red-500">
            Book Appointment
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Make Your
            <span className="text-yellow-400"> Smile Shine</span>
          </h2>

          <p className="mb-8 max-w-lg text-base text-gray-400 sm:text-lg">
            Appointments are available by booking only. Please review our
            booking policies before scheduling your appointment.
          </p>

          <div className="mb-8 rounded-2xl border border-yellow-500/20 bg-[#111] p-6">
            <h3 className="mb-4 text-xl font-bold text-yellow-400">
              Before You Book
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• We only accept clients by appointment.</li>

              <li>
                • Please read our booking policies before scheduling your
                appointment.
              </li>

              <li>
                • A <span className="font-semibold text-white">$50
                non-refundable deposit</span> is required for all appointments.
              </li>

              <li>
                • The remaining balance can be paid with <strong>Zelle</strong>{" "}
                or <strong>card</strong>.
              </li>

              <li>
                • Card payments are subject to tax and processing fees.
              </li>

              <li>
                • Please ensure your ID matches the card used for payment.
              </li>
            </ul>
          </div>

          <motion.a
            href="https://squareup.com/appointments/book/L9HKMKPYZ14E6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full items-center justify-center rounded-xl bg-yellow-500 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
          >
            Book with Square
          </motion.a>
        </motion.div>

        {/* Right */}
        <motion.div
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image
            src="/images/appointment/appointment.jpg"
            alt="Mobile Teeth Whitening"
            width={700}
            height={850}
            className="h-auto w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}