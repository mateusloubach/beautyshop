'use client';
import Image from "next/image";
import { heroImage } from "@/constants/useImages";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
    >
      <section className="relative h-screen flex flex-col pt-24 pb-8">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Natural beauty and wellness"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-tr from-background/95 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-2 lg:px-8 relative z-10 pb-8 mt-auto">
          <div className="space-y-6">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm md:text-base tracking-widest text-white uppercase">
                Cuidar de você é a nossa especialidade
              </p>
              <a
                href="https://wa.me/351930472713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white uppercase text-sm md:text-2xl font-medium relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10">Faça sua reserva agora</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? "100%" : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </a>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold text-white uppercase leading-none tracking-tight">
              Carol Belmonte Beauty
            </h1>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
