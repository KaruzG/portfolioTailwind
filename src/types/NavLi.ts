export interface NavLiProps {
    navSection: navSectionType;
}

export interface navSectionType {
    name: string;
    section: string;
    icon: JSX.Element | React.ComponentType;
}