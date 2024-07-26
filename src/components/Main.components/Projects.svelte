<script>
    import {onMount} from "svelte";
    import * as Tab from "./Projects.components/Tab";
    import {projects} from "../../data/projects/projects.js";

    let activeTabId = 0;
    const imagePath = "assets/icons/Projects";
    const colors = ["bg-Red", "bg-Green", "bg-Blue", "bg-Pink", "bg-Yellow", "bg-Teal", "bg-Peach"];
    //Return the exact structure of project object, only with the colors property
    const technologyColors = projects.map((projectName) => {
        return {
            name: projectName,
            list: projectName.list.map((project) => {
                // This is for resetting the temp color array for each project
                let tempColors = [...colors];
                return {
                    name: project.name,
                    colors: project.technologies.map(() => {
                        //Reset the temp colors value after it's empty, cannot reset it outside the map method since it have to wait for the whole proj
                        const randomNumber = Math.floor(Math.random() * tempColors.length);
                        const returnedColor = tempColors[randomNumber];
                        //Prevent repeating color
                        tempColors.splice(randomNumber, 1);
                        return returnedColor;
                    })
                }
            }),
        }
    })


    const handleClick = (tabValue) => {
        activeTabId = tabValue;
    };

    //Animated indicator

    // The TailwindCss "transition" does not know how to transit the background horizontally
    // between component if you only specify the background color, thus a distinct component
    // is a proper solution for this task.

    let tabs, indicator;

    const updateTabIndicator = (tabs, indicator) => {
        indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
        indicator.style.height = tabs[0].getBoundingClientRect().height + "px";
        indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px"

        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                indicator.style.left = tab.getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px"
            })
        })
    }
    onMount(() => {
            tabs = document.querySelectorAll(".tab");
            indicator = document.querySelector("#indicator");
            updateTabIndicator(tabs, indicator);
        }
    )
</script>

<svelte:window on:resize={() => { updateTabIndicator(tabs, indicator)}}/>

<section class="flex flex-col gap-10 pt-20 md:pt-32 lg:pt-40" id="Projects">
    <h2
            class="text-center font-semibold text-2xl md:text-4xl lg:text-5xl"
            id="Heading"
    >
        Curious to see my <span class="text-Teal">creations</span>?
    </h2>
    <Tab.Root class="flex flex-col gap-10" id="Body">
        <Tab.Head class="relative w-full md:w-2/3 lg:w-1/3 flex items-center mx-auto px-2 py-2 bg-Surface0 rounded-lg">
            <div class="absolute transition-all duration-200 my-auto mx-2 top-0 left-0 bottom-0 rounded-lg bg-Mantle"
                 id="indicator"/>
            {#each projects as projectType, index}
                <Tab.HeadItem
                        class={"tab relative w-full flex gap-3 py-2 justify-center rounded-lg text-sm md:text-base " + (activeTabId === index ? "text-Teal" : "")}
                        id={index}
                        on:click={() => handleClick(index)}>
                    {#if projectType.name === "Personal work"}
                        <i class="ri-user-3-fill"></i>
                    {:else if projectType.name === "Team projects"}
                        <i class="ri-team-fill"></i>
                    {/if}
                    <p class="">{projectType.name}</p>
                </Tab.HeadItem
                >
            {/each}
        </Tab.Head>
        {#each projects as projectType, projectTypeIndex}
            <Tab.Content {activeTabId} class="flex flex-col md:grid md:grid-cols-2 gap-8 transition-all"
                         id={projectTypeIndex}>
                {#each projectType.list as project, projectIndex}
                    <div class="flex flex-col 2xl:flex-row gap-5 bg-Base rounded-xl p-5">
                        <img class="object-cover 2xl:w-[calc(100vw/6)] aspect-[6/3] 2xl:aspect-[4/3] rounded-lg"
                             src={`${imagePath}/${projectType.imageFolder}/${project.image_name}.png`}
                             alt="project"/>
                        <div class="flex h-full flex-col gap-2">
                            <a href={project.link} target="_blank">
                                <h3 class="text-xl lg:text-2xl leading-none font-semibold">{project.name}
                                    <i class="ri-external-link-fill"> </i>
                                </h3>
                            </a>
                            <p class="text-sm lg:text-base">{project.description}</p>
                            <div class="mt-2 flex gap-3">
                                {#each project.technologies as technology, technologyIndex}
                                    <!--accessTechnologyColors with the root index (projects index), then the project inside the list property, and finally, the color property-->
                                    <p class={"rounded-lg text-sm text-Base px-2 py-[2px] " + technologyColors[projectTypeIndex].list[projectIndex].colors[technologyIndex]}>{technology}</p>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </Tab.Content>
        {/each}

    </Tab.Root>
</section>
