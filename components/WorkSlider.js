const projects = [
  {
    title: "PLAYERPULSE",
    path: "/thumb1.jpg",
    projectText: "GitHub",
    projectLink: "https://github.com/JeevanDsouzajd/PlayerPulse",
  },
  {
    title: "MINI-URL",
    path: "/thumb2.jpg",
    liveText: "Live",
    liveLink: "https://jeevandsouzajd.github.io/MINI-URL/",
    projectText: "Github",
    projectLink: "https://github.com/JeevanDsouzajd/MINI-URL",
  },
  {
    title: "GIF-IT",
    path: "/thumb4.jpg",
    liveText: "Live",
    liveLink: "https://jeevandsouzajd.github.io/GIF-IT/",
    projectText: "Github",
    projectLink: "https://github.com/JeevanDsouzajd/GIF-IT",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import required modules
import { Pagination, Navigation } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";
//next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 }, // Small screens (1 slide)
        768: { slidesPerView: 2 }, // Medium screens (2 slides)
        1024: { slidesPerView: 3 }, // Large screens (2.5 slides)
      }}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      className="h-[300px] md:h-[400px]" // Consistent height for slider
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative rounded-lg overflow-hidden flex items-center justify-center group"
            style={{ height: "100%" }}
          >
            {/* Image */}
            <Image
              src={project.path}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            {/* Overlay Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#E838CC] to-[#4A22BD]
                opacity-0 group-hover:opacity-80 transition-all duration-700"
            ></div>
            {/* Title and Links */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-2
                opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              {/* Project Title */}
              <h3 className="text-white text-lg md:text-xl font-bold">
                {project.title}
              </h3>
              {/* Links */}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-base md:text-lg font-semibold delay-100"
                >
                  {project.liveText}
                </a>
              )}
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base md:text-lg font-semibold delay-150"
              >
                {project.projectText}
              </a>
              <BsArrowRight className="text-xl md:text-2xl delay-200 text-white" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
