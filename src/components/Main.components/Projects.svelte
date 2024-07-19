<script>
    import {onMount} from "svelte";
    import * as Tab from "./Projects.components/Tab";

    const tabNames = ["Personal work", "Team projects"];

    let activeTabId = 0;

    const handleClick = (tabValue) => {
        activeTabId = tabValue;
    };

    //animated indicator

    // The TailwindCss "transition" does not know how to transit the background horizontally
    // between component if you only specify the background color, thus a distinct component
    // is a proper solution for this task.
    onMount(() => {
            let tabs = document.querySelectorAll(".tab");
            let indicator = document.querySelector("#indicator");

            indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
            indicator.style.height = tabs[0].getBoundingClientRect().height + "px";
            indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px"

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                indicator.style.left = tab.getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px"
            })
        })
        }
    )

</script>

<section class="flex flex-col gap-10 pt-10 lg:pt-40" id="Projects">
    <h2
            class="text-center font-semibold text-2xl md:text-4xl lg:text-5xl"
            id="Heading"
    >
        Curious to see my <span class="text-Teal">creation</span>?
    </h2>
    <Tab.Root class="" id="Body">
        <Tab.Head class="relative w-1/3 flex items-center mx-auto px-2 py-2 bg-Surface0 rounded-lg">
            <div id="indicator" class="absolute transition-all my-auto mx-2 z-[1] top-0 left-0 bottom-0 rounded-lg bg-Mantle"/>
            {#each tabNames as tabName, index}
                <Tab.HeadItem
                        class={"tab relative z-[10] w-full flex gap-3 py-2 justify-center rounded-lg " + (activeTabId === index ? "text-Teal" : "")}
                        id={index}
                        on:click={() => handleClick(index)}>
                    {#if tabName === "Personal work"}
                        <i class="ri-user-3-fill text-base"></i>
                    {:else if tabName === "Team projects"}
                        <i class="ri-team-fill text-base"></i>
                    {/if}
                    <p class="text-base">{tabName}</p>
                </Tab.HeadItem
                >
            {/each}
        </Tab.Head>
        <Tab.Content {activeTabId} class="" id={0}>Personal Work</Tab.Content>
        <Tab.Content {activeTabId} class="" id={1}>Team projects</Tab.Content>
    </Tab.Root>
</section>
