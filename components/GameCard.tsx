"use client";

import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  onSelect: (game: Game) => void;
  selected?: boolean;
}

export default function GameCard({
  game,
  onSelect,
  selected = false,
}: GameCardProps) {
  return (
    <div
      onClick={() => onSelect(game)}
      className={`
        game-card
        group
        relative
        h-full
        cursor-pointer
        rounded-2xl
        p-[1.5px]
        transition-all
        duration-300
        ${selected ? "game-card-selected" : ""}
      `}
    >
      {/* White border */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-white
          transition-opacity
          duration-300
          ${
            selected
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
      />

      {/* Card */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          min-h-[390px]
          flex-col
          overflow-hidden
          rounded-[15px]
          border
          border-white/[0.08]
          bg-[#111111]
          transition-all
          duration-300
        "
      >
        {/* Image */}
        <div className="relative h-52 min-h-52 w-full shrink-0 overflow-hidden bg-white">
          <img
            src={game.image}
            alt={game.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* Image overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
            "
          />

          {/* Selected indicator */}
          {selected && (
            <div
              className="
                absolute
                right-3
                top-3
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-lg
              "
            >
              ✓
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          {/* Name + category */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-white">
              {game.name}
            </h3>

            <span
              className="
                shrink-0
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.04]
                px-2
                py-1
                text-[9px]
                font-medium
                uppercase
                tracking-wide
                text-white/40
                transition-all
                duration-300
                group-hover:border-white/20
                group-hover:text-white/70
              "
            >
              {game.category}
            </span>
          </div>

          {/* Description */}
          <p
            className="
              mt-2
              line-clamp-2
              min-h-[40px]
              text-xs
              leading-5
              text-white/35
              transition-colors
              duration-300
              group-hover:text-white/55
            "
          >
            {game.description}
          </p>

          {/* Game information */}
          <div
            className="
              mt-auto
              flex
              items-center
              gap-3
              border-t
              border-white/[0.06]
              pt-3
            "
          >
            <span className="text-[10px] text-white/30">
              👥 {game.players}
            </span>

            <span className="text-[10px] text-white/30">
              ⏱ {game.playTime}
            </span>

            <span className="ml-auto text-[10px] text-white/30">
              {game.difficulty}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}