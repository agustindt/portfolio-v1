import React from "react";
import css from "../assets/css.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import bootstrap from "../assets/bootstrap.png";

const Experience = () => {
  const images = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "TYPESCRIPT",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: react,
      title: "REACT",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: node,
      title: "NODEJS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: git,
      title: "GIT",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: mysql,
      title: "MYSQL",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
    {
      id: 12,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {images.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

