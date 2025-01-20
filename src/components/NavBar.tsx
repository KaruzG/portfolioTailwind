import { FaRegUser, FaRegFolder, FaRegStar } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";

const NavBar = () => {
  const ABOUT = document.getElementById("landing");
  const PROJECTS = document.getElementById("projects");
  const SKILLS = document.getElementById("skills");
  const EXPERIENCE = document.getElementById("experience");
  const STUDIES = document.getElementById("studies");

  return (
    <>
      <nav className="fixed bottom-5 z-50 flex justify-center gap-4 rounded-full bg-navBarBg p-4 backdrop-blur-sm">
        <ul className="flex gap-4 text-xs text-secondary">
          <button onClick={() => ABOUT?.scrollIntoView({ behavior: "smooth" })}>
            <li className="flex flex-col items-center">
              <FaRegUser />
              Personal
            </li>
          </button>
          <button onClick={() => PROJECTS?.scrollIntoView({ behavior: "smooth" })}>
            <li className="flex flex-col items-center">
              <FaRegFolder />
              Projects
            </li>
          </button>
          <button onClick={() => SKILLS?.scrollIntoView({ behavior: "smooth" })}>
            <li className="flex flex-col items-center">
              <FaRegStar />
              Skills
            </li>
          </button>
          <button onClick={() => EXPERIENCE?.scrollIntoView({ behavior: "smooth" })}>
            <li className="flex flex-col items-center">
              <FiPaperclip />
              Experience
            </li>
          </button>
          <button onClick={() => STUDIES?.scrollIntoView({ behavior: "smooth" })}>
            <li className="flex flex-col items-center">
              <IoMdBook />
              Studies
            </li>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
