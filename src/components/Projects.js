import React from "react";
import projects from "../assets/project.jpg";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="text-[#53657d]" id="projects">
      <div className="max-w-[800px] w-full mx-auto flex- flex-col p-5 mt-10">
        <h2 className="lg:hidden text-xl">PROJECTS</h2>
        <div className="mx-auto items-center justify-center">
          <ProjectsCard
            image={projects}
            title="PROJECT 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod eleifend mauris, id auctor urna iaculis id. Sed venenatis bibendum nunc id condimentum. Maecenas vulputate enim a sollicitudin rutrum. Nullam efficitur viverra nisi ac tincidunt. Donec consequat lectus et nulla porta, ut sagittis ex dignissim. Mauris mollis interdum purus, eget feugiat dui bibendum vitae. Aliquam id consequat nulla. Donec non augue placerat, condimentum nulla sed, facilisis ligula. Quisque varius, mi non gravida feugiat, leo tortor tincidunt orci, et ullamcorper dui justo id lectus. Nullam iaculis purus in ipsum convallis dictum. Nullam fermentum, dui eget finibus bibendum, enim nisi bibendum tortor, eu aliquam enim sem vitae nunc. Quisque bibendum efficitur malesuada."
            skills="Python"
          />
          <ProjectsCard
            image={projects}
            title="PROJECT 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod eleifend mauris, id auctor urna iaculis id. Sed venenatis bibendum nunc id condimentum. Maecenas vulputate enim a sollicitudin rutrum. Nullam efficitur viverra nisi ac tincidunt. Donec consequat lectus et nulla porta, ut sagittis ex dignissim. Mauris mollis interdum purus, eget feugiat dui bibendum vitae. Aliquam id consequat nulla. Donec non augue placerat, condimentum nulla sed, facilisis ligula. Quisque varius, mi non gravida feugiat, leo tortor tincidunt orci, et ullamcorper dui justo id lectus. Nullam iaculis purus in ipsum convallis dictum. Nullam fermentum, dui eget finibus bibendum, enim nisi bibendum tortor, eu aliquam enim sem vitae nunc. Quisque bibendum efficitur malesuada."
            skills="HTML, CSS, JavaScript, React"
          />
          <button className="mt-10 w-[120px] px-2 py-2 text-[#94a3b8] hover:text-[#4DC9CA] hover:bg-[#4DC9CA]/20 border border-[#94a3b8] hover:border-[#4DC9CA] rounded-lg">
            <a
              href="https://google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
