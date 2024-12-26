import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function Footer() {
  // Quick Footer component.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center px-4 text-center py-4 bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Flex container for the two sections */}
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div>
            <Link href="/">
              <h4 className="text-2xl md:text-4xl">Naeem Davids</h4>
            </Link>
            <p className="text-sm md:text-lg">
              Building and improving my web development skills.
            </p>
          </div>
          {/* Right Section */}
          <div className="text-right">
            <h4 className="text-2xl md:text-4xl">Social</h4>
            <SocialLinks />
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <p className="m-2 pt-2 text-sm md:text-base">
        Made by Naeem Davids | {currentYear}
      </p>
    </footer>
  );
}
