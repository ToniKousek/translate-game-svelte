import { Config } from "@sveltejs/kit";
import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

const config: Config = {
  kit: {
    adapter: adapter(),
  },
};
export default config;
