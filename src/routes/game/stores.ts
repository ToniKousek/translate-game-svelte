import { writable, get } from 'svelte/store'

export function storable(data:any, name:string) {
   const store = writable(data);
   const { subscribe, set, update } = store;
   const isBrowser = typeof window !== 'undefined';

   isBrowser &&
      localStorage[name] &&
      set(JSON.parse(localStorage[name]));

   return {
      subscribe,
      set: (newData: any) => {
         isBrowser && (localStorage[name] = JSON.stringify(newData));
         set(newData);
      },
      update: (callback: (arg0: any) => any) => {
         const updatedStore = callback(get(store));

         isBrowser && (localStorage[name] = JSON.stringify(updatedStore));
         set(updatedStore);
      }
   };
}
export const highscore = storable(0,"highscore-normal");