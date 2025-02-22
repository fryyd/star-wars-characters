export interface Character {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: URL;
  films: URL[];
  species: URL[];
  vehicles: URL[];
  starships: URL[];
  created: Date;
  edited: Date;
  url: URL;
}
