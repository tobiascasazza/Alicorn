export interface Opinion {
  id: number;
  stars: number;
  punctuationCards: string[];
  comments: string;
  anonymous: boolean;
  writerUserId: number;
  userId: number;
}
