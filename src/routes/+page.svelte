<svelte:head>
  <link rel="stylesheet" href="%sveltekit.assets%/menu.css" />
</svelte:head>

<div class="container">
  <h1>Lingo Detect</h1>
  <div class="main">
    <a class="link-container" href="/game">
      <div class="icon-container">
        <span class="material-symbols-outlined"> stadia_controller </span>
        <span class="icon-about">Game</span>
      </div>
      <p class="about-gamemode">
        In this game mode you have 3 lives and have to reach a high score
      </p>
    </a>

    <a class="link-container" href="/time-attack">
      <div class="icon-container">
        <span class="material-symbols-outlined"> timer </span>
        <span class="icon-about">Time attack</span>
      </div>
      <p class="about-gamemode">
        In this mode you have a set amount of time and have to reach a high
        score until the timer is zero
      </p>
    </a>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
  .link-container {
    display: flex;
    flex-direction: row;
  }
  /* The links to the game modes to be able to hover */
  .icon-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1rem;
    width: max-content;
    border: 0.25rem outset var(--primary-color);
  }

  .icon-about {
    position: relative;
    top: 1.6rem;
    margin-right: 1rem;
    width: max-content;

    display: none;
  }

  .icon-container:hover .icon-about {
    display: block;
  }
  .icon-container:hover .material-symbols-outlined {
    color: var(--secondary-color);
  }

  .material-symbols-outlined {
    padding: 1rem 1rem 1rem 1rem;
    font-size: xx-large;
  }

  /*
  p.about-gamemode {
    text-align: end;
  }
  */

  h1 {
    color: var(--heading-color);
  }
</style>
