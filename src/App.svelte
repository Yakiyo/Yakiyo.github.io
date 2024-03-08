<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import { routes } from "./lib/router";
  import Router from "svelte-spa-router";
  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<!-- <svelte:body class="bg-gray-600"></svelte:body> -->

<div
  class="flex min-w-full flex-col items-center justify-center border border-solid border-black"
>
  <Navbar></Navbar>
  <Router {routes} />
  <Footer footerType="logo">
    <FooterCopyright href="/#/" by="Yakiyo"></FooterCopyright>
  </Footer>
</div>
