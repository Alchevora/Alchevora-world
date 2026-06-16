import { Card } from "@/types/card";

export function forgeCards(
  cardA: Card,
  cardB: Card
) {
  return {
    ...cardA,
    id: crypto.randomUUID(),
    attack: cardA.attack + 5,
    defense: cardA.defense + 5,
    rarity: "Enhanced"
  };
}
