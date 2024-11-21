import React, { useState } from "react";

// icons
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

//  data
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
          {
            icon: <SiAmazonaws title="Amazon Web Services (AWS)" />,
            tooltip: "AWS",
          },
          { icon: <SiMongodb title="MongoDB" />, tooltip: "MongoDB" },
        ],
      },
      {
        title: "Developer Tools",
        icons: [
          { icon: <FaGit title="Git" />, tooltip: "Git" },
          { icon: <FaGithub title="GitHub" />, tooltip: "GitHub" },
          {
            icon: <SiMicrosoftazure title="Microsoft Azure" />,
            tooltip: "Azure",
          },
          { icon: <SiPostman title="Postman" />, tooltip: "Postman" },
          {
            icon: <SiJsonwebtokens title="JSON Web Token (JWT)" />,
            tooltip: "JWT",
          },
          {
            icon: <SiVisualstudiocode title="Visual Studio Code" />,
            tooltip: "VS Code",
          },
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
      {
        title: "VidyaVardhaka College of Engineering",
        stage: "2019 - 2023",
      },
      {
        title: "Vijaya Vittala PU College",
        stage: "2017 - 2019",
      },
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

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row 
        gap-x-6"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Solving problems <br />
            using <span className="text-accent">technology</span> <br />
            to make the world <br />a better place.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            A Software Engineer, Developer, Musician and a Gamer currently
            working as a Jr. Software Engineer at SpurTree Technologies, and the
            tech stack I am currenty working on is Dotnet backend.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div
                className="relative flex-1 after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={12} /> +
                </div>
                <div
                  className="text-sm uppercase tracking-[1px] leading-[1.4] 
                max-w-[100px]"
                >
                  Years of experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 
                after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row 
                max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons with tooltips */}
                    {item.icons?.map((iconData, iconIndex) => {
                      return (
                        <div
                          key={iconIndex}
                          className="text-2xl text-white relative group hover:text-accent transition-all duration-300"
                        >
                          {/* Icon */}
                          {iconData.icon}

                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:flex">
                            <div className="bg-white text-primary text-sm font-semibold px-2 py-1 rounded-md shadow-lg">
                              {iconData.tooltip}
                            </div>
                            {/* Triangle */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-solid border-t-white border-t-8 border-x-transparent border-x-[6px] border-b-0"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
