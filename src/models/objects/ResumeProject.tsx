import { User } from "./User";

export type ResumeProject = {
  id: number;
  projectName: string;
  projectDescription: string;
  participants: Array<User>;
  projectType: string;
  projectDetailLink?: string;
};
