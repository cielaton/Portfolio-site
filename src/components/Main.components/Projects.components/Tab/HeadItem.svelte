<script>
  export let id;
</script>

<li class={$$restProps.class || ""}>
  <button on:click class="" {id} type="button" role="tab">
    <slot />
  </button>
</li>
