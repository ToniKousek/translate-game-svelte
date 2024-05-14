<script lang="ts">
  import type api from "$lib/translations.json";
  import Game from "$lib/Game.svelte";
  import Summary from "$lib/Summary.svelte";

  //import { highscore } from "./stores";
  import { highscore } from "$lib/highscore_store";
  import { GameTypes, type GameType } from "$lib/game_types";

  interface previousFormInterface {
    sentence: (typeof api.sentences)[0];
    wasSuccess: boolean;
    language: languageInterface;
    userLanguage: languageInterface;
  }

  interface languageInterface {
    code: keyof typeof api.languages;
    name: string;
  }

  enum PlayState {
    Playing,
    Paused,
    MainMenu,
    Summary,
  }
  let state: PlayState = PlayState.Playing;

  const gameType: GameType = { type: GameTypes.Normal, difficulty: undefined };

  function endGame(game_guesses: previousFormInterface[], score: number) {
    previous_guesses = game_guesses;

    if (score > highscore.get(gameType)) highscore.new(gameType, score);
    console.log("Highscore is:");
    console.log($highscore);
    previous_score = score;
    state = PlayState.Summary;
  }

  function beginPlay() {
    state = PlayState.Playing;
  }

  let previous_guesses: previousFormInterface[] = [];
  let previous_score: number = 0;
</script>

{#if state === PlayState.Playing}
  <Game {endGame} />
{:else if state === PlayState.Summary}
  <Summary {beginPlay} {previous_guesses} score={previous_score} />
{/if}
