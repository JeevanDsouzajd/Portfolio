//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-screen bg-primary/30 py-10 lg:py-20 xl:py-36 flex items-center relative overflow-hidden">
      <Circles />
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center xl:w-[40%] lg:text-left text-center space-y-6 p-6 rounded-lg">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-2xl md:text-3xl xl:text-4xl font-bold p-2 rounded-md ml-3"
            >
              My Projects
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm md:text-base xl:text-lg leading-relaxed p-4 rounded-md mb-6 md:mb-8"
            >
              During my free time, I&apos;ve tried to build some personal
              projects. Some of my completed projects include: Player-Pulse,
              MINI-URL, and GIF-IT. These projects have allowed me to gain
              practical experience in backend development, frontend design, and
              API integrations.
            </motion.p>
          </div>
          {/* Slider Section */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] relative"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
