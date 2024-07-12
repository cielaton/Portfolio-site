<script>
  export let scrollY;

  let navigations = [
    { name: "Home", link: "" },
    { name: "Tools", link: "" },
    { name: "Projects", link: "" },
    { name: "About me", link: "" },
  ];
</script>

<header
  class={"sticky z-10 top-0 px-10 flex flex-row items-center justify-between border border-solid " +
    (scrollY > 0
      ? "py-4 bg-Crust border-Text"
      : "py-6 bg-transparent border-transparent")}
>
  <div class="flex gap-8">
    <h1 class="font-bold text-4xl"><span class="text-Teal">ciel</span>aton</h1>
    <div class="sm:flex gap-8 items-center hidden">
      {#each navigations as element}
        <a href={element.link}>
          <p>{element.name}</p>
        </a>
      {/each}
    </div>
  </div>
</header>
