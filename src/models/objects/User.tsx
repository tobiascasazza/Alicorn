import { Feature } from "./FeatureModel";

export interface User {
  id: number;
  name: string;
  lastName: string;
  features: Feature[];
  punctuation?: number;
  votes?: number;
  photo?: string;
}
