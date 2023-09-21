import { Config } from "@sveltejs/kit";
import azure from "svelte-adapter-azure-swa";
import preprocess from "svelte-preprocess";

const config: Config = {
  kit: {
    adapter: azure(),
  },
};
export default config;
