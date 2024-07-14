<script>
  import tools from "../../data/Tools/tools.js";
  const iconsPath = "assets/Main/Tools";
</script>

<section
  id="Tools"
  class="flex flex-col px-4 lg:px-20 pt-5 lg:pt-20 gap-5 md:gap-10"
>
  <div id="Heading" class="flex gap-5 items-center">
    <div
      class="bg-Teal rounded-lg relative leading-none p-2 text-Base text-3xl"
    >
      <i class="ri-settings-5-fill"></i>
    </div>
    <h2 class="font-semibold text-3xl md:text-5xl">
      Favourite development tools
    </h2>
  </div>

  <div id="Body" class="grid grid-cols-10 gap-5">
    {#each tools as tool (tool.id)}
      <div
        class={`p-5 flex flex-col gap-5 bg-Base rounded-lg col-span-${tool.span_for}`}
      >
        <h3 class={`font-semibold text-2xl text-${tool.color}`}>
          {tool.field}
        </h3>
        <p>{tool.description}</p>
        <div class="flex gap-10 justify-center">
          {#each tool.icons.name as iconName (iconName)}
            <img class="h-10" src={`${iconsPath}/${tool.icons.path}/${iconName}.png`} alt={iconName} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
