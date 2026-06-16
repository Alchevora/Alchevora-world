import { Card } from "@/types/card";

export const calculatePower = (card: Card) => {
  return (
    card.attack +
    card.defense +
    card.mana
  );
};
