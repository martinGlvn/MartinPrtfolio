import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
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
            className="w-40 rounded-full m-5 shaow border border-[#1a202c]"
            style={{ borderWidth: "2px" }}
          />
          <h1 className="text-4xl font-semibold">Y Codes</h1>
          <h2 className="text-l font-light mt-5 text-[#53657d]">
            Software Developer{" "}
            <span className="text-[#1a202c]">
              <a href="https:google.com">@Google</a>
            </span>
          </h2>
          <p className="mt-5 max-w-[400px] text-center text-[#53657d]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            euismod eleifend mauris, id auctor urna iaculis id.
          </p>
          <div className="flex flex-row mt-10">
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
          </div>
        </div>

        {/* LARGE & MEDIUM DEVICES */}
        <div className="max-w-[800px] w-full hidden lg:block lg:h-screen mx-auto flex-col p-5 lg:mt-10 mt-5">
          <img
            src={ProfilePicture}
            className="w-40 rounded-full mb-5 shaow border border-[#1a202c]"
            style={{ borderWidth: "2px" }}
          />
          <h1 className="text-3xl font-semibold press-start">Martin Galván</h1>
          <h2 className="text-l font-mono mt-5 text-[#fff]">
            Cloud Engineer{" "}
            <span className="text-[#b71cbc]">
              <a href="https:google.com">Amazon Web Service Microsoft Azure</a>
            </span>
          </h2>
          <p className="mt-5 max-w-[400px] text-[#c8c6c0]">
            {" "}
            Self-taught Cloud Engineer with good knowledge and experience in
            developing cloud architectures
          </p>
          {/* test */}
          <div className="flex flex-row mt-5 max-w-[200px] justify-between">
            <a href="https:github.com">
              <FaGithub
                size={26}
                className=" text-[#fff] hover:text-[#1a202c] hover:cursor-pointer"
              />
            </a>
            <a href="https:linkedin.com">
              <FaLinkedin
                size={26}
                className=" text-[#fff] hover:text-[#1a202c] hover:cursor-pointer"
              />
            </a>
            <a href="https:instagram.com">
              <FaInstagram
                size={26}
                className=" text-[#fff] hover:text-[#1a202c] hover:cursor-pointer"
              />
            </a>
          </div>

          {/* NAVIGATION */}

          <nav>
            <ul className="lg:flex flex-col mt-[30px]">
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#1a202c]">
                <Link
                  smooth
                  spy
                  to="about"
                  offset={0}
                  activeClass={"text-[#1a202c]"}
                  activeStyle={{
                    borderBottom: "2px solid black",
                    paddingBottom: "5px",
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#1a202c]">
                <Link
                  smooth
                  spy
                  to="education"
                  offset={0}
                  activeClass={"text-[#1a202c]"}
                  activeStyle={{
                    borderBottom: "2px solid black",
                    paddingBottom: "5px",
                  }}
                >
                  EDUCATION
                </Link>
              </li>
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#1a202c]">
                <Link
                  smooth
                  spy
                  to="experience"
                  offset={0}
                  activeClass={"text-[#1a202c]"}
                  activeStyle={{
                    borderBottom: "2px solid black",
                    paddingBottom: "5px",
                  }}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li className="mb-5 text-[#f0f1f3] hover:cursor-pointer hover:text-[#1a202c]">
                <Link
                  smooth
                  spy
                  to="projects"
                  offset={0}
                  activeClass={"text-[#1a202c]"}
                  activeStyle={{
                    borderBottom: "2px solid black",
                    paddingBottom: "5px",
                  }}
                >
                  PROJECTS
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-row mt-10">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
