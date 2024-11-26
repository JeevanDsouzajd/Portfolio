// next image
import Image from "next/image";

// components
import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen flex flex-col md:flex-row relative">
      {/* Text and Image Container */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start md:pl-20 relative z-10">
        {/* Center content for smaller screens */}
        <div className="flex flex-col items-center md:items-start justify-center h-full">
          {/* Title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left my-8"
          >
            Hi, I'm Jeevan Dsouza
            <br />
            <span className="text-accent leading-loose text-4xl">
              Dotnet Developer
            </span>
          </motion.h1>

          {/* Button */}
          {/* Show only on smaller screens */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>

          {/* Show only on larger screens */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-8 hidden xl:flex justify-center z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex-1 flex justify-center items-end relative z-10">
        {/* Avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full max-w-[737px] absolute bottom-0"
        >
          <Avatar />
        </motion.div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-explosion bg-cover bg-center bg-no-repeat mix-blend-color-dodge z-0"
      ></div>

      {/* Particles */}
      <ParticleContainer />
    </div>
  );
};

export default Home;
