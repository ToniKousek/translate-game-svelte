<svelte:head>
  <link rel="stylesheet" href="%sveltekit.assets%/menu.css" />
</svelte:head>

<div class="main-container">
  <h1>Time attack</h1>
  <!--<h2>Chose your difficulty:</h2>-->
  <div class="container">
    <a class="link-container" href="/time-attack/easy">
      <div class="icon-container">
        <span class="material-symbols-outlined easy-difficulty">
          signal_cellular_1_bar
        </span>
        <span class="icon-about">Easy</span>
      </div>
      <p class="about-gamemode">
        You have 60 seconds to reach your high score. Every time you miss, your
        time is deducted by 5 seconds
      </p>
    </a>

    <a class="link-container" href="/time-attack/medium">
      <div class="icon-container">
        <span class="material-symbols-outlined medium-difficulty">
          signal_cellular_3_bar
        </span>
        <span class="icon-about">Medium</span>
      </div>
      <p class="about-gamemode">
        You have 50 seconds to reach your high score. Every time you miss, your
        time is deducted by 7 seconds
      </p>
    </a>

    <a class="link-container" href="/time-attack/hard">
      <div class="icon-container">
        <span class="material-symbols-outlined hard-difficulty">
          network_cell
        </span>
        <span class="icon-about">Hard</span>
      </div>
      <p class="about-gamemode">
        You have 40 seconds to reach your high score. Every time you miss, your
        time is deducted by 10 seconds
      </p>
    </a>
  </div>
</div>

<style>
  h1 {
    color: var(--accent);
  }
  .main-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .icon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem;
    width: max-content;
    border: 0.25rem outset var(--primary);
  }

  .icon-about {
    position: relative;
    top: 1.3em;
    margin-right: 1rem;
    width: max-content;

    display: block;
  }
  .easy-difficulty {
    color: green;
  }
  .medium-difficulty {
    color: #ffbf00;
  }
  .hard-difficulty {
    color: red;
  }

  .material-symbols-outlined {
    padding: 1rem 1rem 1rem 1rem;
    font-size: xx-large;
  }
</style>
