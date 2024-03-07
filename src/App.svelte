<script>
  import Router from "svelte-spa-router";
  import { routes } from "./lib/router";
  import Navbar from "./components/Navbar.svelte";
</script>

<Navbar></Navbar>

<div class="flex justify-center px-4 py-16 border-t border-base-300">
  <Router {routes}></Router>
</div>
