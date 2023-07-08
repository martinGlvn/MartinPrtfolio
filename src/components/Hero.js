import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFileAlt } from "react-icons/fa";
import ProfilePicture from "../assets/profile.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="text-[#fff] ">
        {/* PHONE */}
        <div className="max-w-[800px] lg:hidden h-screen w-full justify-center items-center mx-auto flex flex-col p-5 mt-5">
          <img
            src={ProfilePicture}
            className="w-40 rounded-full m-5 shadow-[1px_1px_5px_1px_#8a4dc9]"
            style={{ borderWidth: "0px" }}
          />
          <h1 className="text-2xl font-semibold press-start">Martin Galván</h1>
          <h2 className="text-l font-light mt-5 text-[#fff]">
            Cloud Engineer × Security × Architecture{" "}
            <span className="text-[#1a202c]">
              <a href="https:google.com"></a>
            </span>
          </h2>
          <p className="mt-5 max-w-[400px] text-center text-[#fff]">
            {" "}
            Self-taught Cloud Engineer with good knowledge and experience in
            developing cloud architectures
          </p>
          <div className="flex flex-row gap-5 mt-5 max-w-[200px] justify-between">
            <a target="blank" href="https://github.com/martinGlvn">
              <FaGithub
                size={26}
                className=" text-[#fff] hover:text-[#c8c6c0] hover:cursor-pointer"
              />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/martingalv%C3%A1n/"
            >
              <FaLinkedin
                size={26}
                className=" text-[#fff] hover:text-[#c8c6c0] hover:cursor-pointer"
              />
            </a>
            <a target="blank" href="/src/assets/MartinGalván_CloudEngineer.pdf">
              <FaFileAlt
                size={24}
                className=" text-[#fff] hover:text-[#c8c6c0] hover:cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* LARGE & MEDIUM DEVICES */}
        <div className="max-w-[800px] w-full hidden lg:block lg:h-screen mx-auto flex-col p-5 lg:mt-10 mt-5">
          <img
            src={ProfilePicture}
            className="w-40 rounded-full mb-5 border shadow-[1px_1px_5px_1px_#8a4dc9]"
            style={{ borderWidth: "0px" }}
          />
          <h1 className="text-3xl font-semibold press-start">Martin Galván</h1>
          <h2 className="text-l mt-5 text-[#fff]">
            Cloud Engineer × Security × Architecture{" "}
            <span className="text-[#fff]">
              <a href="https:google.com"></a>
            </span>
          </h2>
          <p className="mt-5 max-w-[400px] text-[#c8c6c0] font-normal">
            {" "}
            Self-taught Cloud Engineer with good knowledge and experience in
            developing cloud architectures
          </p>
          {/* test */}
          <div className="flex flex-row mt-5 max-w-[200px] justify-between">
            <a target="blank" href="https://github.com/martinGlvn">
              <FaGithub
                size={26}
                className=" text-[#fff] hover:text-[#c8c6c0] hover:cursor-pointer"
              />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/martingalv%C3%A1n/"
            >
              <FaLinkedin
                size={26}
                className=" text-[#fff] hover:text-[#c8c6c0] hover:cursor-pointer"
              />
            </a>
            <a target="blank" href="https:instagram.com">
              <FaFileAlt
                size={24}
                className=" text-[#fff] hover:text-[#c8c6c0] hover:cursor-pointer"
              />
            </a>
          </div>

          {/* NAVIGATION */}
          <nav>
            <ul className="lg:flex flex-col mt-[50px]">
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#c8c6c0]">
                <Link
                  smooth
                  spy
                  to="about"
                  offset={0}
                  activeClass={"text-[#c8c6c0]"}
                  activeStyle={{
                    borderBottom: "2px solid #56008B",
                    paddingBottom: "5px",
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#c8c6c0]">
                <Link
                  smooth
                  spy
                  to="education"
                  offset={0}
                  activeClass={"text-[#c8c6c0]"}
                  activeStyle={{
                    borderBottom: "2px solid #56008B",
                    paddingBottom: "5px",
                  }}
                >
                  EDUCATION
                </Link>
              </li>
              {/* <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#c8c6c0]">
                <Link
                  smooth
                  spy
                  to="experience"
                  offset={0}
                  activeClass={"text-[#c8c6c0]"}
                  activeStyle={{
                    borderBottom: "2px solid #56008B",
                    paddingBottom: "5px",
                  }}
                >
                  EXPERIENCE
                </Link>
              </li> */}
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#c8c6c0]">
                <Link
                  smooth
                  spy
                  to="projects"
                  offset={0}
                  activeClass={"text-[#c8c6c0]"}
                  activeStyle={{
                    borderBottom: "2px solid #56008B",
                    paddingBottom: "5px",
                  }}
                >
                  PROJECTS
                </Link>
              </li>
            </ul>
          </nav>

          {/*  */}
          {/* <div className="flex flex-row mt-10">
            <a href="https:github.com">
              <FaGithub
                size={26}
                className="mr-4 text-[#53657d] hover:text-[#1a202c] hover:cursor-pointer"
              />
            </a>
            <a href="https:linkedin.com">
              <FaLinkedin
                size={26}
                className="mr-4 text-[#53657d] hover:text-[#1a202c] hover:cursor-pointer"
              />
            </a>
            <a href="https:instagram.com">
              <FaInstagram
                size={26}
                className="mr-4 text-[#53657d] hover:text-[#1a202c] hover:cursor-pointer"
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
