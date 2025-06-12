"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/utils/animations";

export const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="py-28 container max-w-7xl mx-auto px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/profile.avif"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hey, I&#39;m <span className="text-primary">Behroz Afzali</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          A frontend developer focused on crafting clean, responsive, and
          user-friendly web interfaces.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <a
            href="https://github.com/afzbehroz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/behroz-afzali-b07316278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.65 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <Link
            href="/Projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors hover:text-gray-800"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
