//next image
import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowDownRight, HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 relative w-[145px] h-[145px]">
      <Link
        href="/work"
        className="absolute inset-0 flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        {/* Spinning Image */}
        <Image
          src="/rounded-text.png"
          width={111}
          height={118}
          alt="Project Button"
          className="animate-spin-slow"
        />

        {/* Arrow Icon */}
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};


export default ProjectsBtn;
