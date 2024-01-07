<script lang="ts">
  import type api from "$lib/translations.json";
  import Game from "$lib/Game.svelte";
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
  let state: PlayState = PlayState.Playing;

  function endGame(game_guesses: previousFormInterface[], score: number) {
    previous_guesses = game_guesses;
    $highscore = score > $highscore ? score : $highscore;
    console.log($highscore, score);
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
