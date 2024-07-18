<script>
    export let activeTabId;
    export let id;
</script>

{#if activeTabId === id}
    <div class={$$restProps.class || ""} {id} role="tabpanel">
        <slot/>
    </div>
{/if}
