"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCss3Alt, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
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
    icon: <SiTypescript  size={20} color="#0040ff" />,
    color: "#0040ff",
  },
  {
    name: "HTML",
    icon: <FaHtml5 size={20} color="#ed392f" />,
    color: "#ed392f",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={20} color="#3e22f5" />,
    color: "#3e22f5",
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size={20} color="#00eeff" />,
    color: "#00eeff",
  },
  {
    name: "Git",
    icon: <FaGit size={20} color="#ff2200" />,
    color: "#ff2200",
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs size={20} color="#ffffff" />,
    color: "#ffffff",
  },
  {
    name: "Python",
    icon: <SiPython size={20} color="#ffae00" />,
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
      window.removeEventListener("resize", handleResize); // حذف رویداد برای جلوگیری از حافظه نگهداری ناخواسته
    };
  }, []);
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-28 pt-12">
      <motion.div
        initial={{ opacity: 0, x: +300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-start "
      >
        <h1 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 border-green-400 border-b-2 w-full p-2">{`<Skills />`}</h1>

        <ul className="md:p-10 p-4 md:font-bold md:text-2xl flex gap-2 md:gap-4 flex-wrap">
          {skills.map((skill) => (
            <motion.li
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              key={skill.name}
              className={`
              text-[${skill.color}]  border-[${skill.color}] text-neutral-400 shadow-2xl rounded-xl  flex justify-center items-center`}
            >
              <span className=" flex gap-2 items-center px-3 md:px-6 py-1 md:py-3 bg-neutral-900 rounded-xl">
                {/* {skill.icon} */}
                {React.cloneElement(skill.icon, { size: isMobile ? 20 : 40 })} 
                {`<${skill.name} />`}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
