<script>
  let scrollY;
  let innerHeight = 0,
    innerWidth = 0;

  const goTop = () => {
    document.body.scrollIntoView();
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />
