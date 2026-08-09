import type { SpellInfo, WizardInfo } from "../types/types";

const BASE_URL = "https://hp-api.onrender.com/api";

export async function getWizardsInfo(): Promise<WizardInfo[]> {
  const response = await fetch(`${BASE_URL}/characters`);

  if (!response.ok) {
    throw new Error("Characters request failed");
  }

  const data = await response.json();

  return data;
}

export async function getSpellsInfo(): Promise<SpellInfo[]> {
  const response = await fetch(`${BASE_URL}/spells`);

  if (!response.ok) {
    throw new Error("Spells request failed");
  }

  const data = await response.json();

  return data;
}
