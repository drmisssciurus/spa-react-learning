import type { CharacterInfo } from "../types/types";

export const wizards: CharacterInfo[] = [
  {
    name: "Harry Potter",
    house: "Gryffindor",
    ancestry: "half-blood",
    patronus: "stag",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
  },
  {
    name: "Hermione Granger",
    house: "Gryffindor",
    ancestry: "muggleborn",
    patronus: "otter",
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
  },
  {
    name: "Ron Weasley",
    house: "Gryffindor",
    ancestry: "pure-blood",
    patronus: "Jack Russell terrier",
    image: "https://ik.imagekit.io/hpapi/ron.jpg",
  },
    {
    name: "Draco Malfoy",
    house: "Slytherin",
    ancestry: "pure-blood",
    patronus: "",
    image: "https://ik.imagekit.io/hpapi/draco.jpg",
  },

];


export const spells = [
    {
        name: "Accio",
        description: "Summons objects"
    },
    {
        name: "Alohomora",
        description: "Unlocks objects"
    },
    {
        name: "Avada Kedavra",
        description: "Also known as The Killing Curse, the most evil spell in the Wizarding World; one of three Unforgivable Curses; Harry Potter is the only known witch or wizard to survive it"
    },
    {
        name: "Bombardo",
        description: "Creates an explosion"
    }
]