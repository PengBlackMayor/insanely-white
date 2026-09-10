"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    image: "/images/gallery/before&afternew1.jpg",
    alt: "Before&after",
    label: "BEFORE & AFTER",
    bg: "bg-red-600",
    text: "text-white",
  },
  {
    image: "/images/gallery/before&afternew2.jpg",
    alt: "Before&after",
    label: "BEFORE & AFTER",
    bg: "bg-yellow-500",
    text: "text-black",
  },
  {
    image: "/images/gallery/before&afternew3.jpg",
    alt: "Before & After",
    label: "BEFORE & AFTER",
    bg: "bg-black",
    text: "text-white",
  },
  {
    image: "/images/gallery/before&afternew4.jpg",
    alt: "Before&after",
    label: "BEFORE & AFTER",
    bg: "bg-red-600",
    text: "text-white",
  },
  {
    image: "/images/gallery/before&afternew5.jpg",
    alt: "After",
    label: "AFTER",
    bg: "bg-yellow-500",
    text: "text-black",
  },
  {
    image: "/images/gallery/signsyouneed.jpg",
    alt: "Signs You Need",
    label: "SIGNS YOU NEED",
    bg: "bg-black",
    text: "text-white",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 uppercase tracking-[5px] text-red-500 sm:tracking-[6px]">
            Before & After
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Real Results.
            <span className="text-yellow-400"> Real Confidence.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg">
            See real client transformations from our mobile teeth
            whitening treatments.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-yellow-500/20"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={500}
                height={320}
                className="h-40 w-full object-cover transition duration-500 hover:scale-105 sm:h-56 lg:h-48"
              />

              <div
                className={`${item.bg} ${item.text} py-3 text-center text-base font-bold uppercase tracking-wide sm:text-lg`}
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}