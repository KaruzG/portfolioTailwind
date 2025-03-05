export interface Skill {
    id: number;
    name: string;
    skillColor: string;
    textColor: string;
    techType: SkillType;
    logo: string;
  }
  
  export type SkillType = "frontend" | "backend" | "other";
  