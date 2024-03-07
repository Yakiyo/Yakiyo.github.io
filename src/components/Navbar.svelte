<script>
  import Hamburger from "./Hamburger.svelte";
</script>

<!-- @component
    A navbar to display on the top of the page
 -->

<!-- <div class="flex justify-center items-center my-4"> -->
<nav
  class="w-auto flex flex-row justify-between my-4 mx-10"
  style="border-style: solid; border-width: 4px;border-color: black;"
>
  <Hamburger></Hamburger>
  <p>Yakiyo's Portfolio</p>
  <div>
    <p>Theme</p>
    <p>Avatar Section</p>
  </div>
</nav>
<!-- </div> -->
