import { Skill } from "../data/skillsData";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="h-[100px] w-[100px] rounded-3xl bg-grayButton flex justify-between pb-1 items-center flex-col text-center">
      <img className="w-12 max-h-12 m-auto object-contain" src={skill.logo} alt={skill.name + " logo."} />
      <h3>{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
