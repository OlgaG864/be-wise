export interface Lecturer {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: number;
  date(): Date;
  image: string;
}

export interface Curse {
  id: number;
  curse_code: number;
  name: string;
  category: string;
  description: string;
  price: number;
  date: Date;
  lessons: number;
  lecture_name: string;
}

export interface FilePath {
  name: string;
}

export type sortColumn = 'name' | 'price';

export interface CurseSort {
  column: sortColumn;
  dirAsc: boolean;
}
