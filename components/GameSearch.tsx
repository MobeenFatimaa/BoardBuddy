"use client";

interface GameSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GameSearch({
  value,
  onChange,
}: GameSearchProps) {
  return (
    <div className="relative">
      {/* Search Icon */}
      <div
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-white/35
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
          />

          <path d="m20 20-4-4" />
        </svg>
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search games..."
        aria-label="Search games"
        className="
          h-12
          w-full
          rounded-xl
          border
          border-white/[0.08]
          bg-[#111111]
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          transition
          placeholder:text-white/25
          focus:border-white/[0.20]
          focus:bg-[#131313]
        "
      />
    </div>
  );
}