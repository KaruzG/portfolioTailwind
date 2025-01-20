import { useEffect, useState } from "react";
import { FaRegUser, FaRegFolder, FaRegStar } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px 0px -100px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top:
          section.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          30,
      });
    }
  };

  const liStyles = "flex cursor-pointer flex-col items-center transition-colors duration-500";

  return (
    <nav className="fixed bottom-5 z-50 flex justify-center gap-4 rounded-full bg-navBarBg p-4 backdrop-blur-sm">
      <ul className="flex gap-4 text-xs text-secondary">
        <li
          className={`${liStyles} ${activeSection === "landing" ? "text-accent" : ""}`}
          onClick={() => scrollToSection("landing")}
        >
          <FaRegUser />
          Personal
        </li>
        <li
          className={`${liStyles} ${activeSection === "projects" ? "text-accent" : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          <FaRegFolder />
          Projects
        </li>
        <li
          className={`${liStyles} ${activeSection === "skills" ? "text-accent" : ""}`}
          onClick={() => scrollToSection("skills")}
        >
          <FaRegStar />
          Skills
        </li>
        <li
          className={`${liStyles} ${activeSection === "experience" ? "text-accent" : ""}`}
          onClick={() => scrollToSection("experience")}
        >
          <FiPaperclip />
          Experience
        </li>
        <li
          className={`${liStyles} ${activeSection === "studies" ? "text-accent" : ""}`}
          onClick={() => scrollToSection("studies")}
        >
          <IoMdBook />
          Studies
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
