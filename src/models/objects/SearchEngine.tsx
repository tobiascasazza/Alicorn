import { Feature } from "./FeatureModel";

export interface UserSearch {
  name: string;
  punctuation: number[];
  features: Feature[];
}

export interface CompanySearch {
  title: string;
  punctuation: number[];
  features: Feature[];
}
