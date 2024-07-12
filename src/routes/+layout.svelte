<script>
  import "../app.css";
  import Footer from "/src/components/Footer.svelte";
  import Header from "/src/components/Header.svelte";

  let scrollY;
  let innerHeight = 0,
    innerWidth = 0;

  const goTop = () => {
    document.body.scrollIntoView();
  };
</script>

<div class="relative flex flex-col w-full min-h-screen">
  <Header />
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />
