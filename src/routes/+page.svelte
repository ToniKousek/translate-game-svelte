<div class="container">
  <h1>Lingo Detect</h1>
  <div class="main">
    <a href="/game">
      <div class="link-container">
        <span class="material-symbols-outlined"> stadia_controller </span>
        <span class="icon-about">Game</span>
      </div>
    </a>
    <p class="about-gamemode">
      In this game mode you have 3 lives and have to reach a high score
    </p>

    <a href="/time-attack">
      <div class="link-container">
        <span class="material-symbols-outlined"> timer </span>
        <span class="icon-about">Game</span>
      </div>
    </a>
    <p class="about-gamemode">
      In this mode you have a set amount of time and have to reach a high score
      until the timer is zero
    </p>
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
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  /* The links to the game modes to be able to hover */
  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .icon-about {
    position: relative;
    top: 1.3em;

    display: none;
  }

  .link-container:hover .icon-about {
    display: block;
  }

  .material-symbols-outlined {
    margin: 1rem 1rem 1rem 1rem;
    font-size: xx-large;
  }

  /*
  p.about-gamemode {
    text-align: end;
  }
  */
</style>
