import React from "react";
import PokedexImage from "../assets/portfolio/PokedexJS.jpg";
import BuzzFeedImage from "../assets/portfolio/BuzzFeed.jpg";
import FinalHSImage from "../assets/portfolio/FinalHS.jpg";
import ReactPortfolioImage from "../assets/portfolio/reactporfolio.jpg";

const PortfolioItem = ({ src, link }) => {
  const handleLinkClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
      <img src={src} alt="Portfolio item" className="rounded-md" />
      <div className="flex items-center justify-center">
        <button
          className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
          onClick={handleLinkClick}
        >
          Code
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: BuzzFeedImage,
      link: "https://github.com/agustindt/BuzzFeed-Clone-TypeScript",
    },
    {
      id: 2,
      src: FinalHSImage,
      link: "https://github.com/VilladaG32022/CocinamosPorLosNinos",
    },
    {
      id: 3,
      src: ReactPortfolioImage,
      link: "https://github.com/agustindt/portfolio-v1",
    },
    {
      id: 4,
      src: PokedexImage,
      link: "https://github.com/agustindt/Pokedex-ReactJS",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <PortfolioItem key={id} src={src} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;