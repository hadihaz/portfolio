"use client";
import React, { useEffect, useState } from "react";
import { FaCss3Alt, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
const skills = [
  {
    name: "React",
    icon: <FaReact size={20} color="#4287f5" />,
    color: "#4287f5",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={20} color="#edd72f" />,
    color: "#edd72f",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={20} color="#1f57ff" />,
    color: "#0040ff",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={20} color="#ed392f" />,
    color: "#ed392f",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={20} color="#1f57ff" />,
    color: "#3e22f5",
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size={20} color="#00eeff" />,
    color: "#00eeff",
  },
  {
    name: "Git",
    icon: <FaGit size={20} color="#ed392f" />,
    color: "#ff2200",
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs size={20} color="#ffffff" />,
    color: "#ffffff",
  },
  {
    name: "Python",
    icon: <SiPython size={20} color="#ffc956" />,
    color: "#ffae00",
  },
];
export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-28 pt-12">
      <div className="flex flex-col justify-center items-start ">
        <h1 className="my-2 w-full p-2 pl-6 md:pl-12 font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 border-green-400 border-b-2 ">{`Skills `}</h1>
        <ul className="md:p-6 p-2 md:font-bold md:text-2xl flex justify-center gap-2 md:gap-4 flex-wrap ">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className={`
              text-[${skill.color}] border-[${skill.color}] text-neutral-400 drop-shadow-2xl rounded-xl flex justify-center items-center`}
            >
              <span  className="  text-xs cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 flex flex-col  gap-2 items-center px-3 md:px-6 py-1 md:py-3 bg--neutral-800 rounded-xl">
                {/* {skill.icon} */}
                  {React.cloneElement(skill.icon, { size: isMobile ? 40 : 40 })}
                {`<${skill.name} />`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
