"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-yellow-500/20 bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Insanely <span className="text-red-500">White</span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Mobile teeth whitening services that bring
            brighter smiles directly to your home, office, or preferred
            location.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Book Appointment", "#appointment"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="transition hover:text-yellow-400"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-yellow-400">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-red-500" />
              <a
                href="tel:3479304340"
                className="transition hover:text-yellow-400"
              >
                (347) 930-4340
              </a>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1 text-red-500" />
              <a
                href="mailto:TeethInsanelyWhite@gmail.com"
                className="transition hover:text-yellow-400"
              >
                teethInsanelyWhite@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-red-500" />
              <span>Mobile Teeth Whitening Service</span>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-yellow-400">
            Business Hours
          </h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-1 shrink-0 text-red-500" />

              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold text-white">Sun:</span> Closed
                </p>
                <p>
                  <span className="font-semibold text-white">Mon:</span> Closed
                </p>
                <p>
                  <span className="font-semibold text-white">Tue:</span> 11:00 AM – 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-white">Wed:</span> 11:00 AM – 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-white">Thu:</span> 11:00 AM – 6:00 PM
                </p>
                <p>
                  <span className="font-semibold text-white">Fri:</span> 11:00 AM – 8:00 PM
                </p>
                <p>
                  <span className="font-semibold text-white">Sat:</span> 11:00 AM – 8:00 PM
                </p>

                <p className="pt-2 font-medium text-yellow-400">
                  By Appointment Only
                </p>
              </div>
            </div>

            <div className="pt-5">
              <p className="mb-3 font-medium text-white">
                Follow Us @insanely_white_
              </p>

              <a
                href="https://www.instagram.com/insanely_white_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#111] px-5 py-3 transition duration-300 hover:scale-105 hover:bg-red-600"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="border-t border-white/10 py-6 text-center text-gray-500"
      >
        ©️ {new Date().getFullYear()} Insanely White. All Rights Reserved.
      </motion.div>
    </footer>
  );
}