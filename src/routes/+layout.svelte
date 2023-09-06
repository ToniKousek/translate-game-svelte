<nav>
  <a href="/">Go to home</a>
  <a href="/game">Go to game</a>
  <a href="/time-attack">Go to time attack</a>
</nav>
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
</style>
