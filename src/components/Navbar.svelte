<script lang="ts">
  import discord from "../assets/discord.svg";
  let avatar = discord;
  let online = false;
</script>

<div class="navbar bg-neutral">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/projects">Projects</a></li>
        <li><a href="/#/links">Links</a></li>
        <li><a href="/#/techs">Technologies</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">Yakiyo's Portfolio</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/#/">Home</a></li>
      <li><a href="/#/projects">Projects</a></li>
      <li><a href="/#/links">Links</a></li>
      <li><a href="/#/techs">Technologies</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <div class="avatar {online ? 'online' : 'offline'} placeholder mx-4">
      <div class="w-10 rounded-full border-gray-500 border">
        <div
          class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img src={avatar} alt="avatar-img" />
        </div>
      </div>
    </div>
  </div>
</div>
