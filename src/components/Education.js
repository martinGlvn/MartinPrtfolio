import React from "react";
import EduExpCard from "./EduExpCard";

const Education = () => {
  return (
    <div className="text-[#fff]" id="education">
      <div className="max-w-[800px] w-full mx-auto flex flex-col p-5 mt-10 ">
        <h2 className="lg:hidden text-xl ">EDUCATION</h2>
        <EduExpCard
          link="https://www.credly.com/badges/673a2713-1376-4a8b-b54f-75a33eb399fe/public_url"
          date="09/2023"
          title="Google Cybersecurity Professional Certificate"
          description="Identification and mitigation of risks, threats and vulnerabilities in systems"
          skills={"Linux, SQL, Python, Networks, Detection Systems"}
        />
        <EduExpCard
          link="https://www.credly.com/badges/de084595-a7ab-4f75-912c-a732a54355bd/public_url"
          date="06/2023"
          title="AWS re/Start of Amazon Web Services"
          description="Implementation of cloud infrastructures"
          skills={"Lambda, RDS ,CloudWatch, ECS, Redshift"}
        />
      </div>
    </div>
  );
};

export default Education;
