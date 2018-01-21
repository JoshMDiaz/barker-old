export interface Profile {
  name: string;
  city: string;
  state: string;
  numberOfDogs: number;
  dogs: Array<{
    name: string;
    age: number;
    breed: string;
    gender: string;
    neutered: boolean;
    papered: boolean;
    registered: boolean;
    images: Array<string>;
  }>;
}
