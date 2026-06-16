import DeckBuilder from "@/components/DeckBuilder";
import PvPArena from "@/components/PvPArena";

export default function Home() {
  return (
    <main>
      <h1>
        Wizards of the Alchevora
      </h1>

      <p>
        Epic MMORPG TCG on Solana
      </p>

      <DeckBuilder />
      <PvPArena />
    </main>
  );
}
