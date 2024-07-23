<script>
    import tools from "../../data/tools/tools.js";
    import {beforeUpdate} from "svelte";

    let toolSectionSpan = [], toolSectionTextColor = [];
    beforeUpdate(() => {
        tools.forEach((tool) => {
            toolSectionSpan.push("col-span-" + tool.styles.span)
            toolSectionTextColor.push('text-' + tool.styles.text_color);
        })
    })
    const iconsPath = "assets/Main/Tools";
</script>

<section
        id="Tools"
        class="flex flex-col gap-5 md:gap-10 pt-5 lg:pt-20"
>
    <div id="Heading" class="flex gap-4 lg:gap-5 items-center">
        <div
                class="bg-Teal rounded-lg relative p-2 text-Base leading-none text-lg lg:text-2xl lg:leading-none"
        >
            <i class="ri-settings-5-fill"></i>
        </div>
        <h2 class="font-semibold text-2xl md:text-4xl lg:text-5xl">
            Favourite development tools
        </h2>
    </div>

    <div id="Body" class="flex flex-col lg:grid lg:grid-cols-10 gap-7 lg:gap-5">
        {#each tools as tool, index}
            <!--Can use the styles index directly because the map method in the script
            mapped the styles at the same index as the tool's field-->
            <div
                    class={"p-10 lg:p-7 flex flex-col gap-5 bg-Base rounded-lg " + toolSectionSpan[index]}
            >
                <h3
                        class={"leading-none font-semibold text-2xl " + toolSectionTextColor[index]}
                >
                    {tool.field}
                </h3>
                <p class="text-base md:text-lg">{tool.description}</p>
                <div
                        class={"relative flex items-center max-w-full justify-between flex-wrap lg:flex-nowrap " +
            (tool.icons.name.length <= 4
              ? tool.icons.name.length <= 2
                ? "px-20 md:px-44 lg:px-14 xl:px-28"
                : "px-2 md:px-20 lg:px-0 xl:px-20"
              : " gap-y-3 px-8 md:px-20 lg:px-0 xl:px-20")}
                >
                    {#each tool.icons.name as iconName (iconName)}
                        <img
                                class={iconName === "IntelFPGA" ? "h-6 md:h-8" : "h-10 md:h-14"}
                                src={`${iconsPath}/${tool.icons.path}/${iconName}.png`}
                                alt={iconName}
                        />
                        <!--This is for break the icons in 2 rows in mobile view-->
                        {#if iconName === "JavaScript"}
                            <div class="basis-full lg:hidden"></div>
                        {/if}
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
