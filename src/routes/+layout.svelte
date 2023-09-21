<nav>
  <a href="/">
    <div class="link-container">
      <span class="material-symbols-outlined"> home </span>
      <span class="icon-about">Home</span>
    </div>
  </a>
  <a href="/game">
    <div class="link-container">
      <span class="material-symbols-outlined"> stadia_controller </span>
      <span class="icon-about">Game</span>
    </div>
  </a>
  <a href="/time-attack">
    <div class="link-container">
      <span class="material-symbols-outlined"> timer </span>
      <span class="icon-about">Time attack</span>
    </div>
  </a>
</nav>
<hr />
<main>
  <slot />
</main>

<div class="ad-container">
  <div class="ad">Your ad here</div>
</div>
<footer>
  Made by <a
    href="https://github.com/ToniKousek"
    target="_blank"
    rel="noopener noreferrer">Toni Kousek</a
  > with ❤️
</footer>

<style>
  nav {
    display: flex;
    justify-content: space-evenly;
  }

  .link-container {
    display: flex;
    flex-direction: row;
  }
  .icon-about {
    position: relative;
    top: 0.3em;

    display: none;
  }
  .link-container:hover .icon-about {
    display: block;
  }
  .ad-container {
    display: flex;
    position: fixed;
    bottom: 2rem;
    width: 100vw;
    justify-content: center;
  }
  .ad {
    background-color: dimgray;
    padding: 1rem 5rem;
    border-radius: 1rem;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;

    background-color: solid white;
  }

  /*I don't like this, but whatever*/
</style>
