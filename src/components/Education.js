import React from "react";
import EduExpCard from "./EduExpCard";

const Education = () => {
  return (
    <div className="text-[#fff]" id="education">
      <div className="max-w-[800px] w-full mx-auto flex flex-col p-5 mt-10">
        <h2 className="lg:hidden text-xl">EDUCATION</h2>
        <EduExpCard
          date="2023"
          title="AWS re/Start of Amazon Web Services"
          description="Grade: First Class Honours"
          skills={"Lambda, RDS ,CloudWatch, ECS, Redshift"}
          link={"https://google.com"}
        />
        <EduExpCard
          date="2023"
          title="Google Cybersecurity Professional Certificate"
          description="Grade: First Class Honours"
          skills={"Linux, SQL, Python, Networks, Detection Systems"}
          link={"https://google.com"}
        />
      </div>
    </div>
  );
};

export default Education;
