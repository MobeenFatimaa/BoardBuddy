
# BoardBuddy 

BoardBuddy is a modern AI-powered board game assistant built with Next.js. It helps players quickly learn board games by providing information about rules, setup, scoring, objectives, strategies, and gameplay tips.

The application provides a clean and responsive interface where users can browse and search through a collection of board games, select a game, and interact with an AI assistant focused on that specific game.

## Live Demo

[View BoardBuddy Live](https://board-buddy-tau.vercel.app/)

## Features

- Browse 30 board games
- Search games by name, category, or description
- Select a game and open its dedicated AI assistant
- Ask questions about game rules
- Get help with game setup
- Learn objectives and winning conditions
- Understand scoring systems
- Get strategy recommendations
- Get beginner-friendly gameplay tips
- Game-specific AI conversations
- Responsive game card grid
- Smooth hover and click interactions
- White border highlight for hovered and selected cards
- Dark modern user interface
- Responsive design for desktop, tablet, and mobile
- Custom BoardBuddy browser favicon
- Custom browser title and metadata
- Footer with developer information
- GitHub and LinkedIn social links

## Supported Games

BoardBuddy currently includes 30 board games:

| # | Game | Category |
|---|---|---|
| 1 | 7 Wonders | Strategy |
| 2 | 7 Wonders Duel | Strategy |
| 3 | Acquire | Strategy |
| 4 | Arcs | Strategy |
| 5 | Avalon | Social Deduction |
| 6 | Azul | Abstract Strategy |
| 7 | Betrayal at House on the Hill | Adventure |
| 8 | Brass: Birmingham | Economic Strategy |
| 9 | Brass: Lancashire | Economic Strategy |
| 10 | Carcassonne | Tile Placement |
| 11 | Catan | Strategy |
| 12 | Clue | Deduction |
| 13 | Codenames | Party |
| 14 | Coup | Bluffing |
| 15 | Dixit | Party |
| 16 | Dominion | Deck Building |
| 17 | Everdell | Strategy |
| 18 | Gloomhaven | Tactical Strategy |
| 19 | Monopoly | Economic |
| 20 | Munchkin | Party |
| 21 | Pandemic | Cooperative |
| 22 | Power Grid | Economic Strategy |
| 23 | Root | Asymmetric Strategy |
| 24 | Scythe | Strategy |
| 25 | Splendor | Engine Building |
| 26 | Splendor Duel | Two-Player Strategy |
| 27 | Sushi Go! | Card Game |
| 28 | Terraforming Mars | Strategy |
| 29 | Ticket to Ride | Route Building |
| 30 | Wingspan | Engine Building |

## How BoardBuddy Works

### Browse Games

Users can explore the available board games from the main BoardBuddy interface.

Each game card provides important information such as:

- Game name
- Game artwork
- Category
- Description
- Number of players
- Estimated play time
- Difficulty

### Search

The search system allows users to quickly find games by searching:

- Game name
- Category
- Description

### Select a Game

Clicking a game card selects the game and opens the corresponding BoardBuddy AI assistant.

The selected game remains visually highlighted so users can easily identify the active game.

### Ask the AI Assistant

Users can ask questions such as:

```text
How do I start this game?

What are the basic rules?

How does scoring work?

What is the objective?

How does setup work?

Give me some beginner strategies.

How do I win?

What should I do during my first turn?
````

The assistant provides game-specific responses based on the selected game's information.

## Game Data

Each game contains structured information including:

```text
Game name
Category
Description
Number of players
Play time
Difficulty
Objective
Setup
Rules
Scoring
Strategy
Tips
```

This structured approach allows BoardBuddy to provide focused information for each supported game.

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* HTML
* CSS

### Backend

* Next.js API Routes
* Server-side API handling
* OpenAI API

### Development and Deployment

* Node.js
* npm
* Git
* GitHub
* Vercel
* VS Code

## Project Structure

```text
BoardBuddy/
│
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ChatPanel.tsx
│   ├── Footer.tsx
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   └── GameSearch.tsx
│
├── data/
│   └── games.ts
│
├── public/
│   └── games/
│       ├── 7-wonders.jpg
│       ├── 7-wonders-duel.jpg
│       ├── acquire.jpg
│       ├── arcs.jpg
│       ├── avalon.jpg
│       ├── azul.jpg
│       ├── betrayal-house.jpg
│       ├── brass-birmingham.jpg
│       ├── brass-lancashire.jpg
│       ├── carcassonne.jpg
│       ├── catan.jpg
│       ├── clue.jpg
│       ├── codenames.jpg
│       ├── coup.jpg
│       ├── dixit.jpg
│       ├── dominion.jpg
│       ├── everdell.jpg
│       ├── gloomhaven.jpg
│       ├── monopoly.jpg
│       ├── munchkin.jpg
│       ├── pandemic.jpg
│       ├── power-grid.jpg
│       ├── root.jpg
│       ├── scythe.jpg
│       ├── splendor.jpg
│       ├── splendor-duel.jpg
│       ├── sushi-go.jpg
│       ├── terraforming-mars.jpg
│       ├── ticket-to-ride.jpg
│       └── wingspan.jpg
│
├── .env.local
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/MobeenFatimaa/BoardBuddy.git
```

Move into the project directory:

```bash
cd BoardBuddy
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your own API key.

Do not commit `.env.local` to GitHub.

Make sure `.env.local` is included in your `.gitignore` file:

```text
.env.local
```

## Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

The application automatically updates when you modify the source files.

## Production Build

Before deployment, verify that the production build works:

```bash
npm run build
```

A successful build should complete TypeScript checking, page generation, and optimization without errors.

To run the production build locally:

```bash
npm start
```

## Deployment

BoardBuddy is designed to be deployed on Vercel.

After connecting the GitHub repository to Vercel, configure the required environment variable:

```text
OPENAI_API_KEY
```

Vercel automatically detects the Next.js project and uses the appropriate build configuration.

The standard deployment workflow is:

```bash
git add .
git commit -m "Update BoardBuddy"
git push
```

After pushing changes to the connected GitHub repository, Vercel automatically creates a new deployment.

## AI Assistant Architecture

The AI functionality is handled through a server-side API route:

```text
app/api/chat/route.ts
```

The frontend sends the selected game information and user question to:

```text
/api/chat
```

The server processes the request and communicates with the AI API.

This architecture keeps the API key on the server instead of exposing it directly in browser-side JavaScript.

## Components

### GameCard

Responsible for displaying individual board game information.

It includes:

* Game image
* Game name
* Category
* Description
* Player count
* Play time
* Difficulty
* Hover effects
* Selected state

### GameGrid

Responsible for displaying the collection of board game cards in a responsive grid.

### GameSearch

Provides the game search functionality and allows users to filter the available games.

### ChatPanel

Provides the interface for communicating with the BoardBuddy AI assistant.

### Footer

Displays the developer information and social links.

## Adding a New Game

New games can be added by editing:

```text
data/games.ts
```

Each game follows the `Game` interface:

```typescript
export interface Game {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;

  players: string;
  playTime: string;
  difficulty: "Easy" | "Medium" | "Hard";

  objective: string;

  setup: string[];

  rules: string[];

  scoring: string[];

  strategy: string[];

  tips: string[];
}
```

Then add the game's image to:

```text
public/games/
```

and reference the image in the game object:

```typescript
image: "/games/example-game.jpg"
```

## Design

BoardBuddy uses a minimal dark interface designed to keep the focus on the game library and AI assistant.

The interface includes:

* Dark background
* Minimal navigation
* Responsive search bar
* Large game artwork
* Clean game cards
* Category labels
* Game metadata
* Smooth image hover effects
* White hover borders
* Persistent selected-game border
* Dedicated AI chat interface
* Responsive layout
* Custom BoardBuddy favicon
* Developer footer

## Responsive Design

BoardBuddy is designed to work across different screen sizes.

The game grid automatically adapts based on the available screen width:

```text
Mobile       1 column
Tablet       2 columns
Desktop      3 columns
Large screen 4 columns
```

The layout, game cards, search interface, and chat interface are designed to remain usable on smaller screens.

## Security

The OpenAI API key should never be placed directly inside client-side React components.

Use:

```text
.env.local
```

for local development and environment variables in Vercel for production.

Never commit API keys, passwords, or other secrets to GitHub.

## Performance

BoardBuddy uses Next.js features including:

* Static page generation
* Server-side API routes
* Optimized production builds
* Component-based rendering
* Responsive image layouts
* CSS transitions and animations
* Client-side search filtering

## Future Improvements

Possible future improvements include:

* User accounts
* Favorite games
* Recently viewed games
* Conversation history
* Voice-based game assistance
* Game recommendations
* Advanced filtering
* Game difficulty filtering
* Player-count filtering
* Personalized strategy suggestions
* Multiple AI model support
* Expanded board game library
* Official rulebook integration
* Mobile application
* Improved AI context management
* Multiplayer game assistance

## Author

### Mobeen Fatima

Computer Science Student and Developer

BoardBuddy was designed and developed as an AI-powered board game learning and assistance platform.

## Connect

### GitHub

https://github.com/MobeenFatimaa

### LinkedIn

https://www.linkedin.com/in/mobeen-fatima-599a35347

## License

This project is available for educational and personal use.

Board game names, artwork, logos, trademarks, and other game-related assets belong to their respective owners.

BoardBuddy is an independent project and is not affiliated with, sponsored by, or endorsed by the publishers or owners of the listed board games.

```
```
