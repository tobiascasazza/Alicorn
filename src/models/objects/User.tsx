import { Feature } from "./Feature";

export interface User {
  id: number;
  name: string;
  lastName: string;
  features: Feature[];
  punctuation?: number;
  votes?: number;
  photo?: string;
}
