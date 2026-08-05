export type AppPage = "characters" | "spells";

export type CharacterInfo = {
  name: string;
  house: string;
  ancestry: string;
  patronus: string;
  image: string;
};

export type HPApiResponse = {
  id: string;
  name: string;
  house: string;
  ancestry: string;
  patronus: string;
  image: string;
};
