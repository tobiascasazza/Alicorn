import { Feature } from "./Feature";
import { User } from "./User";

export interface WorkProyect {
  id: number;
  title: string;
  subtitle: string;
  features: Feature[];
  description: string;
  link?: string;
  students: User[];
}
