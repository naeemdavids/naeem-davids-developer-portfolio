import React from "react";
import NDStockGalleryAppListComponent from "./projectsListComponents/NDStockGalleryAppListComponent";
import ITunesSearchAppListComponent from "./projectsListComponents/ITunesSearchAppListComponent";

//Component for the project page.
function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white pt-5 mt-10">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h1 className="text-center text-5xl md:text-7xl mb-8 mt-5">PROJECTS</h1>
        {/* Main Content */}
        <NDStockGalleryAppListComponent />
        <br></br>
        <ITunesSearchAppListComponent />
      </div>
    </div>
  );
}

export default Projects;