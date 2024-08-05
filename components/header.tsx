"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import queraLogo from "@/public/queralogo.png";

export default function Header() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto p-4 pt-28 md:p-28">
      <div
        className="flex flex-col justify-center items-start "
      >
        <div className="text-white mb-4 text-3xl lg:text-7xl lg:leading-normal font-extrabold flex flex-col items-start ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
            Hello, I&#39;m
          </span>
          <TypeAnimation
            sequence={[
              "Hadi Hajiasgharzadeh",
              2000,
              "Software Engineer",
              2000,
              "Front-End Developer",
              2000,
            ]}
            wrapper="strong"
            speed={50}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "inline-block" }}
            className="h-8 md:h-32 inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700"
          />
        </div>
        <div className="flex items-center gap-10">
          {/* <button className="px-3 md:px-4 py-2 md:py-2 text-sm md:text-md  hover:text-neutral-100 hover:scale-105 duration-200  rounded-full bg-neutral-600 bg--gradient-to-r from-green-600 to-green-900 hover:bg-gradient-to-r hover:from-green-800 hover:to-green-700 text-white hover:text-green-300 "> */}
          <button className="px-3 md:px-4 py-2 md:py-2 text-sm md:text-md  text-neutral-200  hover:text-neutral-100 hover:scale-105 duration-200  rounded-full bg-neutral-600  ">
            <a
              href="/hadi-hajiasgharzadeh.pdf"
              download="hadi-hajiasgharzadeh.pdf"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </button>
          <div className="  flex justify-center items-center  space-x-4 lg:space-x-10 opacity-95">
            <Link
              className="cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-50 hover:brightness-100"
              href={"https://github.com/hadihaz"}
              target="_blank"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              className="cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-50 hover:brightness-100"
              href={"https://www.linkedin.com/in/hadi-hajiasgharzadeh"}
              target="_blank"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              className="cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200 brightness-50 hover:brightness-100"
              href={"https://quera.org/profile/hadihaz"}
              target="_blank"
            >
              <Image src={queraLogo} alt="" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
