// next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"], // Specify the subset
  weight: ["400", "700"], // Use required font weights
  variable: "--font-montserrat", // Add a CSS variable for Tailwind integration
});

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <h1 className="text-2xl font-bold font-montserrat">
              Jeevan <span className="text-accent">Dsouza</span>
            </h1>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
