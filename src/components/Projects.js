import React from "react";
import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div className="text-[#c8c6c0]" id="projects">
      <div className="max-w-[800px] w-full mx-auto flex- flex-col p-5 mt-10">
        <h2 className="lg:hidden text-xl">PROJECTS</h2>
        <div className="mx-auto items-center justify-center">
          <a href="https://github.com/martinGlvn/ServerlessAWS" target="blank">
            <ProjectsCard
              image={img1}
              title="ServerlessTaskApp"
              description="A fullstack billing application that offers a comprehensive solution, covering user registration, authentication, report generation, and the implementation of an attractive frontend. We simplify the billing process by providing a secure and efficient system that meets all user needs"
              skills="Serverless, NodeJS, DynamoDB, Lambda, Api Gateway, Cognito"
            />
          </a>
          <a
            href="https://github.com/martinGlvn/MicroserviceArchitecture"
            target="blank"
          >
            <ProjectsCard
              image={img2}
              title="VideoConvert"
              description="A video to MP3 conversion application built with a microservices architecture, utilizing technologies such as Python, Docker, API Gateway, MySQL, and MongoDB. Our fullstack solution ensures smooth video conversion to MP3, with scalability and reliability provided by microservices. We simplify the conversion process, offering users a secure and efficient system that meets all their needs."
              skills="Python, Docker, Kubernets, Api Gateway, MongoDB, RabbitMQ"
            />
          </a>

          {/* <button className="mt-10 w-[120px] px-2 py-2 text-[#94a3b8] hover:text-[#4DC9CA] hover:bg-[#4DC9CA]/20 border border-[#94a3b8] hover:border-[#4DC9CA] rounded-lg">
            <a
              href="https://google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
