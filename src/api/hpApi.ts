import type { CharacterInfo, HPApiResponse } from "../types/types";

const BASE_URL = "https://hp-api.onrender.com/api";

function toCharacterInfo(data: HPApiResponse): CharacterInfo {
  return {
    name: data.name,
    house: data.house,
    ancestry: data.ancestry,
    patronus: data.patronus,
    image: data.image,
  };
}

export async function getCharacterInfo(): Promise<CharacterInfo> {
  const response = await fetch(`${BASE_URL}/characters`);

  if (!response.ok) {
    throw new Error("Character request failed");
  }
  const data = (await response.json()) as HPApiResponse;


  return toCharacterInfo(data);
}

