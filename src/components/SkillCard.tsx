import { Skill } from "../types/Skill";
import { motion, Transition, Variants } from 'motion/react';

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

const SkillCard = ({ skill, delay }: SkillCardProps) => {
  const styles = "h-[100px] w-[100px] rounded-3xl bg-grayButton flex justify-between pb-1 items-center flex-col text-center"

  const skillCardAnimation: Variants = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { scale: 1 , opacity: 1 },
  }
  const transition: Transition = {
    duration: 0.2,
    scale: {type: "spring", visualDuration: 0.4, bounce: 0.4},
    delay: delay || 0.2,
  };

  return (
    <motion.div viewport={{ once: true }} transition={transition} {...skillCardAnimation} className={styles}>
      <img className="w-12 max-h-12 m-auto object-contain" src={skill.logo} alt={skill.name + " logo."} />
      <h3>{skill.name}</h3>
    </motion.div>
  );
};

export default SkillCard;
