<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./lib/router";
  import Router from "svelte-spa-router";
</script>

<svelte:body class="bg-gray-600"></svelte:body>

<div class="flex flex-col justify-center items-center">
  <Navbar></Navbar>

  <div
    class="border bg-gray-500 min-h-[90vh] w-[90%] border-base-300 my-[5vh]"
  >
    <div class="flex flex-col justify-center items-center w-full min-h-[80vh]">
      <Router {routes} />
    </div>
  </div>
</div>
