import React from "react";
import Image from "next/image"; // Import the Next.js Image component for optimized image rendering.
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

function ITunesSearchPage() {
  return (
    <>
      <Navbar />
      {/*Navbar placed on top of the page.*/}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex">
            <h2 className="text-center text-5xl m-1 border-b-4 border-yellow-500 p-1 pr-5">
              iTunes Search App
            </h2>
          </div>
          {/* Description Section Text */}
          <div className="justify-center items-center mt-3">
            <div className="text-lg mb-5 pb-5">
              <p className="mb-5">
                A search app where you can watch and preview movies, podcasts,
                audio books, short films etc. The audio and video are all pulled
                in from the Apple iTunes Api.
              </p>
              <p>
                This is a Full Stack Application that was made serverless using
                Next.js.
              </p>
            </div>
            <div className="mt-2 justify-center items-center relative border-t-4 border-b-4 border-yellow-500 py-4">
              {/* Display the ND Stock Gallery video */}
              <video
                autoPlay
                muted
                loop
                className="w-full max-w-3xl sm:max-w-7xl"
              >
                <source src="/iTunesSearchAppVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Webstack Explanation, Technologies Used, and Visit Website */}
            <div className="flex flex-col sm:flex-row mt-5 py-5">
              {/* Webstack Explanation */}
              <div className="flex-1 sm:mr-4">
                <h2 className="text-4xl my-4 text-center border-b-4 border-yellow-500">
                  Web Stack Explanation
                </h2>
                <p className="text-lg">
                  I originally built this old school project with only React and
                  Express. But it was quite slow sa I hosted the back end server
                  on Render, so this app suffered from slow cold starts. Then I
                  later migrated it to Next.js because of its server-side
                  rendering and dynamic routing, making it much faster. I Also
                  prefer using Tailwind CSS because of how easy it is to use.
                </p>
                <p className="text-lg mt-5">
                  I use React client side fetching to handle API requests from
                  the iTunes Search Api from Apple.
                </p>
                <p className="text-lg mt-5">
                  While using HTML, CSS, and JavaScript, complemented by
                  React.js for building dynamic, component-based interfaces.
                </p>
                <p className="text-lg mt-5">
                  Finally, Deployment is handled via Vercel which is much
                  faster.
                </p>
              </div>
              {/* Technologies Used and Visit Website */}
              <div className="flex-1 flex flex-col items-center">
                {/* Technologies Used */}
                <div>
                  <h2 className="text-4xl mb-4 text-center">
                    Technologies Used
                  </h2>
                  <ul className="flex flex-wrap gap-4 justify-center">
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
                        className="bg-yellow-500 text-black text-center text-xl rounded-md inline-block px-2 py-1"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Arrow and Visit Website */}
                <div className="flex flex-col items-center mt-5 relative">
                  {/* Arrow above the button */}
                  <div className="mb-2">
                    <Image
                      src="/Animation-arrowdownSlide.gif"
                      width={70}
                      height={70}
                      alt="Downwards Arrow"
                    />
                  </div>
                  {/* Visit Website Button */}
                  <div className="text-center">
                    <Link
                      href="https://itunes-app-nextjs.vercel.app/"
                      target="_blank" // Open the link in a new browser tab.
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-black p-1 rounded-lg text-4xl md:text-5xl"
                    >
                      Visit Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITunesSearchPage;
