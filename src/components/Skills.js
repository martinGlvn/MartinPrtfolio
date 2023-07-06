import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="flex justify-start flex-wrap">
      {skills &&
        skills.split(",").map((skills, index) => (
          <p
            key={index}
            className="mt-2 text-xs px-2 py-2 mr-2 text-[#8a4dc9;] bg-[#8a4dc9]/20 rounded-lg"
          >
            {skills.trim()}
          </p>
        ))}
    </div>
  );
};

export default Skills;
