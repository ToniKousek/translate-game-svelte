<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let startTime: number;
  let wrongTime: number;
  switch (data.difficulty) {
    case "easy":
      startTime = 60;
      wrongTime = 5;
      break;
    case "medium":
      startTime = 50;
      wrongTime = 7;
      break;
    case "hard":
      startTime = 40;
      wrongTime = 10;
      break;
  }

  import type api from "$lib/translations.json";
  import Game from "./Game.svelte";
  import Summary from "./Summary.svelte";

  import { highscore } from "./stores";

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
    $highscore = score > $highscore ? score : $highscore;
    console.log($highscore, score);
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
  <h1>You have {startTime} seconds to guess as many languages!</h1>
  <button
    on:click={() => {
      state = PlayState.Playing;
    }}>Play!</button
  >
{:else if state === PlayState.Playing}
  <Game {endGame} {startTime} {wrongTime} />
{:else if state === PlayState.Summary}
  <Summary {beginPlay} {previous_guesses} score={previous_score} />
{/if}
