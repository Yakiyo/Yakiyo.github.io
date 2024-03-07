<script>
  import Router from "svelte-spa-router";
  import ThemeController from "./components/ThemeController.svelte";
  import Window from "./components/Window.svelte";
  import { routes } from "./lib/router";
</script>

<!-- <div class="mockup-window border-2 bg-base-300 border-base-200 min-h-screen m-10">
  <ThemeController></ThemeController>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div> -->

<Window>
  <ThemeController></ThemeController>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">
    <Router {routes}></Router>
  </div>
</Window>
