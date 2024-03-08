import Home from "../routes/Home.svelte";
import E404 from "../routes/404.svelte";

export const routes = {
  "/": Home,

  /**
   * Catch all page
   */
  "*": E404,
};
