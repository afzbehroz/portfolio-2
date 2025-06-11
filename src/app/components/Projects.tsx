import React from "react";
import Image from "next/image";
import { projects } from "../contents/project";

export default function Projects() {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="mb-10">
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
