<script>
  import ThemeController from "./ThemeController.svelte";
</script>

<!-- <div class="mockup-window border-2 bg-base-300 border-base-200 min-h-screen m-10">
  <ThemeController></ThemeController>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div> -->

<div
  class="rounded-lg min-h-screen m-10 bg-base-300 border-base-200 flex flex-col"
>
  <!-- Nav menu -->
  <nav class="flex flex-row justify-between items-center mt-2">
    <div class="flex flex-row justify-around items-center">
      {#each [0, 1, 2] as _}
        <div
          class="w-[25px] h-[25px] bg-base-100 rounded-full inline-block border-2 border-black m-2"
        ></div>
      {/each}
    </div>
    <ThemeController></ThemeController>
  </nav>

  <!-- Divider -->
  <div class="divider"></div>
  <!-- Content slot -->
  <slot />
</div>
