<script>
  import tools from "../../data/Tools/tools.js";

  const toolSectionStyles = tools.map((tool) => {
    switch (tool.field) {
      case "Front-end":
        return {
          span: "col-span-6",
          text_color: "text-Teal",
        };
      case "Back-end":
        return {
          span: "col-span-4",
          text_color: "text-Red",
        };
      case "Embedded":
        return {
          span: "col-span-3",
          text_color: "text-Lavender",
        };
      case "Linux administration":
        return {
          span: "col-span-4",
          text_color: "text-Green",
        };
      case "Database":
        return {
          span: "col-span-3",
          text_color: "text-Blue",
        };
      case "Hosting and deployment":
        return {
          span: "col-span-5",
          text_color: "text-Yellow",
        };
      case "Miscellaneous":
        return {
          span: "col-span-5",
          text_color: "text-Pink",
        };
    }
  });
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
    {#each tools as tool, index}
      <!--Can use the styles index directly because the map method in the script
      mapped the styles at the same index as the tool's field-->
      <div
        class={`p-7 flex flex-col gap-5 bg-Base rounded-lg ${toolSectionStyles[index].span}`}
      >
        <h3
          class={`font-semibold text-2xl ${toolSectionStyles[index].text_color}`}
        >
          {tool.field}
        </h3>
        <p>{tool.description}</p>
        <div class="flex gap-14 justify-center">
          {#each tool.icons.name as iconName (iconName)}
            <img
              class="h-14"
              src={`${iconsPath}/${tool.icons.path}/${iconName}.png`}
              alt={iconName}
            />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
