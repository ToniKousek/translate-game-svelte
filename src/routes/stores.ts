import { get, writable } from "svelte/store";

export enum ColorModes {
  DarkMode,
  LightMode,
}

export function storableColorMode(data: ColorModes) {
  const store = writable(data);
  const { subscribe, set, update } = store;
  const isBrowser = typeof window !== "undefined";

  isBrowser &&
    localStorage["color-mode"] &&
    set(JSON.parse(localStorage["color-mode"]));

  return {
    subscribe,
    set: (n: ColorModes) => {
      isBrowser && (localStorage["color-mode"] = JSON.stringify(n));

      if (n === ColorModes.LightMode) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }

      set(n);
    },
    update: (cb: (previous_value: ColorModes) => ColorModes) => {
      const updatedStore = cb(get(store));

      isBrowser && (localStorage["color-mode"] = JSON.stringify(updatedStore));
      set(updatedStore);
    },
    toggle: () => {
      let updatedStore = get(store);

      if (updatedStore === ColorModes.LightMode) {
        document.documentElement.setAttribute("data-theme", "dark");
        updatedStore = ColorModes.DarkMode;
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        updatedStore = ColorModes.LightMode;
      }
      isBrowser && (localStorage["color-mode"] = JSON.stringify(updatedStore));

      set(updatedStore);
    },
  };
}

export const colorMode = storableColorMode(ColorModes.LightMode);
