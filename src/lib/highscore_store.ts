import { writable, get } from "svelte/store";
import type { GameType } from "./game_types";

interface Highscore {
  type: GameType;
  value: number;
}

export function storable(data: Highscore[]) {
  const store = writable(data);
  const { subscribe, set, update } = store;
  const isBrowser = typeof window !== "undefined";

  isBrowser &&
    localStorage["highscores"] &&
    set(JSON.parse(localStorage["highscores"]));

  return {
    subscribe,
    set: (newData: Highscore[]) => {
      isBrowser && (localStorage["highscores"] = JSON.stringify(newData));
      set(newData);
    },
    new: (type: GameType, value: number) => {
      let currentStore: Highscore[] = get(store);

      let found = false;
      for (let i = 0; i < currentStore.length; i++) {
        const highscore = currentStore[i];
        if (highscore.type == type) {
          currentStore[i].value = value;
          found = true;
        }
      }
      // if there is not the highscore type in the store
      // create the highscore
      !found && currentStore.push({ type: type, value: value });

      isBrowser && (localStorage["highscores"] = JSON.stringify(currentStore));
      set(currentStore);
    },
    get: (type: GameType) => {
      const currentStore = get(store);
      console.log("Getting the highscore\nCurrent:");
      console.log(currentStore);
      console.log("Got type: ");
      console.log(type);

      for (let i = 0; i < currentStore.length; i++) {
        const highscore = currentStore[i];
        console.log("Searching: ");
        console.log(highscore.type);
        console.log("Is it equal?");
        console.log(highscore.type == type);

        if (highscore.type == type) {
          return highscore.value;
        }
      }
      // if there is not the highscore type in the store
      // return 0
      return 0;
    },
  };
}

const startingHighscores: Highscore[] = [];

export const highscore = storable(startingHighscores);
