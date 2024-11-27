//links
import Link from "next/link";

//icons
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mr-8">
      <Link
        href={"https://www.linkedin.com/in/jeevandsouza26/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 inline-flex items-center justify-center"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/JeevanDsouzajd"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 inline-flex items-center justify-center"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.instagram.com/jeev_dsouza_/?next=%2F&hl=en"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 inline-flex items-center justify-center"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/Jeevan.Dsouza.JD"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 inline-flex items-center justify-center"
      >
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;

