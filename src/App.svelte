<script>
  import Router from "svelte-spa-router";
  import Window from "./components/Window.svelte";
  import { routes } from "./lib/router";
</script>

<Window>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">
    <Router {routes}></Router>
  </div>
</Window>
