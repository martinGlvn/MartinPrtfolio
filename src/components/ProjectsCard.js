import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Skills from "./Skills";

const ProjectsCard = ({ image, title, description, skills }) => {
  return (
    <div className="grid lg:grid-cols-4 mt-10 p-3 hover:bg-[#94a3b8]/5  rounded-lg hover:cursor-pointer">
      <div className="lg:col-span-4 mb-5">
        <img src={image} className="rounded-lg" />
      </div>
      <div className="lg:col-span-4">
        <h1 className="flex items-baseline">
          {title} <BsArrowUpRight className="ml-3" />
        </h1>
        <p className="mt-5 text-[c8c6c0] text-sm">{description}</p>
        <Skills skills={skills} />
      </div>
    </div>
  );
};

export default ProjectsCard;
