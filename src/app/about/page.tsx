"use client";

import React from "react";
import { FaCode, FaCogs, FaLaptop, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion"; // Animation library
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
} from "@/utils/animations"; // Custom animation variants

const About = () => {
  return (
    <motion.div
      className="container max-w-7xl mx-auto py-20"
      variants={staggerContainer} // Stagger child animations
      initial="initial"
      animate="animate"
    >
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I’m a frontend developer passionate about building modern web
          applications that are fast, accessible, and user-friendly. I’m still
          learning, but I enjoy finding clear ways to solve tricky challenges
          using JavaScript, React, and Next.js.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {/* Frontend Skills */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>React / Next.js</li>
              <li>TypeScript</li>
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptop className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL</li>
            </ul>
          </motion.div>

          {/* Dev Tools / Cloud */}
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCogs className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dev Tools & Cloud</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>AWS</li>
              <li>Figma</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>

        {/* Internship Entry */}
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <h3 className="text-xl font-semibold mb-2">
              Frontend Developer Intern
            </h3>
            <p className="text-primary mb-2">
              Sogram Invest AB • Nov 2024 – Apr 2025
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Assisted in building responsive UI components using React and
                Tailwind CSS
              </li>
              <li>
                Gained hands-on experience with Git, REST APIs, and modern dev
                tools
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section className="mb-16" {...fadeIn}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>

        {/* School Entry */}
        <motion.div className="max-w-3xl mx-auto" variants={staggerContainer}>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Frontend Developer Program
            </h3>
            <p className="text-primary mb-2">Chas Academy • 2023 – 2025</p>
            <p className="text-secondary">
              Studying frontend development with a strong focus on React,
              TypeScript, modern CSS frameworks, and agile methodologies.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default About;
