import { User } from "./User";

export type ResumeProject = {
  projectName: string;
  projectDescription: string;
  participants: Array<User>;
  projectType: string;
  projectDetailLink: string;
};
