import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Skills from "./Skills";

const EduExpCard = ({ link, date, title, description, skills }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="grid lg:grid-cols-4 items-baseline mt-10 p-3 hover:bg-[#94a3b8]/20 rounded-lg">
        <div className="lg:col-span-1">
          <h3>{date}</h3>
        </div>
        <div className="lg:col-span-3">
          <h1 className="flex items-baseline">
            {title} <BsArrowUpRight className="ml-3" />
          </h1>
          <p className="mt-5 text-[#53657d] text-sm">{description}</p>
          <Skills skills={skills} />
        </div>
      </div>
    </a>
  );
};

export default EduExpCard;
