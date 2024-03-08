<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavUl,
    NavHamburger,
    NavLi,
    Avatar,
    Dropdown,
    DropdownItem,
    Skeleton,
  } from "flowbite-svelte";
  import { onMount } from "svelte";
  const userid = "695307292815654963";
  const lanyardRoute = `https://api.lanyard.rest/v1/users/${userid}`;
  let discord: Record<string, string> | undefined = undefined;

  const links: [string, string][] = [
    ["/#/", "Home"],
    ["/#/projects", "Projects"],
    ["/#/links", "Links"],
    ["/#/techs", "Technologies"],
  ];
  onMount(async () => {
    const res: Record<string, unknown> | null = await fetch(lanyardRoute)
      .then((r) => r.json())
      .catch((e) => {
        console.error(e);
        return null;
      });
    if (!res) return;
    if (!res.success) {
      console.error("Success returned false", res);
      return;
    }
    const data = res.data as Record<string, unknown>;
    const user = data.discord_user as Record<string, string>;
    const avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
    let statusColor = "gray";
    switch (data.discord_status) {
      case "dnd":
        statusColor = "red";
        break;
      case "online":
        statusColor = "green";
        break;
      case "idle":
        statusColor = "yellow";
        break;
    }
    discord = {
      avatar,
      statusColor,
    };
  });
</script>

<Navbar let:NavContainer>
  <NavContainer
    class="rounded-lg border bg-gray-100 px-5 py-2 dark:bg-gray-900"
  >
    <!-- Navbar brand name -->
    <NavBrand href="/#/">
      <!-- TODO: gradient colors on the name -->
      <span
        class="mx-4 self-center whitespace-nowrap text-xl font-semibold text-black hover:text-cyan-700 dark:text-white"
        >Yakiyo</span
      >
    </NavBrand>

    <!-- Avatar section -->
    <div class="mx-4 flex items-center md:order-2">
      <!-- TODO: status indicator -->
      <Avatar
        id="discord-rpc"
        src={discord?.avatar}
        dot={{ color: discord?.statusColor }}
      />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>

    <!-- Avatar drop down -->
    <Dropdown placement="bottom" triggeredBy="#discord-rpc">
      <!-- <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>Sign out</DropdownItem> -->
      <DropdownItem>Todo!</DropdownItem>
    </Dropdown>

    <!-- Page links -->
    <NavUl>
      {#each links as link}
        <NavLi href={link[0]}>
          <span class="text-lg">{link[1]}</span></NavLi
        >
      {/each}
    </NavUl>
  </NavContainer>
</Navbar>
