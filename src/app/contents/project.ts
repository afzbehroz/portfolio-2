// src/contents/project.ts
import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "News Website",
    description: "A modern news platform built with Next.js.",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/afzbehroz/Nyhets_sajt",
    demoLink: "https://nyhets-sajt.vercel.app/",
    image: "/projects/news-site.png",
  },
  {
    title: "Movie Library",
    description: "Search movies and save favorites to your list.",
    technologies: ["React", "API Integration"],
    githubLink: "https://github.com/afzbehroz/movie-library",
    demoLink:
      "https://movie-library-18zldz91x-behrozs-projects-8c9bbdb6.vercel.app/",
    image: "/projects/movie-site.png",
  },
  {
    title: "Bank Dashboard",
    description: "A fullstack banking dashboard UI.",
    technologies: ["Next.js", "AWS", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/afzbehroz/bank_aws",
    demoLink: "",
    image: "/projects/bank.png",
  },
  {
    title: "Food Truck",
    description: "Food truck menu and order.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/afzbehroz/Examination-Sista",
    demoLink: "",
    image: "/projects/food-truck.png",
  },
];
