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

export const games: Game[] = [
  // ============================================================
  // 1. 7 WONDERS
  // ============================================================
  {
    id: "7-wonders",
    name: "7 Wonders",
    image: "/games/7-wonders.jpg",
    category: "Strategy",

    description:
      "A civilization-building card game where players develop their cities, collect resources, build structures, and compete for military and cultural dominance.",

    players: "3–7 players",
    playTime: "30–45 minutes",
    difficulty: "Medium",

    objective:
      "Develop your civilization across three ages and earn the most victory points through buildings, science, military, commerce, and your Wonder.",

    setup: [
      "Give each player a Wonder board.",
      "Separate the cards into three Age decks.",
      "Choose the appropriate number of cards for the player count.",
      "Deal each player a starting hand of Age I cards.",
      "Choose a starting player."
    ],

    rules: [
      "Each player selects one card from their hand and plays it simultaneously.",
      "A card can be constructed by paying its resource cost.",
      "Some structures can be built for free using chains.",
      "Players pass their remaining cards to the neighboring player.",
      "Military conflicts are resolved at the end of each Age.",
      "The game is played over three Ages."
    ],

    scoring: [
      "Players score points from military victories and defeats.",
      "Civilian buildings provide victory points.",
      "Science symbols can provide significant points.",
      "Commercial structures can provide points and coins.",
      "Completed Wonder stages provide benefits and sometimes victory points.",
      "The player with the highest total score wins."
    ],

    strategy: [
      "Plan your civilization across all three Ages.",
      "Do not ignore military strength.",
      "Look for opportunities to build science sets.",
      "Use your neighbors' strategies when deciding which cards to pass.",
      "Manage resources efficiently."
    ],

    tips: [
      "Watch what your neighbors are collecting.",
      "Avoid taking cards that help opponents unnecessarily.",
      "Build resource-producing structures early.",
      "Adapt your strategy to your Wonder board."
    ]
  },

  // ============================================================
  // 2. 7 WONDERS DUEL
  // ============================================================
  {
    id: "7-wonders-duel",
    name: "7 Wonders Duel",
    image: "/games/7-wonders-duel.jpg",
    category: "Strategy",

    description:
      "A two-player civilization-building game where opponents develop cities, construct Wonders, compete militarily, and pursue scientific advancement.",

    players: "2 players",
    playTime: "30 minutes",
    difficulty: "Medium",

    objective:
      "Develop your civilization and win through military supremacy, scientific supremacy, or victory points at the end of the game.",

    setup: [
      "Choose four Wonder cards for each player.",
      "Prepare the Age I structure according to the player count.",
      "Place the military conflict marker on the board.",
      "Prepare the scientific progress tokens.",
      "Determine the starting player."
    ],

    rules: [
      "Players take turns selecting an available card from the current structure.",
      "A card can be built by paying its cost.",
      "Cards can sometimes be discarded for coins.",
      "Players can construct Wonders using cards.",
      "Military symbols move the conflict marker toward the opponent.",
      "Matching scientific symbols can provide powerful bonuses."
    ],

    scoring: [
      "A player can immediately win through military supremacy.",
      "A player can immediately win through scientific supremacy.",
      "If neither special victory occurs, players score their civilization.",
      "The player with the highest final score wins."
    ],

    strategy: [
      "Monitor your opponent's military progress.",
      "Do not allow an opponent to collect too many science symbols.",
      "Use Wonders to gain extra actions.",
      "Control valuable cards in the central structure.",
      "Balance economic development with victory conditions."
    ],

    tips: [
      "Always check which cards your opponent can access next.",
      "Military pressure can force difficult decisions.",
      "Do not ignore science even if you are pursuing another strategy.",
      "Use Wonders at strategically important moments."
    ]
  },

  // ============================================================
  // 3. ACQUIRE
  // ============================================================
  {
    id: "acquire",
    name: "Acquire",
    image: "/games/acquire.jpg",
    category: "Strategy",

    description:
      "A classic business strategy board game focused on building hotel chains, investing, mergers, and financial decisions.",

    players: "3–6 players",
    playTime: "60–90 minutes",
    difficulty: "Medium",

    objective:
      "Build and invest in hotel chains, make profitable mergers, and finish the game with the greatest amount of money.",

    setup: [
      "Give each player their starting money and hotel tiles.",
      "Place the game board in the center.",
      "Shuffle the available tiles and create the draw pile.",
      "Each player draws their starting tiles.",
      "Determine the starting player."
    ],

    rules: [
      "Players place hotel tiles onto the board.",
      "Tiles can create new hotel chains.",
      "Tiles can connect existing chains and cause mergers.",
      "Players may purchase shares in hotel chains.",
      "Majority and minority shareholders can receive merger bonuses.",
      "Players can buy shares during their turns."
    ],

    scoring: [
      "Players receive bonuses during mergers.",
      "Shares have value based on the size of their hotel chain.",
      "Players can sell or trade shares during mergers.",
      "Remaining shares are converted into cash at the end.",
      "The player with the most money wins."
    ],

    strategy: [
      "Invest in promising chains early.",
      "Track the shares owned by opponents.",
      "Plan mergers carefully.",
      "Maintain enough cash for opportunities.",
      "Avoid over-investing in vulnerable chains."
    ],

    tips: [
      "Watch the board before purchasing shares.",
      "Predict possible mergers.",
      "Track majority and minority positions.",
      "Do not spend all your money too early."
    ]
  },

  // ============================================================
  // 4. ARCS
  // ============================================================
  {
    id: "arcs",
    name: "Arcs",
    image: "/games/arcs.jpg",
    category: "Strategy",

    description:
      "A strategic space adventure game where players compete through exploration, conflict, politics, and resource management in a science-fiction setting.",

    players: "2–4 players",
    playTime: "60–120 minutes",
    difficulty: "Hard",

    objective:
      "Build influence, expand your faction, manage resources, and complete ambitions while competing against other players.",

    setup: [
      "Give each player their faction components.",
      "Prepare the galaxy board.",
      "Place ships and starting resources.",
      "Shuffle the relevant cards.",
      "Determine the starting player."
    ],

    rules: [
      "Players use cards to determine available actions.",
      "Players can move ships and explore regions.",
      "Players can build and expand their faction.",
      "Players can engage in conflicts with opponents.",
      "Resources must be managed carefully.",
      "Players pursue ambitions and objectives throughout the game."
    ],

    scoring: [
      "Players earn points from completed ambitions.",
      "Control and development of areas can provide advantages.",
      "Faction progress contributes to victory.",
      "Final victory depends on accumulated achievements."
    ],

    strategy: [
      "Plan several turns ahead.",
      "Watch opponents' ambitions.",
      "Use your cards efficiently.",
      "Avoid unnecessary conflicts.",
      "Balance expansion and defense."
    ],

    tips: [
      "Study the available action cards carefully.",
      "Do not expand faster than you can defend.",
      "Use diplomacy when beneficial.",
      "Pay attention to changing ambitions."
    ]
  },

  // ============================================================
  // 5. THE RESISTANCE: AVALON
  // ============================================================
  {
    id: "avalon",
    name: "The Resistance: Avalon",
    image: "/games/avalon.jpg",
    category: "Social Deduction",

    description:
      "A hidden-role social deduction game where the forces of Good and Evil compete through discussion, deception, voting, and secret identities.",

    players: "5–10 players",
    playTime: "30 minutes",
    difficulty: "Easy",

    objective:
      "Good must successfully complete three quests, while Evil attempts to sabotage three quests or identify Merlin.",

    setup: [
      "Choose the appropriate roles for the player count.",
      "Secretly distribute character cards.",
      "Players secretly learn information according to their roles.",
      "Prepare the quest team sizes.",
      "Choose the first leader."
    ],

    rules: [
      "The leader proposes a team for a quest.",
      "All players vote on whether to approve the team.",
      "Approved teams secretly choose Success or Fail.",
      "Good players normally submit Success.",
      "Evil players may submit Fail.",
      "Players discuss and vote throughout the game."
    ],

    scoring: [
      "Good wins if three quests succeed.",
      "Evil wins if three quests fail.",
      "Evil can also win by correctly identifying Merlin after three successful quests.",
      "Special roles can modify the standard victory conditions."
    ],

    strategy: [
      "Pay attention to voting patterns.",
      "Track suspicious team selections.",
      "Good players should communicate without revealing too much.",
      "Evil players should coordinate carefully.",
      "Merlin must provide information without exposing their identity."
    ],

    tips: [
      "Do not trust someone only because they supported your team.",
      "Remember previous voting behavior.",
      "Avoid revealing your role too directly.",
      "Use discussion to detect inconsistencies."
    ]
  },

  // ============================================================
  // 6. AZUL
  // ============================================================
  {
    id: "azul",
    name: "Azul",
    image: "/games/azul.jpg",
    category: "Abstract Strategy",

    description:
      "A tile-drafting strategy game where players collect colorful tiles and arrange them into beautiful patterns on their personal walls.",

    players: "2–4 players",
    playTime: "30–45 minutes",
    difficulty: "Medium",

    objective:
      "Score the most points by drafting tiles and creating efficient patterns on your wall.",

    setup: [
      "Place factory displays in the center.",
      "Fill each factory with four random tiles.",
      "Give each player a personal player board.",
      "Place the scoring markers on the starting spaces.",
      "Choose the starting player."
    ],

    rules: [
      "Players select all tiles of one color from a factory.",
      "The remaining tiles move to the center.",
      "Selected tiles are placed into pattern lines.",
      "Completed pattern lines move tiles onto the wall.",
      "Floor-line tiles can cause negative points.",
      "The round continues until all available tiles have been selected."
    ],

    scoring: [
      "A newly placed tile scores based on adjacent connected tiles.",
      "Completed rows can provide end-game bonuses.",
      "Completed columns can provide bonuses.",
      "Collecting all five tiles of a color can provide a bonus.",
      "Penalty tiles reduce the score."
    ],

    strategy: [
      "Plan your pattern lines carefully.",
      "Avoid taking unnecessary tiles.",
      "Watch what colors opponents need.",
      "Use the center pool strategically.",
      "Minimize penalties."
    ],

    tips: [
      "Do not focus only on immediate points.",
      "Consider the next round while drafting.",
      "Watch opponents' boards.",
      "Avoid taking large groups that create waste."
    ]
  },

  // ============================================================
  // 7. BETRAYAL AT HOUSE ON THE HILL
  // ============================================================
  {
    id: "betrayal-house",
    name: "Betrayal at House on the Hill",
    image: "/games/betrayal-house.jpg",
    category: "Adventure",

    description:
      "A horror adventure game where players explore a mysterious house until a haunting reveals a hidden traitor and scenario.",

    players: "3–6 players",
    playTime: "60–90 minutes",
    difficulty: "Medium",

    objective:
      "Explore the house, survive the haunting, and complete your character's scenario-specific objectives.",

    setup: [
      "Choose a character.",
      "Prepare the house tiles and cards.",
      "Place all explorers at the entrance.",
      "Prepare the event, item, and omen decks.",
      "Begin exploring the house."
    ],

    rules: [
      "Players move through rooms of the house.",
      "New rooms are drawn and added as players explore.",
      "Players resolve events and collect items.",
      "Omen cards can trigger the haunting.",
      "After the haunting, players may receive different objectives.",
      "The traitor and heroes follow the scenario rules."
    ],

    scoring: [
      "There is no universal numerical scoring system.",
      "Victory depends on completing the objectives of the specific haunting.",
      "Heroes or the traitor win according to the scenario conditions."
    ],

    strategy: [
      "Explore carefully before the haunting.",
      "Use character abilities effectively.",
      "Share information with trustworthy teammates.",
      "After the haunting, focus on your specific objectives.",
      "Manage your character's weaknesses."
    ],

    tips: [
      "Do not panic when the haunting begins.",
      "Read your scenario carefully.",
      "Use items strategically.",
      "Remember that the traitor may have completely different goals."
    ]
  },

  // ============================================================
  // 8. BRASS: BIRMINGHAM
  // ============================================================
  {
    id: "brass-birmingham",
    name: "Brass: Birmingham",
    image: "/games/brass-birmingham.jpg",
    category: "Economic Strategy",

    description:
      "A deep economic strategy game set during the Industrial Revolution where players develop industries, build networks, and manage resources.",

    players: "2–4 players",
    playTime: "60–120 minutes",
    difficulty: "Hard",

    objective:
      "Build an industrial network, develop profitable industries, and earn the most victory points across the Canal and Rail eras.",

    setup: [
      "Prepare the Birmingham game board.",
      "Give each player their player board and starting cards.",
      "Place industry tiles and resources.",
      "Set up the market.",
      "Determine the starting player."
    ],

    rules: [
      "Players use cards to perform actions.",
      "Industries can be developed and constructed.",
      "Players can build connections between locations.",
      "Coal, iron, and beer are important resources.",
      "Players can sell manufactured goods.",
      "The game consists of Canal and Rail eras."
    ],

    scoring: [
      "Players score points from developed industries.",
      "Connections can provide victory points.",
      "Flipped industry tiles can score during era scoring.",
      "The player with the highest final score wins."
    ],

    strategy: [
      "Build an efficient network.",
      "Manage coal, iron, and beer carefully.",
      "Develop industries at the right time.",
      "Watch the market.",
      "Plan both eras rather than focusing only on the first."
    ],

    tips: [
      "Do not overbuild industries without demand.",
      "Use other players' networks when possible.",
      "Track resource availability.",
      "Prepare for the transition to the Rail era."
    ]
  },

  // ============================================================
  // 9. BRASS: LANCASHIRE
  // ============================================================
  {
    id: "brass-lancashire",
    name: "Brass: Lancashire",
    image: "/games/brass-lancashire.jpg",
    category: "Economic Strategy",

    description:
      "An economic strategy game about developing industries and transportation networks during the Industrial Revolution in Lancashire.",

    players: "2–4 players",
    playTime: "60–120 minutes",
    difficulty: "Hard",

    objective:
      "Develop industries, build transportation links, sell goods, and accumulate the most victory points.",

    setup: [
      "Prepare the Lancashire board.",
      "Give each player their starting cards and pieces.",
      "Set up the industry tiles.",
      "Prepare the resource supply.",
      "Determine the starting player."
    ],

    rules: [
      "Players use cards to determine where they can act.",
      "Players build industries and canal or rail connections.",
      "Cotton industries can produce goods.",
      "Coal and iron are important resources.",
      "Players can sell cotton to markets.",
      "The game is divided into two eras."
    ],

    scoring: [
      "Industry tiles provide points when scored.",
      "Transportation links can provide victory points.",
      "Players score at the end of each era.",
      "The highest total score wins."
    ],

    strategy: [
      "Build industries that fit the current economy.",
      "Create efficient transportation networks.",
      "Use opponents' infrastructure when advantageous.",
      "Manage loans carefully.",
      "Plan for both eras."
    ],

    tips: [
      "Do not ignore transportation.",
      "Watch the available resources.",
      "Timing matters greatly.",
      "Avoid unnecessary debt."
    ]
  },

  // ============================================================
  // 10. CARCASSONNE
  // ============================================================
  {
    id: "carcassonne",
    name: "Carcassonne",
    image: "/games/carcassonne.jpg",
    category: "Tile Placement",

    description:
      "A tile-placement game where players build a medieval landscape of cities, roads, monasteries, and fields.",

    players: "2–5 players",
    playTime: "35–45 minutes",
    difficulty: "Easy",

    objective:
      "Score the most points by placing tiles strategically and deploying followers to valuable features.",

    setup: [
      "Place the starting tile.",
      "Give each player their follower pieces.",
      "Shuffle the remaining landscape tiles.",
      "Place the scoring track nearby.",
      "Choose the starting player."
    ],

    rules: [
      "Players draw and place one landscape tile.",
      "New tiles must connect correctly to existing features.",
      "A player may place a follower on the newly placed tile.",
      "Completed cities and roads can be scored immediately.",
      "Followers return when their feature is completed.",
      "Fields are scored at the end of the game."
    ],

    scoring: [
      "Completed roads provide points based on their length.",
      "Completed cities provide points based on their tiles and symbols.",
      "Monasteries score when surrounded.",
      "Fields provide points for completed cities at the end.",
      "The highest score wins."
    ],

    strategy: [
      "Use followers carefully.",
      "Look for opportunities to complete opponents' features.",
      "Control valuable cities and fields.",
      "Avoid wasting followers on difficult projects."
    ],

    tips: [
      "Think about how every tile affects future possibilities.",
      "Save followers for valuable opportunities.",
      "Watch your opponents' available followers."
    ]
  },

  // ============================================================
  // 11. CATAN
  // ============================================================
  {
    id: "catan",
    name: "Catan",
    image: "/games/catan.jpg",
    category: "Strategy",

    description:
      "A strategy and trading game where players collect resources, build settlements, develop roads, and compete for victory points.",

    players: "3–4 players",
    playTime: "60–120 minutes",
    difficulty: "Medium",

    objective:
      "Be the first player to reach the required number of victory points through settlements, cities, roads, development cards, and special achievements.",

    setup: [
      "Build the modular island.",
      "Place number tokens on the terrain.",
      "Place the robber on the desert.",
      "Give players their starting pieces.",
      "Players place their initial settlements and roads."
    ],

    rules: [
      "Roll the dice at the beginning of your turn.",
      "Players receive resources from matching terrain.",
      "Players can trade resources.",
      "Players can build roads, settlements, and cities.",
      "Players can purchase development cards.",
      "The first player to reach the victory point requirement wins."
    ],

    scoring: [
      "Settlements provide victory points.",
      "Cities provide additional points.",
      "Some development cards provide victory points.",
      "Longest Road can provide additional points.",
      "Largest Army can provide additional points."
    ],

    strategy: [
      "Choose strong starting locations.",
      "Diversify your resource production.",
      "Trade strategically.",
      "Pay attention to ports.",
      "Monitor opponents' victory progress."
    ],

    tips: [
      "Do not depend on a single resource.",
      "Track likely dice outcomes.",
      "Use trading intelligently.",
      "Watch opponents' development."
    ]
  },

  // ============================================================
  // 12. CLUE
  // ============================================================
  {
    id: "clue",
    name: "Clue",
    image: "/games/clue.jpg",
    category: "Deduction",

    description:
      "A deduction game where players investigate a mysterious crime and determine the suspect, weapon, and location.",

    players: "3–6 players",
    playTime: "45–60 minutes",
    difficulty: "Easy",

    objective:
      "Determine the three hidden solution cards representing the suspect, weapon, and room.",

    setup: [
      "Separate suspect, weapon, and room cards.",
      "Place one card from each category into the confidential solution.",
      "Shuffle the remaining cards.",
      "Deal the cards among players.",
      "Give each player a detective sheet."
    ],

    rules: [
      "Players move around the board.",
      "Players make suggestions when entering rooms.",
      "Other players may disprove suggestions.",
      "Players record information.",
      "Players can eventually make a final accusation.",
      "A correct accusation wins."
    ],

    scoring: [
      "Clue does not use traditional numerical scoring.",
      "The objective is to solve the mystery.",
      "The first player to correctly identify the solution wins."
    ],

    strategy: [
      "Record information carefully.",
      "Track who can disprove suggestions.",
      "Use suggestions to eliminate possibilities.",
      "Do not accuse until you are confident."
    ],

    tips: [
      "Keep your detective sheet organized.",
      "Remember your own cards.",
      "Look for patterns in opponents' responses."
    ]
  },

  // ============================================================
  // 13. CODENAMES
  // ============================================================
  {
    id: "codenames",
    name: "Codenames",
    image: "/games/codenames.jpg",
    category: "Party",

    description:
      "A word-based team game where clue-givers guide teammates toward their team's words while avoiding the opposing team's words and the assassin.",

    players: "4+ players",
    playTime: "15–30 minutes",
    difficulty: "Easy",

    objective:
      "Identify all of your team's words before the opposing team does, while avoiding the assassin.",

    setup: [
      "Lay out 25 word cards in a grid.",
      "Choose one spymaster for each team.",
      "Give the spymasters the key card.",
      "Determine which team starts.",
      "Begin giving clues."
    ],

    rules: [
      "Spymasters give one-word clues and a number.",
      "The number indicates how many words relate to the clue.",
      "Teammates discuss and select cards.",
      "Incorrect guesses can help the opposing team.",
      "Selecting the assassin causes an immediate loss."
    ],

    scoring: [
      "The first team to identify all of its agents wins.",
      "Selecting the assassin results in an immediate loss."
    ],

    strategy: [
      "Create clues connecting several words.",
      "Avoid clues with dangerous associations.",
      "Think about how opponents interpret your clue.",
      "Use the number carefully."
    ],

    tips: [
      "Simple clues are often safer.",
      "Always consider the assassin.",
      "Do not make clues overly complicated."
    ]
  },

  // ============================================================
  // 14. COUP
  // ============================================================
  {
    id: "coup",
    name: "Coup",
    image: "/games/coup.jpg",
    category: "Bluffing",

    description:
      "A fast bluffing and deduction card game where players use hidden roles, deception, and challenges to eliminate opponents.",

    players: "2–6 players",
    playTime: "15 minutes",
    difficulty: "Easy",

    objective:
      "Be the last player with influence remaining.",

    setup: [
      "Shuffle the role cards.",
      "Deal two influence cards to each player.",
      "Players keep their cards hidden.",
      "Give each player starting coins.",
      "Place the remaining cards face down."
    ],

    rules: [
      "Players take one action on their turn.",
      "Players may claim roles even if they do not actually hold them.",
      "Opponents can challenge claims.",
      "Players can block certain actions.",
      "A player losing both influence cards is eliminated.",
      "The final surviving player wins."
    ],

    scoring: [
      "There is no traditional point system.",
      "Players win by remaining the last player with influence."
    ],

    strategy: [
      "Bluff carefully.",
      "Track which roles have already been revealed.",
      "Challenge suspicious claims.",
      "Save coins for powerful actions.",
      "Adapt your behavior to opponents."
    ],

    tips: [
      "Do not bluff every turn.",
      "Sometimes acting honestly makes later bluffs stronger.",
      "Watch opponents' coin totals."
    ]
  },

  // ============================================================
  // 15. DIXIT
  // ============================================================
  {
    id: "dixit",
    name: "Dixit",
    image: "/games/dixit.jpg",
    category: "Party",

    description:
      "A creative storytelling game where players use beautifully illustrated cards and clues to make others guess their chosen image.",

    players: "3–8 players",
    playTime: "30 minutes",
    difficulty: "Easy",

    objective:
      "Earn points by giving clues that some, but not all, players can identify.",

    setup: [
      "Give each player a set of voting tokens.",
      "Deal six image cards to each player.",
      "Choose the first storyteller.",
      "Place the remaining deck in the center."
    ],

    rules: [
      "The storyteller chooses one card secretly.",
      "The storyteller gives a clue about the card.",
      "Other players secretly submit a card matching the clue.",
      "All submitted cards are shuffled and revealed.",
      "Players vote for the storyteller's card.",
      "Points are awarded based on the votes."
    ],

    scoring: [
      "The storyteller scores when some but not all players identify their card.",
      "Players score when others vote for their submitted card.",
      "If everyone or nobody identifies the storyteller's card, the storyteller receives no normal points.",
      "The player with the most points wins."
    ],

    strategy: [
      "Give clues that are neither too obvious nor too obscure.",
      "Study the way other players think.",
      "Choose cards that can imitate the clue effectively."
    ],

    tips: [
      "Think about your specific audience.",
      "Avoid clues that are impossible to interpret.",
      "Use unusual associations when appropriate."
    ]
  },

  // ============================================================
  // 16. DOMINION
  // ============================================================
  {
    id: "dominion",
    name: "Dominion",
    image: "/games/dominion.jpg",
    category: "Deck Building",

    description:
      "A deck-building card game where players acquire cards and gradually build a more powerful deck.",

    players: "2–4 players",
    playTime: "30 minutes",
    difficulty: "Medium",

    objective:
      "Build the most valuable deck by acquiring Treasure, Kingdom, and Victory cards.",

    setup: [
      "Give each player their starting deck.",
      "Create the common supply piles.",
      "Choose the Kingdom card piles.",
      "Give each player their starting hand.",
      "Determine the starting player."
    ],

    rules: [
      "Players normally have an Action phase.",
      "Players normally have a Buy phase.",
      "Treasure cards provide spending power.",
      "Players can purchase cards from the supply.",
      "Players clean up their played cards.",
      "Players draw a new hand."
    ],

    scoring: [
      "Victory cards provide victory points.",
      "Some Kingdom cards provide victory points.",
      "Players count the points in their final deck.",
      "The highest score wins."
    ],

    strategy: [
      "Balance economy and victory cards.",
      "Avoid filling your deck with weak cards.",
      "Look for powerful card combinations.",
      "Adapt to the available Kingdom cards."
    ],

    tips: [
      "Improve your deck before buying too many Victory cards.",
      "Do not buy every Action card.",
      "Watch how quickly the game is ending."
    ]
  },

  // ============================================================
  // 17. EVERDELL
  // ============================================================
  {
    id: "everdell",
    name: "Everdell",
    image: "/games/everdell.jpg",
    category: "Strategy",

    description:
      "A charming worker-placement and tableau-building game where players develop a woodland city populated by forest creatures.",

    players: "1–4 players",
    playTime: "40–80 minutes",
    difficulty: "Medium",

    objective:
      "Build the most prosperous woodland city by placing workers, playing cards, and completing events.",

    setup: [
      "Prepare the Everdell board.",
      "Place the workers and resources.",
      "Shuffle the Meadow deck.",
      "Give each player starting workers.",
      "Prepare the event spaces."
    ],

    rules: [
      "Players place workers on locations.",
      "Workers collect resources or perform actions.",
      "Players can play Critter and Construction cards.",
      "Cards can create powerful combinations.",
      "Players can complete special events.",
      "Players eventually prepare for the next season."
    ],

    scoring: [
      "Cards provide victory points.",
      "Completed events provide points.",
      "Resources and card combinations can provide additional benefits.",
      "The player with the highest final score wins."
    ],

    strategy: [
      "Build useful card combinations.",
      "Plan your city carefully.",
      "Use workers efficiently.",
      "Complete valuable events.",
      "Manage limited city space."
    ],

    tips: [
      "Look for card synergies.",
      "Do not waste workers.",
      "Plan your next season early."
    ]
  },

  // ============================================================
  // 18. GLOOMHAVEN
  // ============================================================
  {
    id: "gloomhaven",
    name: "Gloomhaven",
    image: "/games/gloomhaven.jpg",
    category: "Adventure",

    description:
      "A cooperative tactical dungeon-crawling game where players control unique mercenaries, explore scenarios, and develop their characters.",

    players: "1–4 players",
    playTime: "60–120 minutes",
    difficulty: "Hard",

    objective:
      "Work together to complete scenario objectives while managing character abilities, resources, and long-term progression.",

    setup: [
      "Choose characters and prepare their ability decks.",
      "Set up the scenario map.",
      "Place monsters according to the scenario.",
      "Prepare character health and resources.",
      "Read the scenario introduction."
    ],

    rules: [
      "Players secretly select two ability cards.",
      "Players reveal their initiative values.",
      "Characters and monsters act according to initiative.",
      "Players use the top action of one card and bottom action of another.",
      "Cards eventually become unavailable through exhaustion.",
      "Players complete scenario objectives to succeed."
    ],

    scoring: [
      "Scenarios generally use objectives rather than traditional scoring.",
      "Characters gain experience during scenarios.",
      "Gold and rewards contribute to character progression.",
      "Campaign progress unlocks new content."
    ],

    strategy: [
      "Coordinate actions with teammates.",
      "Manage card loss carefully.",
      "Control monster positioning.",
      "Use character strengths together.",
      "Avoid unnecessary damage."
    ],

    tips: [
      "Do not waste powerful cards early.",
      "Communicate without revealing every hidden detail.",
      "Positioning is extremely important.",
      "Plan turns around monster initiative."
    ]
  },

  // ============================================================
  // 19. MONOPOLY
  // ============================================================
  {
    id: "monopoly",
    name: "Monopoly",
    image: "/games/monopoly.jpg",
    category: "Economic",

    description:
      "A classic property trading game where players buy, sell, and develop properties while attempting to bankrupt their opponents.",

    players: "2–8 players",
    playTime: "60–180 minutes",
    difficulty: "Easy",

    objective:
      "Become the wealthiest player by acquiring properties, collecting rent, and forcing opponents into bankruptcy.",

    setup: [
      "Give each player their starting money.",
      "Place all tokens on the starting space.",
      "Shuffle the Chance and Community Chest cards.",
      "Choose the Banker.",
      "Place the property cards and houses nearby."
    ],

    rules: [
      "Players roll dice and move around the board.",
      "Players can purchase unowned properties.",
      "Players pay rent when landing on opponents' properties.",
      "Players can build houses and hotels.",
      "Players may trade properties and money.",
      "Players are eliminated when they cannot pay their debts."
    ],

    scoring: [
      "There is no traditional point system.",
      "Players accumulate money and property value.",
      "The last financially surviving player wins."
    ],

    strategy: [
      "Acquire valuable property groups.",
      "Develop monopolies when possible.",
      "Keep enough cash available.",
      "Trade strategically.",
      "Consider expected landing probabilities."
    ],

    tips: [
      "Property development is often more important than cash alone.",
      "Do not accept every trade.",
      "Keep an emergency cash reserve."
    ]
  },

  // ============================================================
  // 20. MUNCHKIN
  // ============================================================
  {
    id: "munchkin",
    name: "Munchkin",
    image: "/games/munchkin.jpg",
    category: "Party",

    description:
      "A humorous card game where players fight monsters, collect treasure, gain levels, and interfere with their opponents.",

    players: "3–6 players",
    playTime: "60–120 minutes",
    difficulty: "Easy",

    objective:
      "Be the first player to reach the required winning level by defeating monsters and gaining levels.",

    setup: [
      "Shuffle the Door and Treasure decks.",
      "Deal starting cards.",
      "Players begin at the starting level.",
      "Place the decks within reach."
    ],

    rules: [
      "Players kick open a Door by drawing a Door card.",
      "Players may encounter monsters.",
      "Players compare combat strength against monsters.",
      "Other players can interfere with combat.",
      "Defeating monsters provides treasure and levels.",
      "Players can use equipment and special cards."
    ],

    scoring: [
      "Players primarily progress through levels.",
      "Defeating monsters can provide levels.",
      "The first player to reach the winning level wins."
    ],

    strategy: [
      "Choose battles carefully.",
      "Save powerful cards.",
      "Negotiate with other players.",
      "Watch for opponents who are close to winning."
    ],

    tips: [
      "Do not underestimate opponents.",
      "Save strong cards for important battles.",
      "Use negotiation strategically."
    ]
  },

  // ============================================================
  // 21. PANDEMIC
  // ============================================================
  {
    id: "pandemic",
    name: "Pandemic",
    image: "/games/pandemic.jpg",
    category: "Cooperative",

    description:
      "A cooperative strategy game where players work together as specialists to control global disease outbreaks and discover cures.",

    players: "2–4 players",
    playTime: "45–60 minutes",
    difficulty: "Medium",

    objective:
      "Work together to discover cures for all four diseases before the world is overwhelmed by outbreaks.",

    setup: [
      "Place the world map in the center.",
      "Place disease cubes according to the setup rules.",
      "Give each player a role.",
      "Deal player cards.",
      "Prepare the infection deck."
    ],

    rules: [
      "Players perform up to four actions each turn.",
      "Players can move between cities.",
      "Players can treat diseases.",
      "Players can share knowledge.",
      "Players can discover cures.",
      "Infection cards add disease cubes to cities.",
      "Epidemics can cause major outbreaks."
    ],

    scoring: [
      "Pandemic is primarily a cooperative win-or-lose game.",
      "Players win by discovering all four cures.",
      "Players lose if certain game-ending conditions occur."
    ],

    strategy: [
      "Coordinate roles.",
      "Control dangerous cities.",
      "Plan around upcoming infections.",
      "Share knowledge efficiently.",
      "Prioritize outbreak prevention."
    ],

    tips: [
      "Do not focus only on discovering cures.",
      "Watch cities with three disease cubes.",
      "Use specialist abilities effectively.",
      "Communicate every turn."
    ]
  },

  // ============================================================
  // 22. POWER GRID
  // ============================================================
  {
    id: "power-grid",
    name: "Power Grid",
    image: "/games/power-grid.jpg",
    category: "Economic Strategy",

    description:
      "An economic strategy game where players build power networks, purchase power plants, acquire resources, and compete to supply cities.",

    players: "2–6 players",
    playTime: "120 minutes",
    difficulty: "Hard",

    objective:
      "Build the largest and most efficient power network while managing money, resources, and power plants.",

    setup: [
      "Choose the game map.",
      "Select the appropriate cities.",
      "Give each player starting money.",
      "Prepare the power plant market.",
      "Prepare the resource market."
    ],

    rules: [
      "Players bid for power plants.",
      "Players purchase resources for their plants.",
      "Players build connections between cities.",
      "Players can power their connected cities.",
      "The resource market changes based on demand.",
      "The game ends when a player reaches the required network size."
    ],

    scoring: [
      "Players earn money by powering cities.",
      "The final winner is determined by how many cities can be powered.",
      "Tie-breaking rules consider remaining money."
    ],

    strategy: [
      "Control your network expansion costs.",
      "Watch resource prices.",
      "Do not overpay for power plants.",
      "Adapt to opponents' networks.",
      "Maintain enough cash for expansion."
    ],

    tips: [
      "Think about future resource costs.",
      "Network positioning is important.",
      "Going first is not always an advantage.",
      "Keep your power generation efficient."
    ]
  },

  // ============================================================
  // 23. ROOT
  // ============================================================
  {
    id: "root",
    name: "Root",
    image: "/games/root.jpg",
    category: "Strategy",

    description:
      "An asymmetric woodland strategy game where different factions compete for control using completely different abilities and objectives.",

    players: "2–4 players",
    playTime: "60–90 minutes",
    difficulty: "Hard",

    objective:
      "Earn victory points according to your faction's unique strategy and reach the required victory threshold.",

    setup: [
      "Choose a faction.",
      "Give each player their faction board and pieces.",
      "Set up the woodland map.",
      "Place faction-specific starting pieces.",
      "Prepare the cards and item supply."
    ],

    rules: [
      "Each faction has unique rules and abilities.",
      "Players move warriors around the woodland.",
      "Players can battle opposing factions.",
      "Players control clearings and build structures.",
      "Players use cards for actions and crafting.",
      "Factions score differently."
    ],

    scoring: [
      "Players earn points through faction-specific actions.",
      "Some factions score by controlling territories.",
      "Crafted cards can provide points.",
      "A player reaching the required victory threshold wins."
    ],

    strategy: [
      "Learn your faction's unique engine.",
      "Understand what opponents need to accomplish.",
      "Control important clearings.",
      "Use alliances carefully.",
      "Adapt to the asymmetric game state."
    ],

    tips: [
      "Every faction plays differently.",
      "Do not judge all factions by the same strategy.",
      "Watch opponents' victory progress.",
      "Learn your faction before optimizing advanced strategies."
    ]
  },

  // ============================================================
  // 24. SCYTHE
  // ============================================================
  {
    id: "scythe",
    name: "Scythe",
    image: "/games/scythe.jpg",
    category: "Strategy",

    description:
      "A deep strategy game set in an alternate-history 1920s where factions expand territories, produce resources, build structures, and deploy powerful mechs.",

    players: "1–5 players",
    playTime: "90–115 minutes",
    difficulty: "Hard",

    objective:
      "Build an efficient faction, expand your territory, complete objectives, and accumulate the most popularity and wealth.",

    setup: [
      "Choose a faction and player mat.",
      "Place starting units and resources.",
      "Prepare the central board.",
      "Place encounter and objective cards.",
      "Determine the starting player."
    ],

    rules: [
      "Players take turns using action sections on their player mat.",
      "Players can move units across territories.",
      "Players can produce resources.",
      "Players can build structures and recruit workers.",
      "Players can deploy mechs.",
      "Combat occurs when opposing units occupy the same territory.",
      "Players place stars for completing achievements."
    ],

    scoring: [
      "Players earn stars for completing achievements.",
      "Final scoring considers territories, resources, and structures.",
      "Popularity affects the value of final scoring.",
      "The player with the highest final score wins."
    ],

    strategy: [
      "Develop an efficient action economy.",
      "Expand strategically.",
      "Manage popularity carefully.",
      "Complete stars efficiently.",
      "Do not fight unnecessarily."
    ],

    tips: [
      "Focus on synergy between actions.",
      "Resources are valuable even when not immediately spent.",
      "Plan your final scoring early.",
      "Combat is often a means rather than the main objective."
    ]
  },

  // ============================================================
  // 25. SPLENDOR
  // ============================================================
  {
    id: "splendor",
    name: "Splendor",
    image: "/games/splendor.jpg",
    category: "Engine Building",

    description:
      "A strategy game where players collect gems, purchase development cards, attract nobles, and build an efficient economic engine.",

    players: "2–4 players",
    playTime: "30 minutes",
    difficulty: "Easy",

    objective:
      "Reach the required number of prestige points by acquiring development cards and attracting nobles.",

    setup: [
      "Place three levels of development cards.",
      "Place the appropriate gem tokens.",
      "Reveal noble tiles.",
      "Give players no starting cards or resources.",
      "Determine the starting player."
    ],

    rules: [
      "Players can take gem tokens.",
      "Players can purchase development cards.",
      "Purchased cards provide permanent bonuses.",
      "Players can reserve cards.",
      "Nobles visit players who meet their requirements.",
      "The game enters its final phase when a player reaches the required points."
    ],

    scoring: [
      "Development cards provide prestige points.",
      "Noble tiles provide additional points.",
      "The player with the highest prestige score wins."
    ],

    strategy: [
      "Build permanent gem discounts quickly.",
      "Plan toward high-value cards.",
      "Watch opponents' requirements.",
      "Use nobles as part of your strategy.",
      "Do not collect unnecessary gems."
    ],

    tips: [
      "Early discounts are extremely valuable.",
      "Think several purchases ahead.",
      "Reserve cards strategically."
    ]
  },

  // ============================================================
  // 26. SPLENDOR DUEL
  // ============================================================
  {
    id: "splendor-duel",
    name: "Splendor Duel",
    image: "/games/splendor-duel.jpg",
    category: "Strategy",

    description:
      "A two-player competitive gem-collecting and engine-building game where players compete to achieve one of several victory conditions.",

    players: "2 players",
    playTime: "30 minutes",
    difficulty: "Medium",

    objective:
      "Achieve one of the game's victory conditions through prestige, royal crowns, or a specific color-based achievement.",

    setup: [
      "Prepare the development card board.",
      "Arrange the gem tokens according to the setup.",
      "Reveal the available cards.",
      "Prepare privilege tokens.",
      "Choose the starting player."
    ],

    rules: [
      "Players collect gem tokens from the shared board.",
      "Players can purchase development cards.",
      "Cards provide permanent bonuses and prestige.",
      "Players can reserve cards.",
      "Players can use privilege tokens.",
      "The game ends immediately when a player satisfies a victory condition."
    ],

    scoring: [
      "Players can win through prestige.",
      "Players can win through crown requirements.",
      "Players can win through special color-based conditions.",
      "The first player to satisfy a victory condition wins."
    ],

    strategy: [
      "Watch your opponent's victory progress.",
      "Use the token board carefully.",
      "Build efficient discounts.",
      "Do not allow an opponent to easily complete a special condition."
    ],

    tips: [
      "Always check all three victory conditions.",
      "Blocking an opponent can be as important as advancing yourself.",
      "Plan gem collection several turns ahead."
    ]
  },

  // ============================================================
  // 27. SUSHI GO!
  // ============================================================
  {
    id: "sushi-go",
    name: "Sushi Go!",
    image: "/games/sushi-go.jpg",
    category: "Card / Party",

    description:
      "A fast card-drafting game where players collect sushi combinations and score points over multiple rounds.",

    players: "2–5 players",
    playTime: "15 minutes",
    difficulty: "Easy",

    objective:
      "Score the most points by collecting valuable combinations of sushi cards over three rounds.",

    setup: [
      "Shuffle the Sushi Go deck.",
      "Deal cards according to the number of players.",
      "Give each player a hand.",
      "Prepare the score sheet.",
      "Choose the starting player."
    ],

    rules: [
      "Each player selects one card from their hand.",
      "Players reveal their selected cards simultaneously.",
      "Players pass the remaining hand to the next player.",
      "This continues until all cards have been played.",
      "Cards score according to their specific combinations.",
      "The game lasts three rounds."
    ],

    scoring: [
      "Tempura cards score in pairs.",
      "Sashimi cards score in sets.",
      "Dumplings increase in value as more are collected.",
      "Nigiri cards provide points.",
      "Wasabi can increase the value of certain Nigiri.",
      "Pudding is scored at the end of the game."
    ],

    strategy: [
      "Watch which cards opponents are collecting.",
      "Balance immediate points with future combinations.",
      "Do not overcommit to rare combinations.",
      "Pay attention to Pudding for the final scoring."
    ],

    tips: [
      "Passing information is part of the strategy.",
      "Sometimes taking a card is useful mainly because it denies an opponent.",
      "Think about all three rounds."
    ]
  },

  // ============================================================
  // 28. TERRAFORMING MARS
  // ============================================================
  {
    id: "terraforming-mars",
    name: "Terraforming Mars",
    image: "/games/terraforming-mars.jpg",
    category: "Strategy",

    description:
      "A strategic engine-building game where corporations develop projects to transform Mars into a habitable planet.",

    players: "1–5 players",
    playTime: "120–180 minutes",
    difficulty: "Hard",

    objective:
      "Raise Mars's global temperature, oxygen level, and ocean coverage while earning the most victory points.",

    setup: [
      "Prepare the Mars board.",
      "Place ocean tiles according to the setup.",
      "Set the global temperature marker.",
      "Set the oxygen level.",
      "Give each player corporation cards and starting resources.",
      "Shuffle the project deck."
    ],

    rules: [
      "Players receive project cards.",
      "Players can play projects by paying their costs.",
      "Projects can increase production.",
      "Players can place forests and cities.",
      "Players can raise oxygen and temperature.",
      "Players can place ocean tiles.",
      "The game ends when all global parameters reach their required levels."
    ],

    scoring: [
      "Players receive Terraform Rating points.",
      "Cities and forests can provide points.",
      "Milestones provide points.",
      "Awards can provide additional points.",
      "Cards can provide victory points.",
      "The highest final score wins."
    ],

    strategy: [
      "Build an efficient production engine.",
      "Use projects that support your corporation.",
      "Balance short-term and long-term benefits.",
      "Watch milestones and awards.",
      "Plan your final scoring."
    ],

    tips: [
      "Do not buy every interesting card.",
      "Production improvements become increasingly valuable.",
      "Pay attention to global parameters.",
      "Choose projects that work together."
    ]
  },

  // ============================================================
  // 29. TICKET TO RIDE
  // ============================================================
  {
    id: "ticket-to-ride",
    name: "Ticket to Ride",
    image: "/games/ticket-to-ride.jpg",
    category: "Strategy",

    description:
      "A route-building board game where players collect train cards, claim railway routes, and connect cities across a map.",

    players: "2–5 players",
    playTime: "30–60 minutes",
    difficulty: "Easy",

    objective:
      "Score the most points by claiming railway routes and successfully completing destination tickets.",

    setup: [
      "Place the game board in the center.",
      "Give each player train pieces.",
      "Deal destination tickets.",
      "Give each player train cards.",
      "Reveal the initial train card market."
    ],

    rules: [
      "Players can draw train cards.",
      "Players can claim routes by playing matching cards.",
      "Players can draw additional destination tickets.",
      "Completed destinations provide bonus points.",
      "Incomplete destinations lose points.",
      "Longest continuous route can provide bonus points."
    ],

    scoring: [
      "Players score when claiming routes.",
      "Completed destination tickets provide points.",
      "Incomplete destination tickets subtract points.",
      "The longest continuous route can provide a bonus."
    ],

    strategy: [
      "Plan routes before committing.",
      "Collect cards for important routes early.",
      "Watch opponents' destination possibilities.",
      "Avoid blocking yourself.",
      "Balance ticket completion with route scoring."
    ],

    tips: [
      "Do not reveal your destination plans unnecessarily.",
      "Claim critical routes before opponents do.",
      "Keep an eye on remaining train pieces."
    ]
  },

  // ============================================================
  // 30. WINGSPAN
  // ============================================================
  {
    id: "wingspan",
    name: "Wingspan",
    image: "/games/wingspan.jpg",
    category: "Engine Building",

    description:
      "A relaxing engine-building strategy game where players attract birds to wildlife habitats and build powerful combinations.",

    players: "1–5 players",
    playTime: "40–70 minutes",
    difficulty: "Medium",

    objective:
      "Build the most successful bird habitat by attracting birds, collecting food, laying eggs, and completing objectives.",

    setup: [
      "Give each player a personal player mat.",
      "Give each player starting cards and food.",
      "Prepare the bird deck.",
      "Prepare the bird tray.",
      "Set up the goal board.",
      "Determine the starting player."
    ],

    rules: [
      "Players take one action each turn.",
      "Players can play bird cards into habitats.",
      "Players can gain food.",
      "Players can lay eggs.",
      "Players can draw additional bird cards.",
      "Bird powers activate based on habitat actions.",
      "The game is played across four rounds."
    ],

    scoring: [
      "Bird cards provide victory points.",
      "Eggs provide points.",
      "Food stored on birds can provide points.",
      "End-of-round goals provide points.",
      "Bonus cards can provide additional points."
    ],

    strategy: [
      "Build strong bird combinations.",
      "Develop habitats efficiently.",
      "Use bird powers to create action chains.",
      "Balance food, eggs, and card draws.",
      "Pay attention to round goals."
    ],

    tips: [
      "Early engine development is valuable.",
      "Do not ignore eggs.",
      "Look for combinations between bird powers.",
      "Plan around the end-of-round goals."
    ]
  }
];