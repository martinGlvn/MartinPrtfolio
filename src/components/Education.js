import React from "react";
import EduExpCard from "./EduExpCard";

const Education = () => {
  return (
    <div className="text-[#53657d]" id="education">
      <div className="max-w-[800px] w-full mx-auto flex flex-col p-5 mt-10">
        <h2 className="lg:hidden text-xl">EDUCATION</h2>
        <EduExpCard
          date="2012-2016"
          title="MSc Computer Science • University Name"
          description="Grade: First Class Honours"
          skills={
            "Subject 1, Subject 2, Subject 3, Subject 4, Subject 5, Subject 6"
          }
          link={"https://google.com"}
        />
        <EduExpCard
          date="2012-2016"
          title="BSc Computer Science • University Name"
          description="Grade: First Class Honours"
          skills={
            "Subject 1, Subject 2, Subject 3, Subject 4, Subject 5, Subject 6, Subject 7, Subject 8, Subject 9"
          }
          link={"https://google.com"}
        />
      </div>
    </div>
  );
};

export default Education;
