import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    console.log("=================================");
    console.log("BOARD BUDDY CHAT REQUEST");
    console.log("=================================");

    const body = await request.json();

    const messages = body.messages as UIMessage[];
    const game = body.game;

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages are missing or invalid.");
    }

    if (!game) {
      throw new Error("Game information is missing.");
    }

    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      throw new Error(
        "GOOGLE_GENERATIVE_AI_API_KEY is missing."
      );
    }

    console.log("Game:", game.name);
    console.log(
      "Number of messages:",
      messages.length
    );

    const modelMessages =
      await convertToModelMessages(messages);

    /*
     * Build a complete knowledge profile for the
     * selected board game.
     */
    const gameKnowledge = `
GAME INFORMATION
================

Name:
${game.name}

Category:
${game.category}

Players:
${game.players || "Not specified"}

Playing Time:
${game.playTime || "Not specified"}

Difficulty:
${game.difficulty || "Not specified"}

Description:
${game.description || "Not available"}


OBJECTIVE
=========

${game.objective || "Not available"}


SETUP
=====

${
  Array.isArray(game.setup)
    ? game.setup
        .map(
          (item: string, index: number) =>
            `${index + 1}. ${item}`
        )
        .join("\n")
    : "Not available"
}


RULES
=====

${
  Array.isArray(game.rules)
    ? game.rules
        .map(
          (item: string, index: number) =>
            `${index + 1}. ${item}`
        )
        .join("\n")
    : "Not available"
}


SCORING
=======

${
  Array.isArray(game.scoring)
    ? game.scoring
        .map(
          (item: string, index: number) =>
            `${index + 1}. ${item}`
        )
        .join("\n")
    : "Not available"
}


STRATEGY
========

${
  Array.isArray(game.strategy)
    ? game.strategy
        .map(
          (item: string, index: number) =>
            `${index + 1}. ${item}`
        )
        .join("\n")
    : "Not available"
}


BEGINNER TIPS
============

${
  Array.isArray(game.tips)
    ? game.tips
        .map(
          (item: string, index: number) =>
            `${index + 1}. ${item}`
        )
        .join("\n")
    : "Not available"
}
`;

    const systemPrompt = `
You are BoardBuddy AI, a friendly and knowledgeable
board game assistant.

You are currently helping the user with:

${game.name}

Your job is to answer questions specifically about
the selected board game.

Below is the game's structured knowledge base.

------------------------------
${gameKnowledge}
------------------------------

IMPORTANT INSTRUCTIONS:

1. Answer questions about the selected game.

2. Prefer the information provided in the game
   knowledge base above.

3. Do not invent rules, mechanics, scoring systems,
   setup instructions, or game components.

4. If the information needed to answer a question
   is not present in the knowledge base, clearly say
   that the information is not available in the current
   BoardBuddy knowledge base.

5. You may explain the provided information in simpler
   words.

6. You may give examples when they help the user
   understand a rule.

7. If the user is a beginner, explain things step by
   step.

8. Use Markdown formatting when appropriate.

9. Use headings for longer answers.

10. Use numbered lists for procedures and bullet lists
    for tips or multiple items.

11. Keep answers focused on the user's question.

12. Do not unnecessarily repeat the entire rulebook.

13. If the user asks about strategy, provide strategy
    based on the game's mechanics and the supplied
    strategy information.

14. If the user asks about setup, explain the setup
    steps in the correct order.

15. If the user asks about scoring, explain exactly
    how the supplied scoring information works.

16. If the user asks a general conversational question,
    respond naturally while keeping the selected game
    as the context.

You are BoardBuddy — helpful, concise, accurate, and
friendly.
`;

    console.log(
      "Sending structured game knowledge to Gemini..."
    );

    const result = streamText({
      model: google("gemini-2.5-flash"),

      system: systemPrompt,

      messages: modelMessages,
    });

    console.log(
      "Gemini stream created successfully."
    );

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error(
          "GEMINI STREAM ERROR:",
          error
        );

        return error instanceof Error
          ? error.message
          : "Gemini streaming error.";
      },
    });

  } catch (error) {

    console.error(
      "================================="
    );

    console.error(
      "BOARD BUDDY SERVER ERROR:"
    );

    console.error(error);

    console.error(
      "================================="
    );

    const errorMessage =
      error instanceof Error
        ? error.message
        : String(error);

    return new Response(
      JSON.stringify({
        error: errorMessage,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}