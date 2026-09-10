"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-black text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 uppercase tracking-[5px] text-red-500">
            Mobile Teeth Whitening
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We&apos;ll Make Your Teeth White {" "}
             Again.
          </h1>

          <p className="mt-8 max-w-lg text-base text-gray-300 sm:text-lg">
            Mobile Teeth Whitening Spa Location Available. Services are performed at our spa location. The exact address will be disclosed after your appointment is confirmed.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#appointment"
              className="rounded-lg bg-red-600 px-8 py-4 text-center font-semibold transition duration-300 hover:scale-105 hover:bg-red-700"
            >
              Book Appointment
            </Link>

            <Link
              href="#services"
              className="rounded-lg border border-yellow-500 px-8 py-4 text-center transition duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/hero/hero.jpg"
            alt="Teeth Whitening"
            width={700}
            height={850}
            priority
            className="h-auto w-full rounded-xl object-cover shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

