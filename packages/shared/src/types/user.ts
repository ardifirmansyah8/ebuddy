export interface Response<T> {
  data: T | null;
  message: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}
