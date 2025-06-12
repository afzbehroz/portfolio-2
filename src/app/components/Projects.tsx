"use client";
import React from "react";
import Image from "next/image";

import { projects } from "../contents/project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function Projects() {
  return (
    <motion.section
      className="py-20 container max-w-7xl mx-auto px-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Section Title */}
      <motion.h2 className="text-3xl font-bold mb-12 text-center" {...fadeInUp}>
        Featured Projects
      </motion.h2>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            {/* Project Image */}
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Project Title */}
            <motion.h3
              className="text-xl font-semibold text-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Tech Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4 mt-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* GitHub & Live Demo Links */}
            <motion.div
              className="flex gap-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
                <FaExternalLinkAlt className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
