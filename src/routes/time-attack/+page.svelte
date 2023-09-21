<div class="main-container">
  <h1>Time attack</h1>
  <!--<h2>Chose your difficulty:</h2>-->
  <div class="container">
    <div class="link-container">
      <a href="/time-attack/easy">
        <span class="material-symbols-outlined easy-difficulty">
          signal_cellular_1_bar
        </span>
        <span>Easy</span>
      </a>
    </div>

    <p>
      You have 60 seconds to reach your high score. Every time you miss, your
      time is deducted by 5 seconds
    </p>

    <div class="link-container">
      <a href="/time-attack/medium">
        <span class="material-symbols-outlined medium-difficulty">
          signal_cellular_3_bar
        </span>
        <span>Medium</span>
      </a>
    </div>

    <p>
      You have 50 seconds to reach your high score. Every time you miss, your
      time is deducted by 7 seconds
    </p>

    <div class="link-container">
      <a href="/time-attack/hard">
        <span class="material-symbols-outlined hard-difficulty">
          network_cell
        </span>
        <span>Hard</span>
      </a>
    </div>

    <p>
      You have 40 seconds to reach your high score. Every time you miss, your
      time is deducted by 10 seconds
    </p>
  </div>
</div>

<style>
  .main-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
</style>
