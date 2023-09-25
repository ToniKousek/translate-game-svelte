<script lang="ts">
  //! The game
  import api from "$lib/translations.json";

  export let endGame: (
    game_guesses: previousFormInterface[],
    score: number
  ) => void;

  // creating interfaces

  interface languageInterface {
    code: keyof typeof api.languages;
    name: string;
  }

  interface previousFormInterface {
    sentence: (typeof api.sentences)[0];
    wasSuccess: boolean;
    language: languageInterface;
    userLanguage: languageInterface;
  }

  let languagesKeys = Object.keys(
    api.languages
  ) as (keyof typeof api.languages)[];

  // creating functions

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function handleSubmit() {
    /*console.log("user_language=");
    console.table(user_language);
    console.log("current_language=");
    console.table(current_language);
    console.log("current_sentence=");
    console.table(current_sentence);
    */
    if (user_language == current_language) {
      console.log("Correct!");
      score++;

      previousForm = [
        ...previousForm,
        {
          sentence: current_sentence,
          language: current_language,
          userLanguage: user_language,
          wasSuccess: true,
        },
      ];
    } else {
      console.log("Not Correct!");
      time -= wrongTime;

      previousForm = [
        ...previousForm,
        {
          sentence: current_sentence,
          language: current_language,
          userLanguage: user_language,
          wasSuccess: false,
        },
      ];
    }
    console.log(previousForm);
    newGame();
  }

  function newGame() {
    current_sentence = api.sentences[getRandomInt(api.sentences.length - 1)];
    current_language = api.languages[
      languagesKeys[getRandomInt(languagesKeys.length - 1)]
    ] as languageInterface;
  }

  function gameOver() {
    // alert("You lost!");
    endGame(previousForm, score);
    time = startTime;
    score = 0;
    newGame();
  }

  // dynamic variables

  let score = 0;

  let current_sentence = api.sentences[0];
  let current_language = api.languages.en as languageInterface;

  let user_language = api.languages.en as languageInterface;

  let previousForm: previousFormInterface[] = [];

  // time functionality

  export let startTime: number;
  export let wrongTime: number;

  let time = startTime;

  let timerId: number | null = null;

  function startGameTimer() {
    timerId = setInterval(() => (time -= 1), 1000);
  }

  $: !timerId && startGameTimer();
  $: time <= 0 && gameOver();
</script>

<div id="root">
  <header>
    <div>Time left: {time}</div>
    <div>Score: {score}</div>
  </header>

  <form id="main" on:submit|preventDefault={handleSubmit}>
    <p>What is this sentence?</p>
    <p class="current-sentence">
      {current_sentence.translations[current_language.code]}
    </p>
    <select id="select-languages" bind:value={user_language}>
      {#each Object.entries(api.languages) as [_, language]}
        <option value={language}>{language.name}</option>
      {/each}
    </select>
    <button type="submit">Submit</button>
  </form>

  <div class="popUp">
    {#if previousForm.length === 0}
      You will see the previous correct answer here
    {:else}
      <i
        >"{previousForm[previousForm.length - 1].sentence?.translations[
          previousForm[previousForm.length - 1].language.code
        ]}"</i
      >
      was in
      <b>{previousForm[previousForm.length - 1].language.name}</b>
      <br />
      <p
        style="color:{previousForm[previousForm.length - 1].wasSuccess
          ? 'green'
          : 'firebrick'}"
      >
        You were {previousForm[previousForm.length - 1].wasSuccess
          ? "Correct"
          : "Wrong"}
      </p>
    {/if}
  </div>
</div>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  form,
  select,
  button {
    font-size: inherit;
  }
  .current-sentence {
    font-style: italic;
    margin-bottom: 1rem;
  }
  #root {
    font-size: xx-large;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  select,
  button {
    margin: 0 auto 1rem;
  }
  .popUp {
    background-color: var(--secondary-bg-color);
    font-size: x-large;
    padding: 1rem;
    margin: 0 auto;
    border-radius: 2rem;
  }
  b {
    color: var(--primary-color);
  }
</style>
