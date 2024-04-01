"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const projects = [
  {
    title: "Teacher-Selection",
    image: "/images/projects/Teacher-Selection.png",
    technologys: ["react", "typescript", "tailwindcss"],
    github: "",
    livedemo: "",
  },
  {
    title: "ibrary",
    image: "/images/projects/library.png",
    technologys: ["javascript", "html", "css"],
    github: "https://github.com/hadihaz/library",
    livedemo: "https://hadihaz.github.io/library/",
  },
  {
    title: "admin-dashboard",
    image: "/images/projects/admin-dashboard.png",
    technologys: ["html", "css"],
    github: "https://github.com/hadihaz/admin-dashboard ",
    livedemo: "https://hadihaz.github.io/admin-dashboard/",
  },
  {
    title: "Guess-the-number",
    image: "/images/projects/Guess-the-number.png",
    technologys: ["javascript", "html", "css"],
    github: "https://github.com/hadihaz/Guess-the-number",
    livedemo: "https://hadihaz.github.io/Guess-the-number/",
  },
  {
    title: "tic-tac-toe",
    image: "/images/projects/tic-tac-toe.png",
    technologys: ["javascript", "html", "css"],
    github: "https://github.com/hadihaz/tic-tac-toe",
    livedemo: "https://hadihaz.github.io/tic-tac-toe/",
  },
];
export default function Projects() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-28 pt-12">
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-start "
      >
        <h1 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 border-green-400 border-b-2 w-full p-2">{`<Projects />`}</h1>
        <ul className="md:p-10 p-4 md:font-bold md:text-2xl flex gap-2 md:gap-4 flex-wrap ">
          {projects.map((project) => (
            <li
              key={project.title}
              className="bg-neutral-800 shadow-2xl text-neutral-400 rounded-2xl p-3  w-[350px] "
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-2xl"
                  />
                  <h2 className="text-lg m-2">{project.title}</h2>
                </div>
                <div>
                  <div className="flex ">
                    {project.github && (
                      <Link href={project.github} className="m-2 ">
                        <FaGithub />
                      </Link>
                    )}
                    {project.livedemo && (
                      <Link href={project.livedemo} className="m-2 ">
                        <TbWorld />
                      </Link>
                    )}
                  </div>

                  <ul className="text-xs m-2 flex gap-2 ">
                    {project.technologys.map((technology, i) => (
                      <li
                        key={i}
                        className="bg-neutral-950 rounded-xl px-2 py-1 font-normal "
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
