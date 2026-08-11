"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Game } from "@/data/games";

interface ChatPanelProps {
  game: Game;
  onClose: () => void;
}

const suggestedQuestions = [
  "How do I start the game?",
  "Explain the basic rules",
  "How does scoring work?",
  "What should I do on my first turn?",
];

export default function ChatPanel({
  game,
  onClose,
}: ChatPanelProps) {
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    sendMessage,
    status,
    error,
  } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",

      body: {
        game,
      },
    }),
  });

  const isLoading =
    status === "submitted" ||
    status === "streaming";

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: isLoading ? "auto" : "smooth",
  });
}, [messages, isLoading]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleSend = async (text?: string) => {
    const content = (text ?? message).trim();

    if (!content || isLoading) {
      return;
    }

    setMessage("");

    try {
      await sendMessage({
        text: content,
      });
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          lg:hidden
        "
      />

      {/* Chat panel */}
      <aside
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-dvh
          w-full
          flex-col
          border-l
          border-white/[0.08]
          bg-[#0d0d0d]
          shadow-2xl
          sm:w-[430px]
          lg:w-[460px]
        "
      >
        {/* Header */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-white/[0.07]
            px-5
            py-4
          "
        >
          <div className="flex min-w-0 items-center gap-3">

            <div
              className="
                h-10
                w-10
                shrink-0
                overflow-hidden
                rounded-lg
                border
                border-white/10
                bg-[#181818]
              "
            >
              <img
                src={game.image}
                alt={game.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {game.name}
              </p>

              <p className="mt-0.5 text-[11px] text-white/30">
                BoardBuddy AI
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="
              ml-3
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-white/40
              transition
              hover:bg-white/[0.06]
              hover:text-white
            "
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

        </div>

        {/* Messages */}
        <div
          className="
            flex-1
            overflow-y-auto
            px-5
            py-6
          "
        >

          {/* Error */}
          {error && (
            <div
              className="
                mb-5
                rounded-xl
                border
                border-red-500/20
                bg-red-500/5
                px-4
                py-3
                text-xs
                leading-5
                text-red-300
              "
            >
              <p className="font-medium">
                AI request failed
              </p>

              <p className="mt-1 text-red-300/70">
                {error.message ||
                  "Something went wrong while contacting the AI."}
              </p>
            </div>
          )}

          {/* Empty state */}
          {messages.length === 0 && (
            <div className="flex min-h-full flex-col">

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  items-center
                  justify-center
                  pb-10
                  text-center
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                  "
                >
                  <span className="text-lg">
                    ♟
                  </span>
                </div>

                <h2 className="text-base font-medium text-white">
                  Ask about {game.name}
                </h2>

                <p
                  className="
                    mt-2
                    max-w-[290px]
                    text-xs
                    leading-5
                    text-white/30
                  "
                >
                  Ask questions about rules,
                  setup, turns, scoring, or strategy.
                </p>
              </div>

              <div className="mt-auto">

                <p
                  className="
                    mb-2.5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white/25
                  "
                >
                  Suggested questions
                </p>

                <div className="space-y-2">

                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      disabled={isLoading}
                      onClick={() => handleSend(question)}
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/[0.07]
                        bg-white/[0.02]
                        px-3.5
                        py-3
                        text-left
                        text-xs
                        text-white/55
                        transition
                        hover:border-white/[0.14]
                        hover:bg-white/[0.04]
                        hover:text-white
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {question}
                    </button>
                  ))}

                </div>
              </div>

            </div>
          )}

          {/* Conversation */}
          {messages.length > 0 && (
            <div className="space-y-5">

              {messages.map((item) => {

                const text = item.parts
                  ?.filter(
                    (part) => part.type === "text"
                  )
                  .map(
                    (part) => part.text
                  )
                  .join("");

                if (!text) {
                  return null;
                }

                return (
                  <div
                    key={item.id}
                    className={
                      item.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >

                    {item.role === "user" ? (
                      <div
                        className="
                          max-w-[85%]
                          rounded-2xl
                          rounded-br-md
                          bg-white
                          px-4
                          py-3
                          text-sm
                          leading-6
                          text-black
                        "
                      >
                        {text}
                      </div>
                    ) : (
                      <div className="max-w-[90%]">

                        <div
                          className="
                            mb-1.5
                            flex
                            items-center
                            gap-2
                          "
                        >
                          <span
                            className="
                              flex
                              h-5
                              w-5
                              items-center
                              justify-center
                              rounded-md
                              bg-white/[0.06]
                              text-[9px]
                            "
                          >
                            ♟
                          </span>

                          <span className="text-[10px] text-white/30">
                            BoardBuddy
                          </span>
                        </div>

                        <div
  className="
    rounded-2xl
    rounded-bl-md
    border
    border-white/[0.06]
    bg-white/[0.03]
    px-4
    py-3
    text-sm
    leading-6
    text-white/75
  "
>
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: ({ children }) => (
        <h1 className="mb-3 mt-1 text-lg font-semibold text-white">
          {children}
        </h1>
      ),

      h2: ({ children }) => (
        <h2 className="mb-3 mt-4 text-base font-semibold text-white">
          {children}
        </h2>
      ),

      h3: ({ children }) => (
        <h3 className="mb-2 mt-4 text-sm font-semibold text-white">
          {children}
        </h3>
      ),

      p: ({ children }) => (
        <p className="mb-3 last:mb-0 leading-6">
          {children}
        </p>
      ),

      ul: ({ children }) => (
        <ul className="mb-3 ml-5 list-disc space-y-1.5">
          {children}
        </ul>
      ),

      ol: ({ children }) => (
        <ol className="mb-3 ml-5 list-decimal space-y-1.5">
          {children}
        </ol>
      ),

      li: ({ children }) => (
        <li className="pl-1 leading-6">
          {children}
        </li>
      ),

      strong: ({ children }) => (
        <strong className="font-semibold text-white">
          {children}
        </strong>
      ),

      em: ({ children }) => (
        <em className="text-white/80">
          {children}
        </em>
      ),

      code: ({ children }) => (
        <code
          className="
            rounded
            bg-white/[0.08]
            px-1.5
            py-0.5
            font-mono
            text-xs
            text-white/90
          "
        >
          {children}
        </code>
      ),

      blockquote: ({ children }) => (
        <blockquote
          className="
            my-3
            border-l-2
            border-white/20
            pl-3
            text-white/50
          "
        >
          {children}
        </blockquote>
      ),

      hr: () => (
        <hr className="my-4 border-white/[0.08]" />
      ),
    }}
  >
    {text}
  </ReactMarkdown>
</div>

                      </div>
                    )}

                  </div>
                );
              })}

             {isLoading && (
  <div className="flex justify-start">
    <div className="max-w-[90%]">
      <div className="mb-1.5 flex items-center gap-2">
        <span
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-md
            bg-white/[0.06]
            text-[9px]
          "
        >
          ♟
        </span>

        <span className="text-[10px] text-white/30">
          BoardBuddy
        </span>
      </div>

      <div
        className="
          flex
          items-center
          gap-1.5
          rounded-2xl
          rounded-bl-md
          border
          border-white/[0.06]
          bg-white/[0.03]
          px-4
          py-3
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            animate-bounce
            rounded-full
            bg-white/40
          "
        />

        <span
          className="
            h-1.5
            w-1.5
            animate-bounce
            rounded-full
            bg-white/40
            [animation-delay:150ms]
          "
        />

        <span
          className="
            h-1.5
            w-1.5
            animate-bounce
            rounded-full
            bg-white/40
            [animation-delay:300ms]
          "
        />
      </div>
    </div>
  </div>
)}

              <div ref={messagesEndRef} />

            </div>
          )}

        </div>

        {/* Input */}
        <div
          className="
            shrink-0
            border-t
            border-white/[0.07]
            p-4
          "
        >

          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-white/[0.09]
              bg-white/[0.025]
              transition
              focus-within:border-white/[0.18]
            "
          >

            <textarea
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={isLoading}
              placeholder={`Ask about ${game.name}...`}
              className="
                block
                max-h-40
                min-h-[48px]
                w-full
                resize-none
                bg-transparent
                px-4
                pt-3.5
                text-sm
                leading-5
                text-white
                outline-none
                placeholder:text-white/25
                disabled:opacity-50
              "
            />

            <div
              className="
                flex
                justify-end
                px-2.5
                pb-2.5
              "
            >
              <button
                type="button"
                onClick={() => handleSend()}
                disabled={
                  !message.trim() ||
                  isLoading
                }
                aria-label="Send message"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-white
                  text-black
                  transition
                  hover:bg-white/90
                  disabled:cursor-not-allowed
                  disabled:bg-white/[0.08]
                  disabled:text-white/20
                "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 14-7-3 14-4-6-7-1Z" />
                  <path d="M12 13 19 5" />
                </svg>
              </button>
            </div>

          </div>

          <p
            className="
              mt-2
              text-center
              text-[10px]
              text-white/15
            "
          >
            Press Enter to send · Shift + Enter for a new line
          </p>

        </div>

      </aside>
    </>
  );
}