export interface TimelineData {
  company: string;
  location: "remote" | string | null;
  duration: number;
  durationType: "months" | "month" | "years" | "year";
  descriptionList: Array<string>;
}
