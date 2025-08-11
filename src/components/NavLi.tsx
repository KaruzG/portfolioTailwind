import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scrollToSection";
import { NavLiProps } from "../types/NavLi";

const NavLi = ({ navSection }: NavLiProps) => {
    const liStyles = "flex cursor-pointer flex-col items-center transition-colors duration-500";
    const activeSection = useActiveSection(-100);

    return (
        <li
            className={`${liStyles} ${activeSection === navSection.section ? "text-accent" : ""}`}
            onClick={() => scrollToSection(navSection.section)}
        >
            {navSection.icon}
            {navSection.name}
        </li>
    )
}

export default NavLi;