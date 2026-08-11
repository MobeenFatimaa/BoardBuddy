"use client";

import type { Game } from "@/data/games";
import GameCard from "./GameCard";

interface GameGridProps {
  games: Game[];
  onSelect: (game: Game) => void;
}

export default function GameGrid({
  games,
  onSelect,
}: GameGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
      "
    >
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}