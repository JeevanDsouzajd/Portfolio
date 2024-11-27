import React, { useState } from "react";

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import {
  SiCsharp,
  SiCplusplus,
  SiSqlite,
  SiDotnet,
  SiMongodb,
  SiPostman,
  SiVisualstudio,
  SiVisualstudiocode,
  SiJsonwebtokens,
  SiMicrosoftazure,
  SiAmazonaws,
} from "react-icons/si";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          { icon: <SiCsharp title="C#" />, tooltip: "C#" },
          { icon: <SiCplusplus title="C++" />, tooltip: "C++" },
          { icon: <SiSqlite title="SQL" />, tooltip: "SQL" },
          { icon: <FaHtml5 title="HTML" />, tooltip: "HTML" },
          { icon: <FaCss3 title="CSS" />, tooltip: "CSS" },
          { icon: <FaJs title="JavaScript" />, tooltip: "JavaScript" },
          { icon: <FaReact title="ReactJS" />, tooltip: "ReactJS" },
        ],
      },
      {
        title: "Frameworks",
        icons: [
          {
            icon: <SiDotnet title=".NET Framework" />,
            tooltip: ".NET Framework",
          },
          { icon: <SiAmazonaws title="AWS" />, tooltip: "AWS" },
          { icon: <SiMongodb title="MongoDB" />, tooltip: "MongoDB" },
        ],
      },
      {
        title: "Developer Tools",
        icons: [
          { icon: <FaGit title="Git" />, tooltip: "Git" },
          { icon: <FaGithub title="GitHub" />, tooltip: "GitHub" },
          { icon: <SiMicrosoftazure title="Azure" />, tooltip: "Azure" },
          { icon: <SiPostman title="Postman" />, tooltip: "Postman" },
          { icon: <SiJsonwebtokens title="JWT" />, tooltip: "JSON Web Token" },
          { icon: <SiVisualstudiocode title="VS Code" />, tooltip: "VS Code" },
          {
            icon: <SiVisualstudio title="Visual Studio" />,
            tooltip: "Visual Studio",
          },
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      { title: "VidyaVardhaka College of Engineering", stage: "2019 - 2023" },
      { title: "Vijaya Vittala PU College", stage: "2017 - 2019" },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Jr. Software Engineer - SpurTree Technologies",
        stage: "August 2023 - Present",
      },
    ],
  },
];

// Components
import Circles from "../../components/Circles";

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-screen bg-primary/30 py-16 md:py-24 text-center xl:text-left overflow-hidden">
      <Circles />
      <div className="container mx-auto min-h-screen flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center px-4 xl:px-0  -mt-20">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-3xl sm:text-2xl md:text-3xl xl:text-4xl"
          >
            Solving problems <br />
            using <span className="text-accent">technology</span> <br />
            to make the world <br /> a better place.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-xs sm:text-sm md:text-base"
          >
            A Software Engineer, Developer, Musician, and Gamer currently
            working as a Jr. Software Engineer at SpurTree Technologies. My
            current tech stack primarily includes .NET for backend development.
          </motion.p>

          {/* Counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={12} />+
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Information Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] px-4 xl:px-0"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg text-sm sm:text-base relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0 text-sm sm:text-base">
                  {item.title}
                </div>
                <div className="hidden md:flex">-</div>
                <div className="text-sm sm:text-base">{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* Icons with Tooltips */}
                  {item.icons?.map((iconData, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-2xl text-white relative group hover:text-accent transition-all duration-300"
                    >
                      {iconData.icon}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:flex">
                        <div className="bg-white text-primary text-sm font-semibold px-2 py-1 rounded-md shadow-lg">
                          {iconData.tooltip}
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-solid border-t-white border-t-8 border-x-transparent border-x-[6px] border-b-0"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
