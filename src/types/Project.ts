export interface StackItem {
  icon: string;
  tech: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  img: string;
  previewLink: string;
  codeLink: string;
  stack: StackItem[];
}
