//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-20 md:py-36 flex items-center relative">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text Section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-12 xl:mb-0 space-y-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-3xl md:text-4xl xl:text-5xl font-bold"
            >
              My Projects
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-sm md:text-base xl:text-lg"
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
            className="w-full xl:max-w-[65%] relative"
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
