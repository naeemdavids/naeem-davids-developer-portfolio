import React from "react";
import Image from "next/image"; // Import the Next.js Image component for optimized image rendering.
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

function MessengerChatPage() {
  return (
    <>
      <Navbar />
      {/*Navbar placed on top of the page.*/}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex">
            <h2 className="text-center text-5xl m-1 border-b-4 border-yellow-500 p-1 pr-5">
              Messenger Chat App
            </h2>
          </div>
          {/* Description Section Text */}
          <div className="justify-center items-center mt-3">
            <div className="text-lg mb-5 pb-5">
              <p className="mb-5">
                A real time one-to-one chat application, where you can chat with
                users. You can send text messages as well as images.
              </p>
              <p>
                The frontend is built with Vite-React, styled with Tailwind CSS,
                while the backend uses Express with Socket.IO for live
                messaging. Users sign up/login via email/password, Google OAuth,
                and GitHub OAuth.
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
                <source src="/MessengerChatAppVideo.mp4" type="video/mp4" />
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
                  The client is built with React, offering a responsive,
                  component-based interface. It communicates with the server via
                  HTTP and handles real-time chat using Socket.IO.
                </p>
                <p className="text-lg mt-5">
                  The server uses Node.js with Express.js for routing,
                  middleware, and API endpoints. It manages authentication,
                  sessions, messages, and chat data.
                </p>
                <p className="text-lg mt-5">
                  MongoDB stores user data and messages, with Mongoose providing
                  a schema-based interface.
                </p>
                <p className="text-lg mt-5">
                  Google and GitHub OAuth are integrated via Passport.js for
                  secure authentication.
                </p>
                <p className="text-lg mt-5">
                  Socket.IO enables instant messaging without page reloads.
                </p>
                <p className="text-lg mt-5">
                  Both client and server are deployed together on Render,
                  streamlining architecture and improving performance.
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
                      "React.js",
                      "Node.js",
                      "Tailwind CSS",
                      "Express.js",
                      "MongoDB",
                      "Mongoose",
                      "Passport.js",
                      "Google OAuth",
                      "Github OAuth",
                      "Socket.IO",
                      "Render",
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
                      href="https://fullstack-messenger-chat-app.onrender.com"
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

export default MessengerChatPage;
