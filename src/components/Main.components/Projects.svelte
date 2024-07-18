<script>
    import * as Tab from "./Projects.components/Tab";

    const tabs = ["Personal work", "Team projects"];

    let activeTabId = 0;

    const handleClick = (tabValue) => {
        activeTabId = tabValue;
    };
</script>

<section id="Projects" class="flex flex-col gap-10 pt-10 lg:pt-40">
    <h2
            id="Heading"
            class="text-center font-semibold text-2xl md:text-4xl lg:text-5xl"
    >
        Curious to see my <span class="text-Teal">creation</span>?
    </h2>
    <Tab.Root id="Body" class="">
        <Tab.Head class="mx-auto w-1/3 flex flex-row gap-4 px-2 py-2 bg-Base rounded-lg">
            {#each tabs as tabName, index}
                <Tab.HeadItem
                        class="w-full flex gap-3 py-2 justify-center"
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
        <Tab.Content class="" id={0} {activeTabId}>Personal Work</Tab.Content>
        <Tab.Content class="" id={1} {activeTabId}>Team projects</Tab.Content>
    </Tab.Root>
</section>
