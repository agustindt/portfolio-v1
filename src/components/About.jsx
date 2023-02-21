import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20">
          Hello everyone! I'm a 19-year-old from Argentina who has a passion for
          music and programming. As an enthusiastic junior developer, I'm always
          on the lookout for new challenges that can help me hone my skills and
          push me to become a better programmer. I love diving into complex
          problems and coming up with elegant solutions that make an impact. I
          believe that with hard work, dedication, and a passion for what I do,
          I can achieve anything I set my mind to. So, if you're looking for a
          motivated, creative, and driven junior developer, I'm your guy!
        </p>
        <br />
        <p className="text-xl">
          I'm a developer with 4 years of experience and a history
          of successful internships at various companies.
        </p>
      </div>
    </div>
  );
};

export default About;
