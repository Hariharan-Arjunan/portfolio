import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { RiProfileLine } from "react-icons/ri";
import Resume from "../../assets/NULL_DOC.pdf";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div onClick={() => window.open(Resume)}>
        <RiProfileLine />
      </div>
      <a href="https://www.google.com" target="_blank">
        <div>
          <BiLogoLinkedin />
        </div>
      </a>

      <div>
        <FiGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
