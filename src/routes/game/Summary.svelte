<script lang="ts">
  import type api from "$lib/translations.json";
  import { highscore } from "../routes/game/stores";

  export let beginPlay: Function;
  export let previous_guesses: previousFormInterface[];
  export let score: number;

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
</script>

<h1>Summary</h1>
<h2>Highscore: <b>{$highscore}</b></h2>
<h2>Score: <b>{score}</b></h2>

<h2>Your guesses</h2>
{#each previous_guesses as guess, index}
  <h3>{index}. guess:</h3>
  <p>
    <i>"{guess.sentence.translations[guess.language.code]}"</i> was {guess
      .language.name}
  </p>
  <p>You guessed: {guess.userLanguage.name} {guess.wasSuccess ? "✅" : "❌"}</p>
{/each}

<br />
<button on:click={beginPlay()}>Play again</button>

<!-- The ad has some height so to counter is an empty div with height. Really bad hack -->
<div style="height: 5em;" />

<style>
  button {
    font-size: xx-large;
  }
</style>
