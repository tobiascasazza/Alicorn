import { Feature } from "./FeatureModel";
import { User } from "./User";

export interface WorkProject {
  id: number;
  title: string;
  subtitle: string;
  features: Feature[];
  description: string;
  link?: string;
  students: User[];
}
