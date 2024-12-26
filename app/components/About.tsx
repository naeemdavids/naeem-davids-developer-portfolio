import React from "react";
import Image from "next/image"; // Import the Next.js Image component for optimized image rendering.

//About page describing a bit of myself.
function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white pt-5">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-center text-5xl md:text-7xl mb-8">ABOUT</h1>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/NaeemDavidsPicJPG.jpg"
                alt="My Portfolio Image"
                width={400}
                height={400}
                className="rounded-2xl border-4 border-amber-400"
              />
            </div>
          </div>
          {/* Skills and Description */}
          <div className="flex-1">
            {/* My Skills Section */}
            <div>
              <div className="text-center">
                <h2 className="text-3xl mb-4 border-b-4 border-yellow-500 inline-block">
                  My Skills
                </h2>
              </div>

              <ul className="flex flex-wrap gap-4">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "jQuery",
                  "Git",
                  "GitHub",
                  "Bootstrap",
                  "React.js",
                  "Express.js",
                  "Node.js",
                  "MongoDB",
                  "Mongoose",
                  "JSON Web Token (JWT)",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Responsive Design",
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="bg-white text-black text-center text-lg py-2 p-4 rounded-lg shadow-lg inline-block"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <br />
            {/* About Description Section */}
            <div className="text-lg m-1">
              <p className="mb-4">
                Hi, I&apos;m Naeem Davids. A fullstack Web Developer, based in
                Cape Town, South Africa. I make use of Front-end and Back-end
                Technologies, connecting both, to provide a seamless and easy
                user experience.
              </p>
              <p>
                I&apos;ve been learning to code for the past few years now. I
                studied and attained various skills at my coding school
                HyperionDev. I&apos;m eager to learn new software and tech,
                learning along the way as I code, to better my coding skills.
                I&apos;m open to job opportunities where I can contribute,
                learn, and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
