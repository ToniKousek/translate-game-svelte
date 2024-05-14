<script lang="ts">
  import type { PageData } from "./$types";
  import { GameDifficulty, GameTypes } from "$lib/game_types";

  export let data: PageData;

  let startTime: number;
  let wrongTime: number;

  switch (data.difficulty) {
    case GameDifficulty.Easy:
      startTime = 60;
      wrongTime = 5;
      break;
    case GameDifficulty.Medium:
      startTime = 50;
      wrongTime = 7;
      break;
    case GameDifficulty.Hard:
      startTime = 40;
      wrongTime = 10;
      break;
    default:
      error(500, "Game difficulty not found");
  }
  if (data.difficulty === undefined) error(500, "Game difficulty not passed");

  import type api from "$lib/translations.json";
  import Game from "$lib/Game.svelte";
  import Summary from "../../../lib/Summary.svelte";

  import { highscore } from "$lib/highscore_store";
  import { error } from "@sveltejs/kit";

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
  let state: PlayState = PlayState.MainMenu;

  function endGame(game_guesses: previousFormInterface[], score: number) {
    previous_guesses = game_guesses;

    /*if (data.difficulty == GameDifficulty.Easy)
      $highscoreEasy = score > $highscoreEasy ? score : $highscoreEasy;
    if (data.difficulty == GameDifficulty.Medium)
      $highscoreMedium = score > $highscoreMedium ? score : $highscoreMedium;
    if (data.difficulty == GameDifficulty.Hard)
      $highscoreHard = score > $highscoreHard ? score : $highscoreHard;*/

    if (!data.difficulty) highscore.new(data, score);

    console.log(
      `Easy=${highscore.get({
        type: GameTypes.TimeAttack,
        difficulty: GameDifficulty.Easy,
      })} Medium=${highscore.get({
        type: GameTypes.TimeAttack,
        difficulty: GameDifficulty.Medium,
      })} Hard=${highscore.get({
        type: GameTypes.TimeAttack,
        difficulty: GameDifficulty.Hard,
      })}`,
      score
    );
    previous_score = score;
    state = PlayState.Summary;
  }

  function beginPlay() {
    state = PlayState.MainMenu;
  }

  let previous_guesses: previousFormInterface[] = [];
  let previous_score: number = 0;
</script>

{#if state === PlayState.MainMenu}
  <div class="container">
    <h1>You have {startTime} seconds to guess as many languages!</h1>
    <button
      on:click={() => {
        state = PlayState.Playing;
      }}
    >
      <span class="material-symbols-outlined mso"> play_arrow </span>
    </button>
  </div>

  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    button {
      width: fit-content;
      background-color: var(--accent);
      border-radius: 0.5rem;
      width: calc(fit-content + 5rem);
    }
    button .mso {
      font-size: 5rem;
    }
  </style>
{:else if state === PlayState.Playing}
  <Game {endGame} {startTime} {wrongTime} timed />
{:else if state === PlayState.Summary}
  <Summary
    {beginPlay}
    {previous_guesses}
    score={previous_score}
    gameType={data}
  />
{/if}
