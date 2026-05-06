import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projects/project-1.png"
          title="Modern Next.js Portfolio"
          description="A stunning portfolio website built with Next.js 14 and Tailwind CSS, featuring smooth animations and a premium space theme."
        />
        <ProjectCard
          src="/projects/project-2.png"
          title="Interactive Website Design"
          description="A highly interactive website showcasing modern UI/UX design principles and responsive layouts."
        />
        <ProjectCard
          src="/projects/project-3.png"
          title="Space Themed Dashboard"
          description="A data visualization dashboard with a futuristic space aesthetic, built for high performance and scalability."
        />
      </div>
    </div>
  );
};

export default Projects;
