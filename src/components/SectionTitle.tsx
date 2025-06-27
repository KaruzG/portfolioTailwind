import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="m-auto flex max-w-screen-md text-2xl font-bold">
      {children}
    </h2>
  );
};

export default SectionTitle;
