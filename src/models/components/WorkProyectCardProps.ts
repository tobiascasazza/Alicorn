import { Feature } from "../objects/Features";

export type WorkProyectCardProps = {
  id: number;
  title: String;
  subtitle: String;
  features: Feature[];
  description: String;
  link: String;
};
