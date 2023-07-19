import { Feature } from "./Feature";

export interface User {
  name: string;
  lastName: string;
  features: Feature[];
  punctuation?: number;
  votes?: number;
  photo?: string;
}
