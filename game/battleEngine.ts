import { Card } from "@/types/card";

export function battle(
  playerCard: Card,
  enemyCard: Card
) {
  const playerPower =
    playerCard.attack +
    playerCard.defense;

  const enemyPower =
    enemyCard.attack +
    enemyCard.defense;

  if (playerPower > enemyPower) {
    return "WIN";
  }

  if (playerPower < enemyPower) {
    return "LOSE";
  }

  return "DRAW";
}
