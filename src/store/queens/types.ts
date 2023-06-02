export interface QueenStructure {
  name: string;
  age: number;
  rank: number;
  season: number;
  hometown: string;
  image: string;
}

export interface QueensState {
  queens: QueenStructure[];
}
