import React from "react";
import EduExpCard from "./EduExpCard";

const Experience = () => {
  return (
    <div className="text-[#53657d]" id="experience">
      <div className="max-w-[800px] w-full mx-auto flex flex-col p-5 mt-10">
        <h2 className="lg:hidden text-xl">EXPERIENCE</h2>
        <EduExpCard
          date="JAN 1 - PRESENT"
          title="EXPERIENCE 1"
          description="Pellentesque ut lacinia quam. Maecenas eu tortor eget sem luctus suscipit. Donec eget fermentum urna. Duis nec sapien sit amet ipsum convallis ultricies non id mauris. Sed pellentesque tortor quis sem tincidunt, et fringilla justo commodo. Morbi sed dapibus nulla. Quisque in erat in risus volutpat fermentum nec non lacus. Nulla facilisi. Fusce mattis sem at aliquet finibus."
          skills="HTML, CSS, JavaScript, React.js, Python, Tailwind"
          link={"https://google.com"}
        />
        <EduExpCard
          date="JAN - JUN 2023"
          title="EXPERIENCE 2"
          description="Pellentesque ut lacinia quam. Maecenas eu tortor eget sem luctus suscipit. Donec eget fermentum urna. Duis nec sapien sit amet ipsum convallis ultricies non id mauris. Sed pellentesque tortor quis sem tincidunt, et fringilla justo commodo. Morbi sed dapibus nulla. Quisque in erat in risus volutpat fermentum nec non lacus. Nulla facilisi. Fusce mattis sem at aliquet finibus."
          skills="HTML, CSS, JavaScript"
          link={"https://google.com"}
        />
      </div>
    </div>
  );
};

export default Experience;
