import { Feature } from "./FeatureModel";
import { User } from "./User";

export interface Company {
  id: number;
  title: string;
  slogan: string;
  logo: string;
  features: Feature[];
  description: string;
  link?: string;
  owners: User[];
  employees: User[];
}