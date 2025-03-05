export interface Skill {
    id: number;
    name: string;
    skillColor: string | null;
    textColor: string | null;
    techType: SkillType;
    logo: string;
  }
  
  export type SkillType = "frontend" | "backend" | "other";
  