import React from "react";
import Image from "next/image"; // Import the Next.js Image component for optimized image rendering.

//Fancy Introduction page.
function Introduction() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center relative bg-cover bg-center"
      style={{
        backgroundImage: 'url("/animated-flying-through-the-stars.gif")',
      }}
    >
      <h1 className="text-2xl md:text-5xl font-bold text-center">
        Hi, I&apos;m Naeem | A Full-Stack Web Developer.
      </h1>

      <h5 className="text-base md:text-xl text-center">
        I build Front-end and Back-end websites with easy user interfaces.
      </h5>
      <div className="absolute bottom-24 md:bottom-10">
        <Image
          src="/Animation-arrowdownSlide.gif"
          width={140}
          height={140}
          alt="Downwards Arrow"
        />
      </div>
    </div>
  );
}

export default Introduction;