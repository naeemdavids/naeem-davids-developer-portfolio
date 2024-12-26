import React from "react";
import Image from "next/image"; // Import the Next.js Image component for optimized image rendering.
import Link from "next/link";

//ITunesSearchApp Component for the Projects List items.
function ITunesSearchAppListComponent() {
  return (
    <div className="my-3 mt-5">
      <div className="flex">
        <h2 className="text-center text-xl md:text-4xl m-1 border-b-4 border-yellow-500 p-1">
          iTunes Search App
        </h2>
        <h3 className="text-center text-lg md:text-3xl m-3 border-2 rounded-lg border-yellow-500 p-1">
          Full Stack Project
        </h3>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
        {/* Project Video */}
        <div className="flex-shrink-0 mt-2">
          {/* Display the video */}
          <video
            autoPlay
            muted
            loop
            className="max-w-xs md:max-w-md lg:max-w-2xl"
          >
            <source src="/iTunesSearchAppVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Skills and Description */}
        <div className="flex-1">
          {/* My Skills Section */}
          <div>
            <h2 className="text-xl md:text-3xl mb-4 text-center">
              Technologies Used
            </h2>
            <ul className="flex flex-wrap gap-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Node.js",
                "Bootstrap",
                "Next.js",
                "Tailwind CSS",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="bg-yellow-500 text-black text-center text-md md:text-xl rounded-md inline-block px-2 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <br />
          {/* About Description Section */}
          <div className="text-lg">
            <p className="mb-4">
              A search app where you can watch and preview movies, podcasts,
              audio books, short films etc. The audio and video are all pulled
              in from the Apple iTunes Api.
            </p>
            <p>
              This is a Full Stack Application that was made serverless using
              Next.js.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src="/Animation-arrowrightslide.gif"
                width={90}
                height={90}
                alt="Downwards Arrow"
              />
            </div>
            <div className="text-center text-xl md:text-4xl m-5 p-3">
              <Link
                href="/projects/itunessearch"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-black py-2 px-4 rounded-lg"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITunesSearchAppListComponent;
