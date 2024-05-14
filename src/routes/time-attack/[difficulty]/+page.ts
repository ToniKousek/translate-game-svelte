import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { GameDifficulty, GameTypes, type GameType } from "$lib/game_types";

export const load: PageLoad = ({ params }) => {
  if (params.difficulty === "easy") {
    return {
      type: GameTypes.TimeAttack,
      difficulty: GameDifficulty.Easy,
    } as GameType;
  } else if (params.difficulty === "medium") {
    return {
      type: GameTypes.TimeAttack,
      difficulty: GameDifficulty.Medium,
    } as GameType;
  } else if (params.difficulty === "hard") {
    return {
      type: GameTypes.TimeAttack,
      difficulty: GameDifficulty.Hard,
    } as GameType;
  }

  throw error(404, "Not found");
};
