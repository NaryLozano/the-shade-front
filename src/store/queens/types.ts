export interface QueenStructure {
  name: string;
  age: number;
  rank: number;
  season: number;
  hometown: string;
  image: string;
  quote: string;
  id?: string;
  user?: string;
}

export interface QueensState {
  queens: QueenStructure[];
  total?: number;
}
