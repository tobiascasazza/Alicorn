import { Feature } from "./FeatureModel";

export interface User {
  id: number;
  name: string;
  lastName: string;
  features: Feature[];
  punctuation?: number;
  title?: string;
  resume?: string;
  contactData?: Feature[];
  votes?: number;
  photo?: string;
}
