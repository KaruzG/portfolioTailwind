import { Skill } from "../data/skillsData";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return ( // Molaría hacer un effecto como frost con el accent color de la skill
    <div className="h-[100px] w-[100px] rounded-3xl bg-grayButton flex justify-center items-center flex-col">
      <img className="w-12" src={skill.logo} alt={skill.name + " logo."} />
      <h3>{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
