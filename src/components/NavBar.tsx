import { FaRegUser, FaRegFolder, FaRegStar } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <nav className="fixed bottom-5 z-50 flex justify-center gap-4 rounded-full bg-navBarBg p-4 backdrop-blur-sm">
        <ul className="flex gap-4 text-xs text-secondary">
          <li className="flex flex-col items-center">
            <FaRegUser  />
            Personal
          </li>
          <li className="flex flex-col items-center">
            <FaRegFolder />
            Projects
          </li>
          <li className="flex flex-col items-center">
            <FaRegStar />
            Skills
          </li>
          <li className="flex flex-col items-center">
            <FiPaperclip />
            Experience
          </li>
          <li className="flex flex-col items-center">
            <IoMdBook />
            Studies
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
