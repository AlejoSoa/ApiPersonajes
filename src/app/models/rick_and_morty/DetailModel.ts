export interface DetailResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;

  location: {
    name: string;
    url: string;
  };

  episode: string[];
}
