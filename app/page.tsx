"use client";

import { useMemo, useState } from "react";
import type { Game } from "@/data/games";
import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return games;
    }

    return games.filter((game) => {
      return (
        game.name.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query)
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header
        className="
          sticky
          top-0
          z-30
          border-b
          border-white/[0.06]
          bg-[#0a0a0a]/90
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            gap-6
            px-5
            py-4
            sm:px-8
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-white
                text-black
              "
            >
              ♟
            </div>

            <div>
              <h1 className="text-sm font-semibold tracking-tight">
                BoardBuddy
              </h1>

              <p className="hidden text-[10px] text-white/30 sm:block">
                AI board game assistant
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full max-w-sm">
            <svg
              className="
                pointer-events-none
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-white/25
              "
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search games..."
              className="
                h-10
                w-full
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                pl-10
                pr-10
                text-sm
                text-white
                outline-none
                transition
                placeholder:text-white/25
                focus:border-white/[0.18]
                focus:bg-white/[0.05]
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  -translate-y-1/2
                  items-center
                  justify-center
                  text-lg
                  leading-none
                  text-white/30
                  transition
                  hover:text-white
                "
              >
                ×
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        {/* Hero */}
        <div className="mb-10 max-w-2xl">
          <p
            className="
              mb-3
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/30
            "
          >
            Your AI game companion
          </p>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              sm:text-5xl
            "
          >
            Learn any game.
            <br />

            <span className="text-white/35">
              Play with confidence.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-white/40
            "
          >
            Choose a board game and ask BoardBuddy
            anything about its rules, setup, scoring,
            or strategy.
          </p>
        </div>

        {/* Results Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-white">
              Board games
            </h3>

            <p className="mt-1 text-xs text-white/25">
              {filteredGames.length}{" "}
              {filteredGames.length === 1 ? "game" : "games"}
            </p>
          </div>
        </div>

        {/* Games */}
        {filteredGames.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onSelect={() => setSelectedGame(game)}
                selected={selectedGame?.id === game.id}
              />
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              min-h-[300px]
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              text-center
            "
          >
            <div
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-white/[0.04]
                text-lg
              "
            >
              🔍
            </div>

            <h3 className="text-sm font-medium text-white">
              No games found
            </h3>

            <p className="mt-2 text-xs text-white/30">
              Try searching for another game or category.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="
                mt-5
                rounded-lg
                border
                border-white/[0.08]
                px-4
                py-2
                text-xs
                text-white/50
                transition
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      {/* Chat Panel */}
      {selectedGame && (
        <ChatPanel
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </main>
  );
}