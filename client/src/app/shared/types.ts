export interface Lecturer {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: number;
  date(): Date;
  image: string;
}
