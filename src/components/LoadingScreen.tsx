"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({
  isLoading,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/logo.png"
              alt="Insanely White"
              width={140}
              height={140}
              priority
            />
          </motion.div>

          <motion.h1
            className="mt-6 text-3xl font-bold tracking-[4px] text-white"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            INSANELY WHITE
          </motion.h1>

          <motion.p
            className="mt-2 tracking-[3px] text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            MOBILE TEETH WHITENING
          </motion.p>

          <div className="mt-10 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}