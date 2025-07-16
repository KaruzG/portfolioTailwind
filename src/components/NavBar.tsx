import { FaRegUser, FaRegFolder, FaRegStar } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";
import NavLi from "./NavLi";

const NavBar = () => {

  return (
    <nav className="fixed bottom-5 left-0 right-0 z-50 mx-auto flex max-w-fit justify-center gap-4 rounded-full bg-navBarBg p-4 backdrop-blur-sm md:bottom-auto md:top-6">
      <ul className="flex gap-4 text-xs text-secondary md:text-sm">
        <NavLi navSection={{ name: "Personal", icon: <FaRegUser />, section: "landing" }} />
        <NavLi navSection={{ name: "Projects", icon: <FaRegFolder />, section: "projects" }} />
        <NavLi navSection={{ name: "Skills", icon: <FaRegStar />, section: "skills" }} />
        <NavLi navSection={{ name: "Experience", icon: <FiPaperclip />, section: "experience" }} />
        <NavLi navSection={{ name: "Studies", icon: <IoMdBook />, section: "studies" }} />
      </ul>
    </nav>
  );
};

export default NavBar;
