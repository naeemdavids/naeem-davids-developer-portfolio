import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons.
import Link from "next/link"; // Import Next.js Link for client-side navigation.

//Component for the social links.
function SocialLinks() {
  return (
    <div className="flex space-x-4 justify-center items-center">
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/naeem-davids-30386124b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-blue-600 hover:text-blue-900 text-3xl" />
      </Link>

      {/* GitHub */}
      <Link
        href="https://github.com/naeemdavids?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-gray-300 hover:text-gray-500 text-3xl" />
      </Link>
    </div>
  );
}

export default SocialLinks;
