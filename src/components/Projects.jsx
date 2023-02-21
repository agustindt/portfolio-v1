import React from "react";
import Pokedex from "../assets/portfolio/PokedexJS.jpg";
import BuzzFeed from "../assets/portfolio/BuzzFeed.jpg";
import FinalHS from "../assets/portfolio/FinalHS.jpg";
import reactporfolio from "../assets/portfolio/reactporfolio.jpg";

const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      src: BuzzFeed,
      links: "https://github.com/agustindt/BuzzFeed-Clone-TypeScript",
    },
    {
      id: 2,
      src: FinalHS,
      links: "https://github.com/VilladaG32022/CocinamosPorLosNinos",
    },
    {
      id: 3,
      src: reactporfolio,
      links: "https://github.com/agustindt/portfolio-v1",
    },
    {
      id: 4,
      src: Pokedex,
      links: "https://github.com/agustindt/Pokedex-ReactJS",
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, links }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img
                src={src}
                alt="pokedex"
                className=" rounded-md "
              />
              <div className=" flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4" onClick={() => window.open(links, "_blank")}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;