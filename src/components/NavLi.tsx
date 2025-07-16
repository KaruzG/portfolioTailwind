import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../hooks/useScrollToSection";

interface NavLiProps {
    navSection: navSectionType;
}

interface navSectionType {
    name: string;
    section: string;
    icon: JSX.Element;
}

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