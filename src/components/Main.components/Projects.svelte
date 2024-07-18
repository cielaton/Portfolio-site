<script>
  import * as Tab from "./Projects.components/Tab";

  const tabs = ["Personal work", "Team projects"];

  let activeTabId = 0;

  const handleClick = (tabValue) => {
    activeTabId = tabValue;
  };
</script>

<section id="Projects" class="pt-10 lg:pt-40">
  <div id="Heading">
    <h2 class="text-center font-semibold text-2xl md:text-4xl lg:text-5xl">
      Curious to see my <span class="text-Teal">creation</span>?
    </h2>
    <Tab.Root class="bg-Red">
      <Tab.Head>
        {#each tabs as tabName, index}
          <Tab.HeadItem id={index} on:click={handleClick(index)}
            >{tabName}</Tab.HeadItem
          >
        {/each}
      </Tab.Head>
    </Tab.Root>
  </div>
</section>
