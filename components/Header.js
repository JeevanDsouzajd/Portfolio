// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

// Import Google Fonts
import { Montserrat } from "next/font/google";
import { Baskervville } from "next/font/google"; // Import Baskervville font

// Montserrat font configuration
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

// Baskervville font configuration
const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"], // Regular weight
  style: "italic", // Italic style
  variable: "--font-baskervville", // Add CSS variable for Tailwind
});

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 md:px-8 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-y-4 md:gap-y-0 py-4 md:py-6 lg:py-8">
          {/* Logo */}
          <Link href={"/"}>
            <h1
              className={`text-xl md:text-2xl lg:text-3xl font-bold font-baskervville italic`}
            >
              Jeevan <span className="text-accent">Dsouza</span>
            </h1>
          </Link>
          {/* Socials */}
          <div className="flex justify-end w-full lg:w-auto">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
