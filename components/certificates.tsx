"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const certificates = [
  {
    title: "FRONTEND DEVELOPMENT WHIT REACT",
    image: "/images/certificates/react.jpg",
    address: "https://quera.org/certificate/eSaBbyti/",
    skills: ["react"],
  },
  {
    title: "FRONT-END WEB DEVELOPMENT",
    image: "/images/certificates/front-end.jpg",
    address: "https://quera.org/certificate/niiSD1np/",
    skills: ["javascript", "html", "css", "tailwindcss"],
  },
  {
    title: "WEB DEVELOPMENT WHIT TYPESCRIPT",
    image: "/images/certificates/typescript.jpg",
    address: "https://quera.org/certificate/xkdgNqku/",
    skills: ["typescript"],
  },
  {
    title: "TASK-ORIENTED COURSE IN DOCKER",
    image: "/images/certificates/docker.jpg",
    address: "https://quera.org/certificate/G17GpO4g/",
    skills: ["Docker"],
  },
  {
    title: "LEGACY JAVASCRIPT ALGORITHMS AND DATA STRUCTURES",
    image: "/images/certificates/javascript.png",
    address:
      "https://freecodecamp.org/certification/Hadi-Hajiasgharzadeh/javascript-algorithms-and-data-structures",
    skills: ["javascript"],
  },
];
export default function Certificates() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-28 pt-12">
      <div className="flex flex-col justify-center items-start ">
        <h1 className="my-2 w-full p-2 pl-6 md:pl-12 font-bold text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 border-green-400 border-b-2 ">{`Certificates`}</h1>
        <ul className="md:p-10 p-4 md:font-bold md:text-2xl flex gap-6  flex-wrap ">
          {certificates.map((certificate) => (
            <li
              key={certificate.title}
              className="bg-neutral-800 shadow-2xl text-neutral-400 rounded-2xl p-3 w-full sm:w-[350px] flex flex-col justify-center items-center cursor-pointer hover:text-neutral-100 hover:scale-105 duration-200"
            >
              <Link
                href={certificate.address}
                target="_blank"
                className="w-full flex flex-col h-full justify-between "
              >
                <div>
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={400}
                    height={400}
                    className="rounded-2xl w-full"
                  />
                  <h2 className="text-lg m-2">{certificate.title}</h2>
                </div>
                <ul className="text-xs m-2 flex gap-2 ">
                  {certificate.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-neutral-950 rounded-xl px-2 py-1 font-normal "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
